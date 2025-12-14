---
layout: page
# title: Clients & Testimonials
permalink: /clients/
---

<style>

/* ------------------------------------------------------------------- */
/* GLOBAL VARIABLES (For consistency) */
/* ------------------------------------------------------------------- */

    :root {
        --text-light: #F2F0E9;
        --accent-color: #C64836; 
        --brand-color: #E83C91; /* Pink */
        --text-color: #540863; /* Dark Purple */
        --dark-grey: #333;
        --light-grey: #888;
        --page-background: #fff;
    }

/* ------------------------------------------------------------------- */
/* BASE PAGE & TYPOGRAPHY */
/* ------------------------------------------------------------------- */

    .clients-page {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 6rem 2vw 8rem; 
        background: #ffffff; 
    }
    
    .clients-page .container {
        padding: 0 2vw;
    }

    .clients-page h1 { 
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem; 
        margin-bottom: 0.5rem;
        color: var(--brand-color); 
        font-weight: 300;
        letter-spacing: 2px;
        text-align: center;
    }
    
    .page-subtitle {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.3rem;
        color: var(--light-grey);
        font-style: italic;
        font-weight: 300;
        text-align: center;
        margin-bottom: 4rem;
    }

/* ------------------------------------------------------------------- */
/* TESTIMONIAL GRID AND CARDS - ANIMATED RIBBON DESIGN (OPTIMIZED) */
/* ------------------------------------------------------------------- */

    .testimonials-grid-full {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 3rem 2rem;
    }

    .testimonial-card {
        background: #ffffff; 
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 12px;
        padding: 0;
        
        /* Initial state with slight lift and gentle rotation */
        transform: rotateZ(-0.5deg) translateY(0);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        
        /* UPDATED: Snappy bounce effect for superior animation */
        transition: all 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.27); 
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
        position: relative;
        overflow: hidden; 
    }

    /* UPDATED: Winning Animation - Straighten, lift higher, deepen shadow */
    .testimonial-card:hover {
        transform: rotateZ(0deg) translateY(-8px); 
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25); 
    }
    
    /* Staggered Animation Delay (1-8 cards) */
    .testimonial-card:nth-child(1) { animation-delay: 0.05s; }
    .testimonial-card:nth-child(2) { animation-delay: 0.15s; }
    .testimonial-card:nth-child(3) { animation-delay: 0.25s; }
    .testimonial-card:nth-child(4) { animation-delay: 0.35s; }
    .testimonial-card:nth-child(5) { animation-delay: 0.45s; }
    .testimonial-card:nth-child(6) { animation-delay: 0.55s; }
    .testimonial-card:nth-child(7) { animation-delay: 0.65s; }
    .testimonial-card:nth-child(8) { animation-delay: 0.75s; }


    /* Quote Content Area (Main Card Body) */
    .testimonial-quote-area {
        padding: 35px 35px 30px;
        position: relative;
    }

    /* Quote Icon: Large, soft pink */
    .testimonial-card::before {
        content: '“';
        font-family: 'Playfair Display', serif;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 8rem; 
        color: var(--brand-color); 
        opacity: 0.1;
        line-height: 1;
        z-index: 0;
        pointer-events: none;
    }


    .testimonial-quote-area p {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.4rem; 
        line-height: 1.7;
        color: var(--dark-grey);
        font-style: italic;
        padding-left: 0;
        border-left: none;
        position: relative;
        z-index: 1; 
    }
    
    /* AUTHOR BLOCK: The Colored Ribbon Footer */
    .testimonial-author-wrapper {
        background: var(--brand-color); 
        color: white;
        padding: 20px 35px;
        margin-top: auto; 
        position: relative;
        z-index: 2; 
        
        /* Diagonal Cut / Ribbon Effect (CSS Skew) */
        clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
        padding-top: 40px; 
    }
    
    /* Pseudo-element to make the ribbon look like it's folded over */
    .testimonial-author-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.0) 100%);
        pointer-events: none;
        z-index: 3;
    }
    

    .testimonial-author {
        display: flex;
        align-items: center; 
        text-align: left;
        padding-top: 5px;
        color: white; 
    }
    
    /* Non-Geometric Feminine Design Element */
    .testimonial-author-icon {
        font-family: serif; 
        font-weight: 400;
        font-size: 1.8rem; 
        margin-right: 15px;
        flex-shrink: 0;
        color: var(--text-light); 
        line-height: 1;
        transform: translateY(2px);
    }

    .testimonial-author-info {
        text-align: left;
    }

    .testimonial-author-name {
        font-family: 'Playfair Display', serif; 
        font-weight: 700;
        font-size: 1.15rem; 
        color: white;
        margin-bottom: 2px;
    }
    
    .testimonial-author-location,
    .testimonial-author-company {
        font-family: 'Cormorant Garamond', serif;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.3;
        font-style: normal;
    }
    
    /* Fade in animation keyframes */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }


