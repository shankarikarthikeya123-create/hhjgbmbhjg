

// Seed Default Products with color-specific images
const defaultProducts = [
    {
        id: "p1",
        name: "Premium Combed Cotton Vest",
        category: "inners",
        price: 249,
        description: "Made from 100% premium combed cotton, this inner vest offers superior sweat absorption, breathable mesh knit, and tagless comfort for daily wear.",
        colors: [
            { name: "Classic White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80" },
            { name: "Heather Grey", hex: "#d1d5db", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80" },
            { name: "Charcoal", hex: "#4b5563", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "p2",
        name: "Super-Soft Classic Briefs (3-Pack)",
        category: "inners",
        price: 499,
        description: "A pack of three classic-fit briefs featuring an ultra-soft elastic waistband that leaves no marks. Dual-layer contour pouch for ultimate support.",
        colors: [
            { name: "Navy Blue", hex: "#1e3a8a", image: "https://images.unsplash.com/photo-1626497764746-6dc36446b3f8?w=600&auto=format&fit=crop&q=80" },
            { name: "Steel Grey", hex: "#9ca3af", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80" },
            { name: "Obsidian Black", hex: "#111827", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1626497764746-6dc36446b3f8?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "p3",
        name: "Lounge Knit Striped Pyjamas",
        category: "pyjamas",
        price: 699,
        description: "Relaxed-fit sleep pyjamas with vertical stripes. Crafted from lightweight cotton-modal blend, featuring side pockets and drawcord adjustable waist.",
        colors: [
            { name: "Classic Navy Stripe", hex: "#1e293b", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80" },
            { name: "Forest Green", hex: "#14532d", image: "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "p4",
        name: "Turkish Waffle Cotton Bath Towel",
        category: "towels",
        price: 399,
        description: "Ultra-absorbent and quick-drying bath towel woven in dynamic waffle pattern. Generous dimensions, soft texture, and durable hem stitched finish.",
        colors: [
            { name: "Beige Cream", hex: "#f5ebe0", image: "https://images.unsplash.com/photo-1629156119553-6053b5e9166f?w=600&auto=format&fit=crop&q=80" },
            { name: "Sage Green", hex: "#a7f3d0", image: "https://images.unsplash.com/photo-1616627547584-bf28ecc26ab7?w=600&auto=format&fit=crop&q=80" },
            { name: "Pure White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["Free"],
        image: "https://images.unsplash.com/photo-1629156119553-6053b5e9166f?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "p5",
        name: "Everyday Heavyweight Crewneck Tee",
        category: "t-shirts",
        price: 449,
        description: "A solid, classic-fit heavy cotton t-shirt. Double-needle stitched neckband and sleeves. Perfect for layering or as comfortable loungewear.",
        colors: [
            { name: "Mustard Gold", hex: "#eab308", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80" },
            { name: "Crimson Red", hex: "#dc2626", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=80" },
            { name: "Charcoal Black", hex: "#0f172a", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "p6",
        name: "Active Comfort French Terry Joggers",
        category: "nighttracks",
        price: 799,
        description: "Tapered-fit loungewear joggers made from premium French Terry loopback cotton. Elasticized cuffs, side zip pockets, and thick comfort waistband.",
        colors: [
            { name: "Charcoal Grey", hex: "#374151", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80" },
            { name: "Carbon Black", hex: "#0f172a", image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "p7",
        name: "Woven Cotton Relaxed Boxers",
        category: "boxers",
        price: 299,
        description: "100% cotton woven plaid boxers with an elasticated waistband, button fly, and relaxed side vents. Super soft fabric that breathes easily.",
        colors: [
            { name: "Sky Blue Plaid", hex: "#60a5fa", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80" },
            { name: "Crimson Plaid", hex: "#f87171", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80"
    }
];

// Global State
let products = [];
let activeCategory = "all";
let searchFilter = "";
let sortCriteria = "default";
let selectedProduct = null;

// Initialize Storefront App
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load products from localStorage or use seeds
    loadProducts();
    
    // 2. Render initial product list
    renderProducts();

    // 3. Set up event listeners
    initEventListeners();
});

function loadProducts() {
    const stored = localStorage.getItem("om_store_products");
    if (stored) {
        try {
            products = JSON.parse(stored);
            // Reset only if the previous fixed file saved local placeholder SVG images
            const hasPlaceholderImages = products.some(p => String(p.image || "").includes("assets/") || (p.colors || []).some(c => String(c.image || "").includes("assets/")));
            if (hasPlaceholderImages) {
                products = [...defaultProducts];
                localStorage.setItem("om_store_products", JSON.stringify(products));
            }
            // Schema migration: Check if default items are missing color-specific images
            const needsUpgrade = products.some(p => p.id.startsWith("p") && p.colors && p.colors.length > 0 && !p.colors.some(c => c.image));
            if (needsUpgrade) {
                console.log("Upgrading database schema with color-specific images...");
                products = [...defaultProducts];
                localStorage.setItem("om_store_products", JSON.stringify(products));
            }
        } catch (e) {
            console.error("Failed to parse products from localstorage", e);
            products = [...defaultProducts];
            localStorage.setItem("om_store_products", JSON.stringify(products));
        }
    } else {
        products = [...defaultProducts];
        localStorage.setItem("om_store_products", JSON.stringify(products));
    }
}

// Render products to grid
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    // Filter products
    let filtered = products.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        
        const query = searchFilter.toLowerCase().trim();
        const matchesSearch = !query || 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.colors.some(c => c.name.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
    });

    // Sort products
    if (sortCriteria === "price-low") {
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortCriteria === "price-high") {
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortCriteria === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Render HTML
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fa-solid fa-folder-open"></i></div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search keywords.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        // Build colors swatch dots
        const colorsHtml = p.colors && p.colors.length > 0
            ? `<div class="product-colors">
                ${p.colors.slice(0, 5).map((c, index) => `
                    <span class="color-swatch-dot ${index === 0 ? 'active' : ''}" 
                          style="background-color: ${c.hex};" 
                          title="${c.name}"
                          onclick="swapCardProductColor(event, this, '${c.image || p.image}')">
                    </span>
                `).join('')}
                ${p.colors.length > 5 ? `<span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight:600;">+${p.colors.length - 5}</span>` : ''}
               </div>`
            : '';

        return `
            <div class="product-card" onclick="openProductDetail('${p.id}')" style="cursor: pointer;">
                <div class="product-image-container">
                    <span class="product-badge">${p.category}</span>
                    <img src="${(p.colors && p.colors.length > 0 && p.colors[0].image) ? p.colors[0].image : p.image}" alt="${p.name}" class="product-img" loading="lazy">
                </div>
                <div class="product-card-body">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-title">${p.name}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="product-price">₹${p.price}</span>
                        ${colorsHtml}
                    </div>
                    <button class="product-btn mt-4">View Details</button>
                </div>
            </div>
        `;
    }).join('');
}

// Color Swapping in E-Commerce Cards Grid
function swapCardProductColor(event, dotElement, imageSrc) {
    // 1. Prevent trigger of card's parent detail modal opening
    event.stopPropagation();

    if (!imageSrc) return;

    const card = dotElement.closest(".product-card");
    const img = card.querySelector(".product-img");

    // 2. Active Dot Highlighting
    const dotsList = card.querySelectorAll(".color-swatch-dot");
    dotsList.forEach(dot => dot.classList.remove("active"));
    dotElement.classList.add("active");

    // 3. Smooth Fade Transition during swapping
    img.classList.add("swapping");
    setTimeout(() => {
        img.src = imageSrc;
        img.onload = () => {
            img.classList.remove("swapping");
        };
        // fallback in case load event fails or image from cache
        setTimeout(() => img.classList.remove("swapping"), 250);
    }, 150);
}

// Event Listeners for Filters & Nav
function initEventListeners() {
    // Header Scroll Shadow
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Navbar Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Close nav links when a link is clicked (mobile)
        navLinks.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", (e) => {
                navLinks.classList.remove("active");
                menuToggle.querySelector("i").className = "fa-solid fa-bars";
                
                // Highlight active link
                navLinks.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            });
        });
    }

    // Category Tabs Filter
    const categoriesContainer = document.getElementById("categoriesContainer");
    if (categoriesContainer) {
        categoriesContainer.addEventListener("click", (e) => {
            const tab = e.target.closest(".category-tab");
            if (!tab) return;

            // Remove active from all tabs
            categoriesContainer.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
            
            // Add active to selected tab
            tab.classList.add("active");
            activeCategory = tab.dataset.category;
            renderProducts();
        });
    }

    // Search Input Filter
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchFilter = e.target.value;
            renderProducts();
        });
    }

    // Sorting Selection
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            sortCriteria = e.target.value;
            renderProducts();
        });
    }
}

// Open Product Detail Modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProduct = product;

    // Use first color image as default preview in modal if available, fallback to main image
    const initialImg = (product.colors && product.colors.length > 0 && product.colors[0].image) 
        ? product.colors[0].image 
        : product.image;

    document.getElementById("modalProductImg").src = initialImg || "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600";
    document.getElementById("modalProductImg").alt = product.name;
    document.getElementById("modalProductCategory").innerText = product.category;
    document.getElementById("modalProductTitle").innerText = product.name;
    document.getElementById("modalProductPrice").innerText = `₹${product.price}`;
    document.getElementById("modalProductDesc").innerText = product.description;

    // Build Colors Swatch Selector
    const colorSelector = document.getElementById("modalColorSelector");
    const colorNameDisplay = document.getElementById("selectedColorName");
    colorSelector.innerHTML = "";

    if (product.colors && product.colors.length > 0) {
        colorSelector.style.display = "flex";
        product.colors.forEach((color, index) => {
            const label = document.createElement("label");
            label.className = "color-option";
            label.innerHTML = `
                <input type="radio" name="modalColor" value="${color.name}" data-hex="${color.hex}" ${index === 0 ? 'checked' : ''} 
                       onchange="handleModalColorChange('${color.name}', '${color.image || product.image}')">
                <span class="color-option-label">
                    <span class="color-swatch-visual" style="background-color: ${color.hex};"></span>
                </span>
            `;
            colorSelector.appendChild(label);
        });
        updateSelectedColorName(product.colors[0].name);
    } else {
        colorSelector.style.display = "none";
        colorNameDisplay.innerText = "No color options configured";
    }

    // Build Sizes Selector
    const sizeSelector = document.getElementById("modalSizeSelector");
    sizeSelector.innerHTML = "";
    if (product.sizes && product.sizes.length > 0) {
        sizeSelector.style.display = "flex";
        product.sizes.forEach((size, index) => {
            const label = document.createElement("label");
            label.className = "size-option";
            label.innerHTML = `
                <input type="radio" name="modalSize" value="${size}" ${index === 0 ? 'checked' : ''}>
                <span class="size-option-label">${size}</span>
            `;
            sizeSelector.appendChild(label);
        });
    } else {
        sizeSelector.style.display = "none";
    }



    // Show modal
    document.getElementById("productModal").classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scrolling
}

// Modal color selection change
function handleModalColorChange(colorName, imageSrc) {
    updateSelectedColorName(colorName);
    
    if (!imageSrc) return;
    
    // Dynamic Modal image swap with transitions
    const img = document.getElementById("modalProductImg");
    img.classList.add("swapping");
    setTimeout(() => {
        img.src = imageSrc;
        img.onload = () => {
            img.classList.remove("swapping");
        };
        setTimeout(() => img.classList.remove("swapping"), 250);
    }, 150);
}

// Update selected color name text display
function updateSelectedColorName(colorName) {
    document.getElementById("selectedColorName").innerText = `Selected: ${colorName}`;
}

// Close Product Detail Modal
function closeProductModal() {
    document.getElementById("productModal").classList.remove("active");
    document.body.style.overflow = "auto"; // restore background scrolling
    selectedProduct = null;
}


