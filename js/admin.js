// Preset Category Mock Images
const CATEGORY_PRESETS = {
    "inners": [
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1626497764746-6dc36446b3f8?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=70"
    ],
    "pyjamas": [
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=500&auto=format&fit=crop&q=70"
    ],
    "towels": [
        "https://images.unsplash.com/photo-1629156119553-6053b5e9166f?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1616627547584-bf28ecc26ab7?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=70"
    ],
    "t-shirts": [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=70"
    ],
    "nighttracks": [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=70"
    ],
    "boxers": [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=70",
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=70"
    ]
};

// Seed Default Products (matching app.js color structure)
const seedProducts = [
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

// Global Dashboard Variables
let products = [];
let tempColorsList = []; // Colors configured in form
let tempColorImage = ""; // Color image string (base64 or URL)
let activeImgSource = "upload"; // 'upload', 'url', 'presets'
let selectedImageUrl = ""; // Main image string (base64 or URL)

// Initialize Admin App
document.addEventListener("DOMContentLoaded", () => {
    // Check local storage password initialization
    if (!localStorage.getItem("om_admin_password")) {
        localStorage.setItem("om_admin_password", "admin"); // Default password
    }

    // Check session authentication status
    checkAuthentication();

    // Set up category preset image switcher in form
    const categorySelect = document.getElementById("productCategory");
    if (categorySelect) {
        categorySelect.addEventListener("change", () => {
            if (activeImgSource === "presets") {
                renderPresetImages(categorySelect.value);
            }
        });
    }
});

// Check if user is authenticated
function checkAuthentication() {
    const isAuth = sessionStorage.getItem("om_admin_authenticated");
    const loginOverlay = document.getElementById("loginOverlay");
    const adminDashboard = document.getElementById("adminDashboard");

    if (isAuth === "true") {
        loginOverlay.style.display = "none";
        adminDashboard.style.display = "block";
        
        // Load data
        loadProductsFromStorage();
        updateDashboardStats();
        renderProductsTable();
    } else {
        loginOverlay.style.display = "flex";
        adminDashboard.style.display = "none";
    }
}

// Handle Login Attempt
function handleAdminLogin(e) {
    e.preventDefault();
    const passwordInput = document.getElementById("adminPasswordInput");
    const errorMsg = document.getElementById("loginErrorMsg");
    
    const correctPassword = localStorage.getItem("om_admin_password");
    
    if (passwordInput.value === correctPassword) {
        sessionStorage.setItem("om_admin_authenticated", "true");
        errorMsg.innerText = "";
        passwordInput.value = "";
        checkAuthentication();
    } else {
        errorMsg.innerText = "Invalid administrator password. Please try again.";
        passwordInput.classList.add("error");
        setTimeout(() => passwordInput.classList.remove("error"), 500);
    }
}

// Handle Logout
function handleAdminLogout() {
    sessionStorage.removeItem("om_admin_authenticated");
    checkAuthentication();
}

// Toggle password text visibility
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn.querySelector("i");
    if (input.type === "password") {
        input.type = "text";
        icon.className = "fa-solid fa-eye-slash";
    } else {
        input.type = "password";
        icon.className = "fa-solid fa-eye";
    }
}

// Load products from localStorage
function loadProductsFromStorage() {
    const stored = localStorage.getItem("om_store_products");
    if (stored) {
        try {
            products = JSON.parse(stored);
            // Schema migration: Check if default items are missing color-specific images
            const needsUpgrade = products.some(p => p.id.startsWith("p") && p.colors && p.colors.length > 0 && !p.colors.some(c => c.image));
            if (needsUpgrade) {
                console.log("Upgrading database schema in admin panel...");
                products = [...seedProducts];
                localStorage.setItem("om_store_products", JSON.stringify(products));
            }
        } catch (e) {
            products = [...seedProducts];
            localStorage.setItem("om_store_products", JSON.stringify(products));
        }
    } else {
        products = [...seedProducts];
        localStorage.setItem("om_store_products", JSON.stringify(products));
    }
}