/* ------------------------------------------------------------------- */
/* WHATSAPP FLOAT BUTTON (Standard) */
/* ------------------------------------------------------------------- */

.whatsapp-float {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 60px;
    height: 60px;
    background: #25d366; 
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
    z-index: 1000;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out; 
    animation: none !important;
}

.whatsapp-float::before {
    content: none;
}

.whatsapp-float:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3); 
}

.whatsapp-float:active {
    transform: scale(0.95);
}

.whatsapp-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.whatsapp-icon svg {
    fill: white; 
    width: 32px;
    height: 32px;
}

.whatsapp-text {
    display: none; 
}


/* ------------------------------------------------------------------- */
/* MOBILE RESPONSIVE FIXES (Finalized) */
/* ------------------------------------------------------------------- */
@media (max-width: 992px) {
    .testimonials-grid-full {
        grid-template-columns: repeat(2, 1fr);
    }
    .clients-page {
        padding: 4rem 2vw 6rem;
    }
    .testimonial-author-wrapper {
        clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
        padding-top: 30px; 
    }
}

@media (max-width: 600px) {
    .testimonials-grid-full {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .clients-page {
        /* FIXED: Reduced padding on the main container */
        padding: 4rem 15px 5rem; 
    }
    .clients-page h1 {
        font-size: 2rem;
    }
    .page-subtitle {
        font-size: 1.1rem;
        margin-bottom: 3rem;
    }
    .testimonial-quote-area {
        /* FIXED: Reduced internal padding */
        padding: 20px 15px 15px; 
    }
    .testimonial-quote-area p {
        font-size: 1.25rem;
    }
    .testimonial-author-wrapper {
        /* FIXED: Reduced internal padding */
        padding: 10px 15px;
        padding-top: 25px;
    }
    .testimonial-author {
        padding-top: 5px;
    }
    .testimonial-author-icon {
        font-size: 1.4rem; 
        margin-right: 10px;
    }
    .testimonial-author-name {
        font-size: 1.05rem; 
    }
    .whatsapp-float {
        width: 50px;
        height: 50px;
        bottom: 15px;
        right: 15px;
    }
    .whatsapp-icon svg {
        width: 26px;
        height: 26px;
    }
}
</style>

<div class="clients-page">
    <div class="container">
        <center>
        <h2 class="collection-header">Client Testimonials</h2>
        </center>
        <p class="page-subtitle">A curated collection of sophisticated experiences shared by our valued clients.</p>
        
        <div class="testimonials-grid-full">
            {% if site.testimonials and site.testimonials.size > 0 %}
                {% for testimonial in site.testimonials %}
                <div class="testimonial-card">
                    
                    <div class="testimonial-quote-area">
                        {% if testimonial.description %}
                            <p>{{ testimonial.description }}</p>
                        {% elsif testimonial.content %}
                            <p>{{ testimonial.content }}</p>
                        {% endif %}
                    </div>

                    <div class="testimonial-author-wrapper">
                        <div class="testimonial-author">
                            <div class="testimonial-author-icon">
                                ❦
                            </div> 
                            <div class="testimonial-author-info">
                                <div class="testimonial-author-name">{{ testimonial.client_name }}</div>
                                <div class="testimonial-author-location">{{ testimonial.client_location }}</div>
                                {% if testimonial.company %}
                                <div class="testimonial-author-company">{{ testimonial.company }}</div>
                                {% endif %}
                            </div>
                        </div>
                    </div>
                </div>
                {% endfor %}
            {% else %}
            <div class="coming-soon" style="grid-column: 1 / -1; text-align: center; padding: 50px;">
                <h3 style="font-family: 'Playfair Display', serif; color: var(--brand-color);">Testimonials Coming Soon</h3>
                <p style="font-family: 'Cormorant Garamond', serif; color: var(--light-grey);">Client testimonials will be available soon through the admin panel.</p>
            </div>
            {% endif %}
        </div>
    </div>

        <a href="" 
            target="_blank" 
            class="whatsapp-float"
            aria-label="Contact us on WhatsApp">
             <div class="whatsapp-icon">
                 <svg viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.171-3.495-8.428"/>
                 </svg>
             </div>
        </a>

        <p class="page-subtitle" style="padding-top: 100px;">
            A curated collection of sophisticated experiences shared by our valued clients.
            <br>
            <a href="{{ '/' | relative_url }}" style="color:#C64836; font-weight:600; text-decoration: none; color: var(--brand-color);">
              Explore Her Bird Boutique Collections 
            </a>
        </p>

</div>