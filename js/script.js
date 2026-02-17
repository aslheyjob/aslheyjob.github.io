/* 
   Gostou, Comprou, Chegou - Script Principal
   Lógica de renderização de produtos, filtros, busca e modal.
*/

// O array 'products' já está carregado pelo arquivo products.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado!");

    // --- Elementos do DOM ---
    const productsContainer = document.getElementById('products-container');
    const featuredContainer = document.getElementById('featured-container');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const paginationContainer = document.getElementById('pagination');

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

    // --- Configuração Paginação ---
    const ITEMS_PER_PAGE = 8;
    let currentPage = 1;
    let currentFilteredProducts = []; // Para manter estado dos filtros

    // --- Funções Auxiliares ---

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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

        // Sempre botão de link externo (sem WhatsApp)
        const buttonAction = `<a href="${product.link}" target="_blank" class="btn-buy">Ver Oferta <i data-feather="external-link"></i></a>`;

        return `
            <div class="product-card" data-id="${product.id}" data-category="${product.category}">
                <div class="product-image-container">
                    ${discountBadge}
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='assets/img/placeholder.png'">
                    <button class="btn-quick-view" onclick="openModal(${product.id})">Espiar</button>
                </div>
                <div class="product-info">
                    <span class="category-tag">${product.category}</span>
                    <h3>${product.name}</h3>
                    <p class="short-desc">${product.description ? product.description.substring(0, 60) + '...' : 'Confira os detalhes desta oferta incrível.'}</p>
                    ${priceHtml}
                    ${buttonAction}
                </div>
            </div>
        `;
    };

    // --- Paginação ---

    const renderPagination = (totalItems) => {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

        if (totalPages <= 1) return;

        // Prev Button
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

        // Page Numbers
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.classList.add('page-btn');
            if (i === currentPage) btn.classList.add('active');
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderPaginatedProducts();
                document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
            });
            paginationContainer.appendChild(btn);
        }

        // Next Button
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

        if (paginatedItems.length === 0) {
            productsContainer.innerHTML = `<div class="no-results">Nenhum produto encontrado.</div>`;
            paginationContainer.innerHTML = ''; // Hide pagination
            return;
        }

        productsContainer.innerHTML = paginatedItems.map(createProductCard).join('');
        renderPagination(currentFilteredProducts.length);
        feather.replace();
    };

    // --- Renderização (Main) ---

    // Destaques (Sempre mostra os primeiros 4 marcados, sem paginação)
    const renderFeatured = () => {
        if (!featuredContainer || typeof products === 'undefined') return;
        const featured = products.filter(p => p.highlight).slice(0, 4);
        featuredContainer.innerHTML = featured.map(createProductCard).join('');
        feather.replace();
    };

    // Inicializar produtos com todos (Reset)
    const initProducts = () => {
        if (typeof products === 'undefined') {
            console.error("Erro: Array 'products' não encontrado.");
            return;
        }
        currentFilteredProducts = [...products]; // Cópia do array global
        currentPage = 1;
        renderPaginatedProducts();
    };

    // --- Filtros e Busca ---

    // Filtrar por Categoria
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            if (category === 'todos') {
                currentFilteredProducts = [...products];
            } else {
                currentFilteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
            }
            currentPage = 1;
            renderPaginatedProducts();
        });
    });

    // Busca por Nome
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            currentFilteredProducts = products.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term)
            );
            currentPage = 1;
            renderPaginatedProducts();
        });
    }

    // --- Modal ---

    window.openModal = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;

        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description;
        modalImage.src = product.image;
        modalCategory.textContent = product.category;

        modalPrice.textContent = product.price > 0 ? formatCurrency(product.price) : 'Oferta';
        if (product.oldPrice) {
            modalOldPrice.textContent = formatCurrency(product.oldPrice);
            modalOldPrice.style.display = 'inline';
        } else {
            modalOldPrice.style.display = 'none';
        }

        modalBuyBtn.href = product.link;
        modalBuyBtn.innerHTML = 'Ver Oferta na Loja <i data-feather="external-link"></i>';

        modalBuyBtn.target = "_blank";
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // --- Mobile Menu ---
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }

    // --- Inicialização ---
    renderFeatured();
    initProducts();
});
