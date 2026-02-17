/* 
   Banco de dados simulado de produtos
   Categorias: Eletrônicos, Casa, Moda, Beleza
*/

const products = [
    // Eletrônicos
    {
        id: 1,
        name: "Fone Bluetooth Sport",
        category: "eletronicos",
        price: 89.90,
        oldPrice: 129.90,
        description: "Fone de ouvido sem fio com alta qualidade de som, resistente a suor e bateria de longa duração.",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: true
    },
    {
        id: 2,
        name: "Smartwatch Fitness Tracker",
        category: "eletronicos",
        price: 149.90,
        oldPrice: 199.90,
        description: "Monitore sua saúde, passos e sono com este relógio inteligente à prova d'água.",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },
    {
        id: 3,
        name: "Carregador Portátil PowerBank",
        category: "eletronicos",
        price: 59.90,
        oldPrice: null,
        description: "Nunca fique sem bateria. Carregue seu celular até 3x com este powerbank compacto.",
        image: "https://images.unsplash.com/photo-1609592424367-e85d9df96720?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },

    // Casa
    {
        id: 4,
        name: "Kit Organizadores de Cozinha",
        category: "casa",
        price: 75.00,
        oldPrice: 99.00,
        description: "Conjunto com 5 potes herméticos para manter seus alimentos frescos e organizados.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: true
    },
    {
        id: 5,
        name: "Luminária de Mesa LED",
        category: "casa",
        price: 45.90,
        oldPrice: null,
        description: "Luminária flexível com 3 tons de luz e ajuste de brilho. Ideal para leitura e trabalho.",
        image: "https://images.unsplash.com/photo-1534073828943-f801091a7d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },
    {
        id: 6,
        name: "Umidificador de Ar Ultrassônico",
        category: "casa",
        price: 89.90,
        oldPrice: 110.00,
        description: "Melhore a qualidade do ar da sua casa com este umidificador silencioso e com luz noturna.",
        image: "https://images.unsplash.com/photo-1628173428076-8051e70e3095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },

    // Moda
    {
        id: 7,
        name: "Mochila Urbana Resistente",
        category: "moda",
        price: 119.90,
        oldPrice: 159.90,
        description: "Mochila espaçosa, impermeável e com compartimento para notebook. Estilo e praticidade.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: true
    },
    {
        id: 8,
        name: "Óculos de Sol Polarizado",
        category: "moda",
        price: 69.90,
        oldPrice: 89.90,
        description: "Proteção UV400 com estilo clássico. Acompanha estojo e flanela.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },
    {
        id: 9,
        name: "Carteira Slim Couro",
        category: "moda",
        price: 39.90,
        oldPrice: null,
        description: "Carteira compacta e elegante com proteção RFID contra roubo de dados.",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },

    // Beleza
    {
        id: 10,
        name: "Kit Skincare Completo",
        category: "beleza",
        price: 99.90,
        oldPrice: 149.90,
        description: "Rotina completa com sabonete, tônico e hidratante facial para todos os tipos de pele.",
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: true
    },
    {
        id: 11,
        name: "Escova Alisadora 3 em 1",
        category: "beleza",
        price: 85.00,
        oldPrice: 120.00,
        description: "Seca, alisa e modela o cabelo rapidamente. Tecnologia cerâmica que protege os fios.",
        image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },
    {
        id: 12,
        name: "Perfume Floral 50ml",
        category: "beleza",
        price: 129.90,
        oldPrice: null,
        description: "Fragrância delicada e marcante com notas de jasmim e rosas. Longa fixação.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    }
];
