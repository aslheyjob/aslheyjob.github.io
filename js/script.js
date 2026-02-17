/* 
   Gostou, Comprou, Chegou - Script Principal
   Lógica de renderização de produtos, filtros, busca e modal.
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos do DOM ---
    const productsContainer = document.getElementById('products-container');
    const featuredContainer = document.getElementById('featured-container');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

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
    const WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número real
    let products = []; // Variável global de produtos

    // --- Carregar Produtos do JSON ---
    const loadProducts = async () => {
        try {
            const response = await fetch('produtos.json');
            if (!response.ok) throw new Error('Erro ao carregar produtos');
            const data = await response.json();

            // Unir as categorias em um único array
            products = [
                ...(data.mercadoLivre || []),
                ...(data.shopee || [])
            ];

            // Renderizar inicial
            renderFeatured();
            renderProducts();
            feather.replace(); // Atualizar ícones após renderizar

        } catch (error) {
            console.error('Erro:', error);
            const container = document.getElementById('products-container');
            if (container) {
                container.innerHTML = '<p class="text-center">Erro ao carregar produtos. Se estiver testando localmente, use um servidor local (Live Server).</p>';
            }
        }
    };

    // --- Funções Auxiliares ---

    // Formatar moeda
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    // Gerar Link do WhatsApp
    const getWhatsAppLink = (productName) => {
        const message = `Olá! Gostaria de comprar o produto: *${productName}*. Poderia me passar mais detalhes?`;
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    // Criar Card de Produto (HTML String)
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

        const buttonAction = product.link
            ? `<a href="${product.link}" target="_blank" class="btn-buy">Ver na Loja <i data-feather="external-link"></i></a>`
            : `<a href="${getWhatsAppLink(product.name)}" target="_blank" class="btn-buy">Comprar Agora <i data-feather="shopping-bag"></i></a>`;

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


    // --- Renderização ---

    // Renderizar Destaques
    const renderFeatured = () => {
        if (!featuredContainer) return;
        const featured = products.filter(p => p.highlight).slice(0, 4);
        featuredContainer.innerHTML = featured.map(createProductCard).join('');
        feather.replace();
    };

    // Renderizar Todos os Produtos
    const renderProducts = (list = products) => {
        if (!productsContainer) return;

        if (list.length === 0) {
            productsContainer.innerHTML = `<div class="no-results">Nenhum produto encontrado.</div>`;
            return;
        }

        productsContainer.innerHTML = list.map(createProductCard).join('');
        feather.replace();
    };

    // --- Filtros e Busca ---

    // Filtrar por Categoria
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const category = btn.dataset.category;

            if (category === 'todos') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });

    // Busca por Nome
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.description.toLowerCase().includes(term)
            );
            renderProducts(filtered);
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

        modalPrice.textContent = formatCurrency(product.price);
        if (product.oldPrice) {
            modalOldPrice.textContent = formatCurrency(product.oldPrice);
            modalOldPrice.style.display = 'inline';
        } else {
            modalOldPrice.style.display = 'none';
        }

        if (product.link) {
            modalBuyBtn.href = product.link;
            modalBuyBtn.innerHTML = 'Ver Oferta na Loja <i data-feather="external-link"></i>';
        } else {
            modalBuyBtn.href = getWhatsAppLink(product.name);
            modalBuyBtn.innerHTML = 'Pedir no WhatsApp <i data-feather="message-circle"></i>';
        }

        modalBuyBtn.target = "_blank";
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    window.closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Fechar ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
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
    // Iniciar carregamento
    loadProducts();
});
