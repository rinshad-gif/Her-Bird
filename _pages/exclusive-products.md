---
layout: page
permalink: /exclusive-products/
---

<style>
    :root {
        --text-light: #F2F0E9;
        --accent-color: #C64836; 
        --brand-color: #E83C91;
        --text-color: #540863;
        --text-color2: #540863;
        --dark-grey: #333;
        --light-grey: #888;
        --page-background: #fff;
    }

/* ------------------------------------------------------------------- */
/* BASE PAGE & HEADER */
/* ------------------------------------------------------------------- */

    .products-page-container {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 6rem 2vw 8rem; 
        background: var(--page-background);
    }

    .collection-header { 
        text-align: center; 
        margin-bottom: 5rem;
        position: relative;
    }

    .collection-header h1 { 
        font-family: 'Playfair Display', serif;
        font-size: 3.5rem; 
        margin-bottom: 1rem;
        color: var(--brand-color); 
        font-weight: 300;
        letter-spacing: 2px;
    }
    
    .collection-header p {
        font-family: 'Cormorant Garamond', serif;
        font-size: 1.3rem;
        color: var(--light-grey);
        font-style: italic;
        font-weight: 300;
    }

    /* ------------------------------------------------------------------- */
    /* SHOP CONTROLS (Copied from products.md) */
    /* ------------------------------------------------------------------- */
    .shop-controls {
        margin-bottom: 4rem;
        padding: 1.5rem 0;
        border-top: 1px solid rgba(0,0,0,0.08);
        border-bottom: 1px solid rgba(0,0,0,0.08);
    }
    
    .filter-categories {
        display: flex;
        gap: 12px;
        overflow-x: auto;
        overflow-y: hidden;
        margin-bottom: 1.5rem;
        padding-bottom: 10px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
        scrollbar-color: rgba(84, 8, 99, 0.3) transparent;
    }

    .filter-categories::-webkit-scrollbar {
        height: 4px;
    }

    .filter-categories::-webkit-scrollbar-track {
        background: transparent;
    }

    .filter-categories::-webkit-scrollbar-thumb {
        background: rgba(84, 8, 99, 0.3);
        border-radius: 2px;
    }

    .filter-btn {
        padding: 10px 24px;
        border: 1.5px solid var(--text-color2);
        background: transparent;
        border-radius: 50px;
        cursor: pointer;
        font-size: 0.75rem;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 500;
        color: var(--text-color);
        transition: all 0.3s ease;
        flex-shrink: 0;
        white-space: nowrap;
    }

    .filter-btn:hover {
        background: var(--text-color2);
        color: #fff;
    }

    .filter-btn.active { 
        background: var(--text-color2); 
        color: #fff; 
        box-shadow: 0 4px 15px rgba(84, 8, 99, 0.2);
    }

    .sort-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .sort-container label {
        font-family: 'Montserrat', sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--dark-grey);
        font-weight: 500;
    }
    
    #sort-select {
        padding: 10px 40px 10px 20px;
        border: 1.5px solid rgba(0,0,0,0.15);
        border-radius: 50px;
        font-size: 0.75rem;
        font-family: 'Montserrat', sans-serif;
        color: var(--dark-grey);
        background: #fff;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23540863' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 15px center;
    }

    #sort-select:hover {
        border-color: var(--text-color);
        box-shadow: 0 2px 10px rgba(84, 8, 99, 0.1);
    }

/* ------------------------------------------------------------------- */
/* PREMIUM PRODUCT GRID - Copied from products.md */
/* ------------------------------------------------------------------- */

.products-grid-full {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 2.5rem 1.75rem;
    padding: 0;
    background: #f9fafb;
}

.product-card {
    background: #ffffff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative; /* Keep relative for absolute badge */
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
}

.product-image-link {
    display: flex; /* CHANGE: Use flex to control vertical flow */
    flex-direction: column; /* ADDED: Stack elements vertically */
    color: inherit;
    text-decoration: none;
    flex-grow: 1; /* ADDED: Allows it to stretch to card height */
}

.product-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(135deg, #540863 0%, #E83C91 100%); 
    box-shadow: inset 0 -40px 60px -10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.4s ease;
}

.product-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 15px 15px 0 0;
    filter: drop-shadow(0 10px 8px rgba(84, 8, 99, 0.3)); 
}

.product-card:hover .product-image-wrapper img {
    transform: scale(1.1);
    filter: drop-shadow(0 12px 10px rgba(84, 8, 99, 0.5));
    box-shadow: inset 0 -60px 80px -15px rgba(0, 0, 0, 0.25);
}

.product-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    padding: 25px 20px;
    opacity: 0;
    transform: translateY(25px);
    transition: all 0.35s ease;
    pointer-events: none;
    border-radius: 0 0 15px 15px;
    display: flex;
    justify-content: center;
}

