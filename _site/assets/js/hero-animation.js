class HeroAnimation {
    constructor() {
        this.container = document.getElementById('hero-canvas');
        if (!this.container) {
            console.error("Hero Canvas element not found!");
            return;
        }

        // FIX: Ensure container is visible
        this.container.style.display = 'block';
        this.container.style.visibility = 'visible';
        this.container.style.opacity = '1';

        // 1. Setup Scene
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true,
            // FIX: Ensure proper rendering
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0); // FIX: Transparent background
        
        this.container.appendChild(this.renderer.domElement);

        this.uniforms = {
            uTime: { value: 0 },
            uTexture: { value: null },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uImageAspect: { value: 1 }
        };

        this.init();
    }

    init() {
        // FIX: Fallback if Three.js fails
        if (typeof THREE === 'undefined') {
            console.error("Three.js not loaded!");
            this.showFallback();
            return;
        }

        const loader = new THREE.TextureLoader();
        loader.setCrossOrigin('anonymous');

        // FIX: Multiple fallback image options
        const imageURLs = [
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop'
        ];

        this.loadImageWithFallback(imageURLs, 0);
    }

    loadImageWithFallback(urls, index) {
        if (index >= urls.length) {
            console.error("All image URLs failed to load");
            this.showFallback();
            return;
        }

        const loader = new THREE.TextureLoader();
        loader.load(
            urls[index],
            (texture) => {
                console.log("Texture loaded successfully");
                
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                
                this.uniforms.uTexture.value = texture;
                const imageAspect = texture.image.width / texture.image.height;
                this.uniforms.uImageAspect.value = imageAspect;

                this.createMesh();
                this.addEvents();
                this.animate();

                // FIX: Ensure container is visible
                this.container.style.opacity = '1';
                this.container.classList.add('loaded');
                
                document.dispatchEvent(new Event('heroLoaded'));
            },
            undefined,
            (error) => {
                console.error(`Failed to load image ${index + 1}:`, error);
                this.loadImageWithFallback(urls, index + 1);
            }
        );
    }

    showFallback() {
        // FIX: Show fallback content if WebGL fails
        this.container.innerHTML = `
            <div style="width:100%;height:100%;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);display:flex;align-items:center;justify-content:center;">
                <div style="text-align:center;color:white;">
                    <h2>Her Bird Boutique</h2>
                    <p>Where Sophistication Takes Flight</p>
                </div>
            </div>
        `;
        document.dispatchEvent(new Event('heroLoaded'));
    }

    createMesh() {
        const geometry = new THREE.PlaneGeometry(1, 1, 60, 60);

        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            side: THREE.DoubleSide,
            vertexShader: `
                uniform float uTime;
                uniform vec2 uMouse;
                varying vec2 vUv;
                varying float vElevation;

                void main() {
                    vUv = uv;
                    vec3 pos = position;

                    // FIX: Smoother wave calculations
                    float elevation = sin(pos.x * 3.0 + uTime * 0.5) * 0.1;
                    elevation += sin(pos.y * 5.0 + uTime * 0.8) * 0.05;
                    elevation += sin((pos.x + pos.y) * 4.0 + uTime * 0.3) * 0.02;

                    pos.z += elevation;
                    vElevation = elevation;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D uTexture;
                uniform vec2 uResolution;
                uniform float uImageAspect;
                
                varying vec2 vUv;
                varying float vElevation;

                void main() {
                    // FIX: Better aspect ratio handling
                    vec2 ratio = vec2(
                        min((uResolution.x / uResolution.y) / uImageAspect, 1.0),
                        min((uResolution.y / uResolution.x) * uImageAspect, 1.0)
                    );

                    vec2 uv = vec2(
                        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
                    );

                    vec4 color = texture2D(uTexture, uv);
                    float shadow = vElevation * 1.8; 
                    color.rgb += shadow * 0.2;
                    color.rgb *= 0.9; 

                    // FIX: Ensure no black screen
                    if (color.a == 0.0) {
                        color = vec4(0.1, 0.1, 0.2, 1.0);
                    }

                    gl_FragColor = color;
                }
            `
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.resize();
    }

    resize() {
        if (!this.mesh) return;

        const dist = this.camera.position.z;
        const vFOV = THREE.MathUtils.degToRad(this.camera.fov);
        const height = 2 * Math.tan(vFOV / 2) * dist;
        const width = height * (window.innerWidth / window.innerHeight);

        this.mesh.scale.set(width * 1.1, height * 1.1, 1);
        this.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    }

    addEvents() {
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.resize();
        });
    }

    animate() {
        if (!this.mesh) return;
        
        this.uniforms.uTime.value += 0.01;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate.bind(this));
    }
}

// FIX: Better initialization with error handling
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other resources to load
    setTimeout(() => {
        try {
            new HeroAnimation();
        } catch (error) {
            console.error("Hero Animation failed:", error);
            document.dispatchEvent(new Event('heroLoaded'));
        }
    }, 100);
});