// Switch between dashboard workspaces
function switchDashboardTab(tabName) {
    const workspaceProducts = document.getElementById("workspaceProducts");
    const workspaceSettings = document.getElementById("workspaceSettings");
    const tabProducts = document.getElementById("tabBtnProducts");
    const tabSettings = document.getElementById("tabBtnSettings");

    if (tabName === "products") {
        workspaceProducts.style.display = "block";
        workspaceSettings.style.display = "none";
        tabProducts.classList.add("active");
        tabSettings.classList.remove("active");
    } else {
        workspaceProducts.style.display = "none";
        workspaceSettings.style.display = "block";
        tabProducts.classList.remove("active");
        tabSettings.classList.add("active");
    }
}

// Update dashboard summaries
function updateDashboardStats() {
    document.getElementById("statTotalProducts").innerText = products.length;
    
    // Count configured colors
    let colorSet = new Set();
    products.forEach(p => {
        if (p.colors) p.colors.forEach(c => colorSet.add(c.name.toLowerCase()));
    });
    document.getElementById("statColorsCount").innerText = colorSet.size;
}

// Render administrative catalog table
function renderProductsTable() {
    const tableBody = document.getElementById("adminProductsTableBody");
    if (products.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px 20px;">
                    <i class="fa-solid fa-box-open" style="font-size: 2.5rem; color: var(--color-border); margin-bottom: 12px; display: block;"></i>
                    <strong style="color: var(--color-primary-light);">No products in inventory</strong>
                    <p style="color: var(--color-text-muted); font-size: 0.85rem;">Click 'Add New Product' to populate your storefront.</p>
                </td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = products.map(p => {
        // Size Badges
        const sizesHtml = p.sizes.map(s => `<span class="table-sizes-badge">${s}</span>`).join('');
        
        // Color Swatches
        const colorsHtml = p.colors.map(c => `
            <span class="color-swatch-dot" style="background-color: ${c.hex}; display: inline-block; margin-right: 4px;" title="${c.name}"></span>
        `).join('');

        return `
            <tr>
                <td>
                    <div class="table-product-cell">
                        <img src="${(p.colors && p.colors.length > 0 && p.colors[0].image) ? p.colors[0].image : p.image}" alt="${p.name}" class="table-product-img" onerror="this.src='https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=100'">
                        <div>
                            <span class="table-product-name">${p.name}</span>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 2px; max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.description}</div>
                        </div>
                    </div>
                </td>
                <td><span class="hero-badge" style="font-size: 0.7rem; padding: 4px 10px;">${p.category}</span></td>
                <td><strong style="color: var(--color-fresh-green);">₹${p.price}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px;">
                        ${colorsHtml || '<span style="font-size: 0.8rem; color: var(--color-text-muted);">None</span>'}
                    </div>
                </td>
                <td>
                    <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 2px;">
                        ${sizesHtml}
                    </div>
                </td>
                <td>
                    <div class="table-actions">
                        <button onclick="openEditProductModal('${p.id}')" class="btn-icon edit" title="Edit Product"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button onclick="handleDeleteProduct('${p.id}')" class="btn-icon delete" title="Delete Product"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Add Color to temp list in form
function handleAddColorToList() {
    const nameInput = document.getElementById("colorPickerName");
    const hexInput = document.getElementById("colorPickerHex");
    
    const name = nameInput.value.trim();
    const hex = hexInput.value;

    if (!name) {
        alert("Please write a color label name (e.g. Navy Blue).");
        nameInput.focus();
        return;
    }

    // Check if color label already added
    if (tempColorsList.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        alert("A color with this label is already added.");
        return;
    }

    // Push color option with its specific image (if set)
    tempColorsList.push({ 
        name, 
        hex, 
        image: tempColorImage || "" 
    });
    
    // Reset color settings inputs and preview
    nameInput.value = "";
    clearTempColorImage();
    renderTempColorsList();
}

// Render temporary colors pills in modal
function renderTempColorsList() {
    const container = document.getElementById("addedColorsContainer");
    if (tempColorsList.length === 0) {
        container.innerHTML = `<span style="font-size: 0.8rem; color: var(--color-text-muted); font-style: italic;">No color swatches configured yet.</span>`;
        return;
    }

    container.innerHTML = tempColorsList.map((c, index) => {
        // Render image thumbnail or empty swatch hex circle
        const imgThumb = c.image 
            ? `<img src="${c.image}" class="color-pill-img">`
            : `<span class="color-pill-dot" style="background-color: ${c.hex};"></span>`;

        return `
            <span class="color-pill" style="border-left: 4px solid ${c.hex};">
                ${imgThumb}
                <span>${c.name}</span>
                <button type="button" class="color-pill-remove" onclick="handleRemoveTempColor(${index})" title="Remove color">&times;</button>
            </span>
        `;
    }).join('');
}

// Remove color from temp list
function handleRemoveTempColor(index) {
    tempColorsList.splice(index, 1);
    renderTempColorsList();
}

// Image Tabs Switcher inside Product Form Modal (Main product image)
function switchImageSourceTab(tabName) {
    activeImgSource = tabName;
    
    const tabs = ["Upload", "Url", "Presets"];
    tabs.forEach(t => {
        document.getElementById(`imgTab${t}`).classList.remove("active");
        document.getElementById(`imgPanel${t}`).classList.remove("active");
    });

    // Add active
    const cleanTab = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    document.getElementById(`imgTab${cleanTab}`).classList.add("active");
    document.getElementById(`imgPanel${cleanTab}`).classList.add("active");

    // If preset tab is selected, render images corresponding to current category choice
    if (tabName === "presets") {
        const categoryVal = document.getElementById("productCategory").value;
        if (!categoryVal) {
            document.getElementById("presetImagesContainer").innerHTML = `<div style="grid-column: 1/-1; padding: 12px; text-align: center; font-size: 0.85rem; color: var(--color-text-muted);">Please select a product category first to see preset images.</div>`;
        } else {
            renderPresetImages(categoryVal);
        }
    }
}

// Render preset images matching category selector
function renderPresetImages(category) {
    const container = document.getElementById("presetImagesContainer");
    const presets = CATEGORY_PRESETS[category] || [];
    
    if (presets.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; text-align:center; color: var(--color-text-muted);">No presets for this category</div>`;
        return;
    }

    container.innerHTML = presets.map(url => `
        <div class="preset-img-option ${selectedImageUrl === url ? 'active' : ''}" onclick="selectPresetImage('${url}', this)">
            <img src="${url}" alt="Preset">
        </div>
    `).join('');
}

// Select preset image option
function selectPresetImage(url, element) {
    document.querySelectorAll(".preset-img-option").forEach(el => el.classList.remove("active"));
    element.classList.add("active");
    selectedImageUrl = url;
    updateImagePreview(url);
}

// Handle Local Image Upload with HTML5 Canvas Compression
function handleLocalImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const placeholder = document.getElementById("productImagePreviewPlaceholder");
    placeholder.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem;"></i><span>Compressing Image...</span>`;

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;
            const maxDimension = 400; // Resize to max 400px preserving aspect ratio

            if (width > height) {
                if (width > maxDimension) {
                    height *= maxDimension / width;
                    width = maxDimension;
                }
            } else {
                if (height > maxDimension) {
                    width *= maxDimension / height;
                    height = maxDimension;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
            selectedImageUrl = compressedBase64;
            updateImagePreview(compressedBase64);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

// Handle URL Image Update
function handleUrlImageUpdate(url) {
    const trimmed = url.trim();
    selectedImageUrl = trimmed;
    if (trimmed) {
        updateImagePreview(trimmed);
    } else {
        clearImagePreview();
    }
}

// Update main image preview
function updateImagePreview(src) {
    const imgEl = document.getElementById("productImagePreview");
    const placeholder = document.getElementById("productImagePreviewPlaceholder");
    
    imgEl.src = src;
    imgEl.style.display = "block";
    placeholder.style.display = "none";
}

// Clear main image preview
function clearImagePreview() {
    const imgEl = document.getElementById("productImagePreview");
    const placeholder = document.getElementById("productImagePreviewPlaceholder");
    
    imgEl.src = "";
    imgEl.style.display = "none";
    placeholder.style.display = "flex";
    placeholder.innerHTML = `<i class="fa-regular fa-image" style="font-size: 2rem;"></i><span>No Image Selected</span>`;
}

// Handle Uploading Image specifically for a single Color Option
function handleColorImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Show loading in thumbnail placeholder
    const placeholder = document.getElementById("colorImgPreviewPlaceholder");
    placeholder.innerHTML = `<i class="fa-solid fa-spinner fa-spin" style="font-size: 1rem;"></i>`;

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            // Draw to a smaller canvas for color options (max 300px)
            const canvas = document.createElement("canvas");
            let width = img.width;
            let height = img.height;
            const maxDimension = 300;

            if (width > height) {
                if (width > maxDimension) {
                    height *= maxDimension / width;
                    width = maxDimension;
                }
            } else {
                if (height > maxDimension) {
                    width *= maxDimension / height;
                    height = maxDimension;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
            tempColorImage = compressedBase64;
            updateColorImagePreview(compressedBase64);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

// Handle Color Image URL Input
function handleColorImageUrlInput(url) {
    const trimmed = url.trim();
    tempColorImage = trimmed;
    if (trimmed) {
        updateColorImagePreview(trimmed);
    } else {
        resetColorImageThumbnail();
    }
}

// Update color thumbnail preview inside form
function updateColorImagePreview(src) {
    const imgEl = document.getElementById("colorImgPreview");
    const placeholder = document.getElementById("colorImgPreviewPlaceholder");
    const clearBtn = document.getElementById("clearColorImgBtn");

    imgEl.src = src;
    imgEl.style.display = "block";
    placeholder.style.display = "none";
    clearBtn.style.display = "block";
}

// Reset color thumbnail preview placeholder
function resetColorImageThumbnail() {
    const imgEl = document.getElementById("colorImgPreview");
    const placeholder = document.getElementById("colorImgPreviewPlaceholder");
    const clearBtn = document.getElementById("clearColorImgBtn");

    imgEl.src = "";
    imgEl.style.display = "none";
    placeholder.style.display = "block";
    placeholder.innerHTML = `Upload<br>Photo`;
    clearBtn.style.display = "none";
}

// Clear temporary image for color being added
function clearTempColorImage() {
    tempColorImage = "";
    document.getElementById("colorImageFileInput").value = "";
    document.getElementById("colorImageUrlInput").value = "";
    resetColorImageThumbnail();
}

// Open Credentials change Modal
function openChangePasswordModal() {
    document.getElementById("changePasswordForm").reset();
    document.getElementById("passwordErrorMsg").innerText = "";
    document.getElementById("passwordSuccessMsg").innerText = "";
    document.getElementById("changePasswordModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close Credentials change Modal
function closeChangePasswordModal() {
    document.getElementById("changePasswordModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

// Open modal to add product
function openAddProductModal() {
    document.getElementById("adminProductForm").reset();
    document.getElementById("productEditId").value = "";
    document.getElementById("adminModalTitle").innerText = "Add New Product";
    
    // Reset states
    tempColorsList = [];
    selectedImageUrl = "";
    clearTempColorImage();
    renderTempColorsList();
    clearImagePreview();
    
    // Switch to upload tab by default
    switchImageSourceTab("upload");
    
    // Show Modal
    document.getElementById("adminProductModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

// Open modal to edit product
function openEditProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("adminProductForm").reset();
    
    // Populate Fields
    document.getElementById("productEditId").value = product.id;
    document.getElementById("adminModalTitle").innerText = "Edit Product";
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productDescription").value = product.description;

    // Sizes checkboxes
    const checkboxes = document.getElementsByName("productSizes");
    checkboxes.forEach(box => {
        box.checked = product.sizes.includes(box.value);
    });

    // Populate Colors list
    tempColorsList = product.colors ? [...product.colors] : [];
    clearTempColorImage();
    renderTempColorsList();

    // Populate Main Image preview
    selectedImageUrl = product.image || "";
    if (selectedImageUrl) {
        updateImagePreview(selectedImageUrl);
        
        if (selectedImageUrl.startsWith("http")) {
            document.getElementById("productImageUrl").value = selectedImageUrl;
            switchImageSourceTab("presets");
        } else {
            switchImageSourceTab("upload");
        }
    } else {
        clearImagePreview();
        switchImageSourceTab("upload");
    }

    // Open Modal
    document.getElementById("adminProductModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

// Close Product Editor Modal
function closeAdminProductModal() {
    document.getElementById("adminProductModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

// Handle Form Submit for Adding / Editing Product
function handleProductSubmit(e) {
    e.preventDefault();

    const editId = document.getElementById("productEditId").value;
    const name = document.getElementById("productName").value.trim();
    const category = document.getElementById("productCategory").value;
    const price = parseInt(document.getElementById("productPrice").value);
    const description = document.getElementById("productDescription").value.trim();

    // Size Validations
    const checkedSizes = [];
    const checkboxes = document.getElementsByName("productSizes");
    checkboxes.forEach(box => {
        if (box.checked) checkedSizes.push(box.value);
    });

    if (checkedSizes.length === 0) {
        alert("Please select at least one available size (e.g. S, M, L).");
        return;
    }

    // Color Validations
    if (tempColorsList.length === 0) {
        alert("Please add at least one color swatch configuration.");
        return;
    }

    // Image Validations
    if (!selectedImageUrl) {
        alert("Please upload an image, select a category preset, or insert an image URL.");
        return;
    }

    // Save
    if (editId) {
        const index = products.findIndex(p => p.id === editId);
        if (index !== -1) {
            products[index] = {
                ...products[index],
                name,
                category,
                price,
                description,
                sizes: checkedSizes,
                colors: [...tempColorsList],
                image: selectedImageUrl
            };
        }
    } else {
        const newProduct = {
            id: "p_" + Date.now(),
            name,
            category,
            price,
            description,
            sizes: checkedSizes,
            colors: [...tempColorsList],
            image: selectedImageUrl
        };
        products.unshift(newProduct);
    }

    // Write to Storage
    localStorage.setItem("om_store_products", JSON.stringify(products));
    
    // Close modal & reload UI
    closeAdminProductModal();
    updateDashboardStats();
    renderProductsTable();
}

// Delete Product
function handleDeleteProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (confirm(`Are you sure you want to delete "${product.name}" from your catalog?`)) {
        products = products.filter(p => p.id !== productId);
        localStorage.setItem("om_store_products", JSON.stringify(products));
        
        updateDashboardStats();
        renderProductsTable();
    }
}

// Settings: Change Admin credentials password
function handlePasswordChange(e) {
    e.preventDefault();
    const currentPass = document.getElementById("currentPassword").value;
    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmNewPassword").value;

    const errorMsg = document.getElementById("passwordErrorMsg");
    const successMsg = document.getElementById("passwordSuccessMsg");
    
    errorMsg.innerText = "";
    successMsg.innerText = "";

    const storedPass = localStorage.getItem("om_admin_password");

    if (currentPass !== storedPass) {
        errorMsg.innerText = "Incorrect current password.";
        return;
    }

    if (newPass !== confirmPass) {
        errorMsg.innerText = "New password and confirmation do not match.";
        return;
    }

    // Save New Password
    localStorage.setItem("om_admin_password", newPass);
    successMsg.innerText = "Credentials updated successfully!";
    
    setTimeout(() => {
        closeChangePasswordModal();
    }, 1500);
}

// Settings: Reset database to default seed products
function handleResetDatabase() {
    if (confirm("Warning: This will overwrite your current inventory and restore the default 7 catalog items. Proceed?")) {
        products = [...seedProducts];
        localStorage.setItem("om_store_products", JSON.stringify(products));
        
        updateDashboardStats();
        renderProductsTable();
        alert("Catalog database reset to default seeds successfully!");
    }
}

// Settings: Clear entire inventory
function handleClearDatabase() {
    if (confirm("CRITICAL WARNING: This will delete ALL products from your database. Your storefront will be empty. Proceed?")) {
        products = [];
        localStorage.setItem("om_store_products", JSON.stringify(products));
        
        updateDashboardStats();
        renderProductsTable();
        alert("Inventory completely purged.");
    }
}