.product-card:hover .product-overlay {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.view-product-btn {
    padding: 8px 18px;
    background: #ffffff;
    color: var(--brand-color);
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    box-shadow: 0 5px 20px var(--brand-color);
}

.view-product-btn:hover {
    background: var(--brand-color);
    color: #ffffff;
}

.product-info {
    padding: 0.8rem 0.8rem 1rem;
    text-align: left;
    display: flex; /* ADDED: Use flex to manage contents */
    flex-direction: column; /* ADDED: Stack contents vertically (title, price) */
    flex-grow: 1; /* ADDED: Ensures it fills the space below the image */
}

.product-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: #333;
    /* margin-bottom: 0.5rem; <--- REMOVE/COMMENT OUT THIS LINE */
    line-height: 1.3;
    transition: color 0.3s ease;
    /* FIX: Force title block height */
    height: calc(1.3em * 1); /* ✅ 1 line desktop */

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 0.5rem;
}

.product-card:hover .product-title {
    color: var(--brand-color);
}

.product-price-section {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-top: auto; /* CRITICAL FIX: Pushes this section to the bottom */
}

.product-price {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: green;
    letter-spacing: 0.5px;
}

.product-offer {
    background: linear-gradient(135deg, #FF6B6B 0%, #E83C91 100%);
    color: #fff !important;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem !important;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 20px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    box-shadow: 0 3px 10px rgba(232, 60, 145, 0.35);
    white-space: nowrap;
}

/* --- EXCLUSIVE BADGE STYLING (UPDATED) --- */
.exclusive-badge {
    position: absolute;
    top: 15px;
    right: 12px;
    /* background-color: var(--text-color); */
    background: url("https://static.vecteezy.com/system/resources/thumbnails/035/342/717/small/ai-generated-gold-background-or-texture-and-gradients-shadow-ai-generative-free-photo.jpg");
    color: #fff; 
    padding: 5px 10px;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    z-index: 5;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    color: black;
}

/* ------------------------------------------------------------------- */
/* WHATSAPP FLOAT BUTTON (Copied the clean version) */
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
    /* MOBILE RESPONSIVE (Copied and adjusted) */
    /* ------------------------------------------------------------------- */
    @media (max-width: 1200px) {
        .products-grid-full {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    }

    @media (max-width: 768px) {
        .products-page-container { 
            padding: 4rem 3vw 6rem; 
        }
        
        .collection-header {
            margin-bottom: 3.5rem;
        }

        .collection-header h1 { 
            font-size: 2.2rem;
            letter-spacing: 1px;
        }

        .collection-header p {
            font-size: 1rem;
        }

        .shop-controls {
            margin-bottom: 3rem;
            padding: 1rem 0;
        }

        .filter-categories {
            margin-bottom: 1.2rem;
            gap: 10px;
        }

        .filter-btn {
            padding: 8px 18px;
            font-size: 0.7rem;
        }

        .sort-container {
            flex-direction: row;
            justify-content: center;
        }

        .sort-container label {
            font-size: 0.7rem;
        }

        #sort-select {
            padding: 8px 30px 8px 15px;
            font-size: 0.7rem;
        }

        .products-grid-full {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.8rem 1rem;
        }

        .product-info {
            padding: 0.8rem 0.3rem 0;
        }

        .product-title {
            font-size: 0.9rem;
            line-height: 1.3;

            /* ✅ FORCE 2 LINES */
            height: calc(0.8em * 2);
            overflow: hidden;
        }

        .product-price {
            font-size: 1rem;
        }

        .product-price-section {
            margin-bottom: 10px;
            margin-left: 5px;
            margin-right: 5px;
        }

        .product-offer {
            font-size: 0.65rem !important;
            padding: 2px 6px;
        }

        .exclusive-badge {
            font-size: 0.5rem;
            position: absolute;
            top: 10px;
            right: 10px;
            color: black;
        }

        .whatsapp-float {
        width: 55px;
        height: 55px;
        bottom: 20px;
        right: 20px;
    }
    .whatsapp-icon {
        width: 28px;
        height: 28px;
    }
    }

    @media (max-width: 480px) {
        .products-page-container {
            padding: 3.5rem 3vw 5rem;
        }

        .collection-header h1 {
            font-size: 1.8rem;
        }

        .collection-header p {
            font-size: 0.95rem;
        }

        .products-grid-full {
            gap: 1.5rem 0.8rem;
        }

        .product-title {
            font-size: 0.8rem;
            min-height: 2.2rem;
            height: calc(1.25em * 2);

            white-space: normal;
            overflow: hidden;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        .product-price {
            font-size: 0.95rem;
        }

        .product-price-section {
            margin-bottom: 10px;
            margin-left: 5px;
            margin-right: 5px;
        }

        .exclusive-badge {
            font-size: 0.5rem;
            position: absolute;
            top: 200px;
            right: 10px;
            color: black;
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

    @media (max-width: 375px) {
        .exclusive-badge {
            font-size: 0.5rem;
            position: absolute;
            top: 170px;
            right: 10px;
            color: black;
        }
    }

    @media (max-width: 320px) {
        .exclusive-badge {
            font-size: 0.5rem;
            position: absolute;
            top: 140px;
            right: 10px;
            color: black;
        }
    }

    /* Fade in animation */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .product-card {
        animation: fadeInUp 0.5s ease-out forwards;
        opacity: 0;
    }

    .product-card:nth-child(1) { animation-delay: 0.05s; }
    .product-card:nth-child(2) { animation-delay: 0.1s; }
    .product-card:nth-child(3) { animation-delay: 0.15s; }
    .product-card:nth-child(4) { animation-delay: 0.2s; }
    .product-card:nth-child(5) { animation-delay: 0.25s; }
    .product-card:nth-child(6) { animation-delay: 0.3s; }
    .product-card:nth-child(7) { animation-delay: 0.35s; }
    .product-card:nth-child(8) { animation-delay: 0.4s; }

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

<div class="products-page-container">
    
    <div class="collection-header">
        <h2>Our Exclusive Collection</h2>
        <p>Limited edition designer pieces tailored for you.</p>
    </div>
    
    <div class="shop-controls">
        {% assign categories = site.exclusive_products | map: "category" | uniq | sort %}
        
        <div class="filter-categories">
            <button class="filter-btn active" data-filter="all">All Items</button>

            <nav class="category-links visually-hidden" aria-label="Product categories">
                {% for category in categories %}
                  <a href="/products/{{ category | slugify }}/">
                    {{ category }} Collection
                  </a>
                {% endfor %}
            </nav>

            {% for category in categories %}
            <button class="filter-btn" data-filter="{{ category | slugify }}">{{ category }}</button>

            <nav class="category-links visually-hidden" aria-label="Product categories">
                {% for category in categories %}
                  <a href="/products/{{ category | slugify }}/">
                    {{ category }} Collection
                  </a>
                {% endfor %}
            </nav>

            {% endfor %}
        </div>

        <div class="sort-container">
            <label for="sort-select">Sort By</label>
            <select id="sort-select">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    </div>
    
    <div class="products-grid-full" id="product-grid">
        {% if site.exclusive_products and site.exclusive_products.size > 0 %}
            {% for product in site.exclusive_products %}
            <div class="product-card" 
                 data-category="{{ product.category | slugify }}" 
                 data-price="{{ product.price }}" 
                 data-date="{{ product.date | date: '%s' }}">
                
                <a href="{{ product.url | relative_url }}" class="product-image-link">
                    <div class="product-image-wrapper">
                        <div class="exclusive-badge">Exclusive</div> 
                        
                        {% if product.image %}
                        <img src="{{ product.image | relative_url }}" alt="{{ product.name }} - exclusive designer wear by Her Bird Boutique" loading="lazy" decoding="async">
                        {% endif %}
                        <div class="product-overlay">
                            <button class="view-product-btn">View Product</button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">
                            <a class="product-title" href="{{ product.url | relative_url }}" style="text-decoration: none;">
                                {{ product.name }}
                            </a>
                        </h3>
                        <div class="product-price-section">
                            <span class="product-price">₹{{ product.price }}</span>
                            {% if product.offer %}
                            <span class="product-offer">{{ product.offer }}</span>
                            {% endif %}
                        </div>
                    </div>
                </a>
            </div>
            {% endfor %}
        {% else %}
        <div style="text-align:center; padding: 50px; grid-column: 1 / -1;">
            <h3>Exclusive Collection Coming Soon</h3>
            <p>Our designers are curating special pieces for you.</p>
        </div>
        {% endif %}
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

</div>


<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productGrid = document.getElementById('product-grid');
    // NOTE: Products selection is correctly changed to target the exclusive grid's products
    const products = Array.from(document.querySelectorAll('.products-grid-full .product-card')); 
    const sortSelect = document.getElementById('sort-select');

    function sortProducts(sortValue) {
        let sortedProducts = [...products];

        sortedProducts.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));
            const dateA = parseInt(a.getAttribute('data-date'));
            const dateB = parseInt(b.getAttribute('data-date'));

            if(sortValue === 'price-low') return priceA - priceB;
            if(sortValue === 'price-high') return priceB - priceA;
            return dateB - dateA; // Newest first (default)
        });

        sortedProducts.forEach(product => productGrid.appendChild(product));
    }

    // Set default to newest first
    sortProducts('newest');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');

            products.forEach(product => {
                if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
            // Re-sort after filtering
            sortProducts(sortSelect.value); 
        });
    });

    sortSelect.addEventListener('change', () => {
        // Sort on change
        sortProducts(sortSelect.value);
    });
});
</script>