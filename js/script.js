/* 
   Gostou, Comprou, Chegou - Script Principal V3
   Destaques por plataforma, filtros, busca e modal.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Elementos do DOM ---
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const paginationContainer = document.getElementById('pagination');
    const resultsCount = document.getElementById('results-count');

    // Modal Elements
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalOldPrice = document.getElementById('modal-old-price');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');
    const modalClose = document.querySelector('.modal-close');
    const modalBuyBtn = document.querySelector('.modal-buy-btn');

    // --- Configuração ---
    const ITEMS_PER_PAGE = 20;
    const FEATURED_PER_PLATFORM = 10;
    let currentPage = 1;
    let currentFilteredProducts = [];

    // --- Helpers ---

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const getPlatformDotClass = (category, link) => {
        if (category === 'shein' || (link && link.includes('shein'))) return 'dot-shein';
        if (link && (link.includes('shopee'))) return 'dot-shopee';
        if (link && (link.includes('mercadolivre') || link.includes('ml.com'))) return 'dot-ml';
        return '';
    };

    const getPlatformLabel = (category, link) => {
        if (category === 'shein' || (link && link.includes('shein'))) return 'SH';
        if (link && link.includes('shopee')) return 'SP';
        if (link && (link.includes('mercadolivre') || link.includes('ml.com'))) return 'ML';
        return '';
    };

    const createProductCard = (product) => {
        const priceHtml = `
            <div class="price-container">
                <span class="price">${product.price > 0 ? formatCurrency(product.price) : 'Ver Oferta'}</span>
                ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
            </div>
        `;

        const discountBadge = product.oldPrice
            ? `<div class="badge-discount">-${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</div>`
            : '';

        const dotClass = getPlatformDotClass(product.category, product.link);
        const dotLabel = getPlatformLabel(product.category, product.link);
        const platformDot = dotClass ? `<div class="category-platform-dot ${dotClass}">${dotLabel}</div>` : '';

        const buttonAction = `<a href="${product.link}" target="_blank" class="btn-buy">Ver Oferta <i data-feather="external-link"></i></a>`;
        const imgSrc = product.image || 'assets/images/placeholder.png';

        return `
            <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                <div class="product-image-container">
                    ${discountBadge}
                    ${platformDot}
                    <img src="${imgSrc}" alt="${product.name}" loading="lazy" onerror="this.src='assets/images/placeholder.png'">
                    <button class="btn-quick-view" onclick="openModal(${product.id})">Espiar</button>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    ${priceHtml}
                    ${buttonAction}
                </div>
            </div>
        `;
    };

    // --- Destaques por Plataforma ---

    const renderFeaturedSection = (containerId, filterFn, limit) => {
        const container = document.getElementById(containerId);
        if (!container || typeof products === 'undefined') return;
        const filtered = products.filter(filterFn).slice(0, limit);
        if (filtered.length === 0) {
            container.innerHTML = '<p class="loading-text">Nenhum produto encontrado.</p>';
            return;
        }
        container.innerHTML = filtered.map(createProductCard).join('');
        feather.replace();
    };

    const renderAllFeatured = () => {
        // Shopee: produtos com link shopee
        renderFeaturedSection(
            'featured-shopee',
            p => p.category === 'shopee' || (p.link && p.link.includes('shopee')),
            FEATURED_PER_PLATFORM
        );
        // Mercado Livre
        renderFeaturedSection(
            'featured-ml',
            p => p.category === 'mercadolivre' || (p.link && (p.link.includes('mercadolivre') || p.link.includes('ml.com') || p.link.includes('mercadolivre.com'))),
            FEATURED_PER_PLATFORM
        );
        // Shein
        renderFeaturedSection(
            'featured-shein',
            p => p.category === 'shein' || (p.link && p.link.includes('shein')),
            FEATURED_PER_PLATFORM
        );
    };

    // --- Paginação ---

    const renderPagination = (totalItems) => {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
        if (totalPages <= 1) return;

        const prevBtn = document.createElement('button');
        prevBtn.classList.add('page-btn', 'nav-btn');
        prevBtn.innerHTML = '<i data-feather="chevron-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                renderPaginatedProducts();
                document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
            }
        };
        paginationContainer.appendChild(prevBtn);

        // Show max 7 page buttons with ellipsis
        let pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages = [1, 2, 3, 4, 5, '...', totalPages];
            } else if (currentPage >= totalPages - 3) {
                pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
            }
        }

        pages.forEach(p => {
            const btn = document.createElement('button');
            btn.classList.add('page-btn');
            if (p === '...') {
                btn.textContent = '...';
                btn.disabled = true;
                btn.style.border = 'none';
                btn.style.background = 'transparent';
                btn.style.boxShadow = 'none';
            } else {
                if (p === currentPage) btn.classList.add('active');
                btn.textContent = p;
                btn.addEventListener('click', () => {
                    currentPage = p;
                    renderPaginatedProducts();
                    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
                });
            }
            paginationContainer.appendChild(btn);
        });

        const nextBtn = document.createElement('button');
        nextBtn.classList.add('page-btn', 'nav-btn');
        nextBtn.innerHTML = '<i data-feather="chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPaginatedProducts();
                document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
            }
        };
        paginationContainer.appendChild(nextBtn);
        feather.replace();
    };

    const renderPaginatedProducts = () => {
        if (!productsContainer) return;

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginatedItems = currentFilteredProducts.slice(start, end);

        // Update results count
        if (resultsCount) {
            resultsCount.textContent = `${currentFilteredProducts.length} produto${currentFilteredProducts.length !== 1 ? 's' : ''} encontrado${currentFilteredProducts.length !== 1 ? 's' : ''}`;
        }

        if (paginatedItems.length === 0) {
            productsContainer.innerHTML = `<div class="no-results">Nenhum produto encontrado.</div>`;
            paginationContainer.innerHTML = '';
            return;
        }

        productsContainer.innerHTML = paginatedItems.map(createProductCard).join('');
        renderPagination(currentFilteredProducts.length);
        feather.replace();
    };

    // --- Inicialização ---

    // Embaralha array (Fisher-Yates)
    const shuffleArray = (arr) => {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    const initProducts = () => {
        if (typeof products === 'undefined') {
            console.error("Erro: Array 'products' não encontrado.");
            return;
        }
        currentFilteredProducts = shuffleArray(products); // Embaralhado
        currentPage = 1;
        renderPaginatedProducts();
    };

    // --- Filtros ---

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            if (category === 'todos') {
                currentFilteredProducts = [...products];
            } else if (category === 'mercadolivre') {
                currentFilteredProducts = products.filter(p =>
                    p.category === 'mercadolivre' ||
                    (p.link && (p.link.includes('mercadolivre') || p.link.includes('ml.com')))
                );
            } else if (category === 'shopee') {
                currentFilteredProducts = products.filter(p =>
                    p.category === 'shopee' || (p.link && p.link.includes('shopee'))
                );
            } else if (category === 'shein') {
                currentFilteredProducts = products.filter(p =>
                    p.category === 'shein' || (p.link && p.link.includes('shein'))
                );
            } else {
                currentFilteredProducts = products.filter(p =>
                    p.category.toLowerCase() === category.toLowerCase()
                );
            }
            currentPage = 1;
            renderPaginatedProducts();
        });
    });

    // Busca por Nome
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            if (!term) {
                currentFilteredProducts = [...products];
            } else {
                currentFilteredProducts = products.filter(p =>
                    p.name.toLowerCase().includes(term)
                );
            }
            currentPage = 1;
            renderPaginatedProducts();
        });
    }

    // --- Função global para filtrar pelo "ver todos" das seções ---
    window.filterByPlatform = (platform) => {
        const btn = document.querySelector(`[data-category="${platform}"]`);
        if (btn) btn.click();
        setTimeout(() => {
            document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    // --- Modal ---

    window.openModal = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;

        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description || 'Clique em Ver Oferta para mais detalhes.';
        modalImage.src = product.image || 'assets/images/placeholder.png';
        modalCategory.textContent = product.category;

        modalPrice.textContent = product.price > 0 ? formatCurrency(product.price) : 'Ver Oferta';
        if (product.oldPrice) {
            modalOldPrice.textContent = formatCurrency(product.oldPrice);
            modalOldPrice.style.display = 'inline';
        } else {
            modalOldPrice.style.display = 'none';
        }

        modalBuyBtn.href = product.link;
        modalBuyBtn.innerHTML = 'Ver Oferta na Loja <i data-feather="external-link"></i>';
        modalBuyBtn.target = '_blank';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        feather.replace();
    };

    window.closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            window.closeModal();
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) window.closeModal();
    });

    // --- Mobile Menu ---
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.setAttribute('data-feather', navLinks.classList.contains('active') ? 'x' : 'menu');
            feather.replace();
        });
    }

    // --- Inicializar Página ---
    renderAllFeatured();
    initProducts();
});
