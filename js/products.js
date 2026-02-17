/* 
   Banco de dados de produtos
   Fonte única de verdade (substitui o JSON para evitar erros de CORS).
*/

window.products = [
    // --- Mercado Livre (Agora importados do seu JSON) ---
    {
        "id": 1,
        "name": "Creatina Monohidratada 250g Growth Supplements - Sem sabor em Pó",
        "category": "suplementos",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta imperdível do Mercado Livre.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_662415-MLA97812910758_112025-F.webp",
        "link": "https://mercadolivre.com/sec/2h7z9NU",
        "highlight": true
    },
    {
        "id": 2,
        "name": "Câmera De Segurança Wi-fi 360° Hw Lâmpada E27 Full Hd Visão Noturna Colorida Áudio Sensor Movimento Ip",
        "category": "eletronicos",
        "price": 0.00,
        "oldPrice": null,
        "description": "Mais uma grande oferta para descobrir.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_726866-MLA99504979854_112025-F.webp",
        "link": "https://mercadolivre.com/sec/32FEwPa",
        "highlight": false
    },
    {
        "id": 3,
        "name": "Kit 4 Cuecas Boxer Lupo Algodão Confortável Box Original",
        "category": "moda",
        "price": 0.00,
        "oldPrice": null,
        "description": "Qualidade e bom preço.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_812578-MLB82638744739_022025-F-kit-4-cuecas-boxer-lupo-algodo-confortavel-box-original.webp",
        "link": "https://mercadolivre.com/sec/2UTY8QQ",
        "highlight": false
    },
    {
        "id": 4,
        "name": "800ml Garrafa Térmica Água Squeeze Inox Academia Quente E Frio",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Confira os detalhes no site.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_963485-MLB94579785063_102025-F-800mlgarrafa-termica-agua-squeeze-inox-academiaquente-e-frio.webp",
        "link": "https://mercadolivre.com/sec/2m2XDGF",
        "highlight": true
    },
    {
        "id": 5,
        "name": "Fechadura Digital de Sobrepor Touch Screen FR 101 Preta Intelbras",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Excelente oportunidade.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_678314-MLA88637512318_072025-F.webp",
        "link": "https://mercadolivre.com/sec/1qTe2C2",
        "highlight": false
    },
    {
        "id": 6,
        "name": "Aspirador De Pó Vertical 3 Em 1 Silent Speed Max 1350w Wap",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Verifique o preço atualizado no link.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_788820-MLU74192085653_012024-F.webp",
        "link": "https://mercadolivre.com/sec/23A54KT",
        "highlight": false
    },
    {
        "id": 7,
        "name": "Strike Removedor Piche Asfalto Cola Adesivo Vonixx 500ml",
        "category": "automotivo",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta especial.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_906196-MLA99448129206_112025-F.webp",
        "link": "https://mercadolivre.com/sec/16djxWQ",
        "highlight": false
    },
    {
        "id": 8,
        "name": "Liquidificador Philco 1200W 3L 12 Velocidades Preto PH900",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Aproveite esta oferta.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_766837-MLA98259429221_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1fFD8rW",
        "highlight": false
    },
    {
        "id": 9,
        "name": "Principia Sérum 10% Niacinamida + 1% Zinco Pca NC-10 30 mL",
        "category": "beleza",
        "price": 0.00,
        "oldPrice": null,
        "description": "Promoção imperdível.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_743512-MLA96768387527_102025-F.webp",
        "link": "https://mercadolivre.com/sec/2iWXAQ5",
        "highlight": false
    },
    {
        "id": 10,
        "name": "Parafusadeira Furadeira C/ 2 Baterias Maleta Kit Completo Led",
        "category": "ferramentas",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_828436-MLA100007265481_122025-F.webp",
        "link": "https://mercadolivre.com/sec/2PhKTK8",
        "highlight": false
    },
    {
        "id": 11,
        "name": "Parafusadeira Furadeira C/ 2 Baterias Maleta Kit Completo Led",
        "category": "ferramentas",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_828436-MLA100007265481_122025-F.webp",
        "link": "https://mercadolivre.com/sec/2PhKTK8",
        "highlight": false
    },

    // --- Shopee (Importados) ---
    {
        "id": 101,
        "name": "Kit 10 Pote de Vidro Hermético Retangular 4 Travas Marmita",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Achadinho da Shopee.",
        "image": "https://down-br.img.susercontent.com/file/sg-11134201-821ep-mgjgq4m9ssgf89.webp",
        "link": "https://s.shopee.com.br/6VIJly5Jkf",
        "highlight": true
    },
    {
        "id": 102,
        "name": "Mochila Escolar Feminina Material Escolar Completo",
        "category": "moda",
        "price": 0.00,
        "oldPrice": null,
        "description": "Produto incrível da Shopee.",
        "image": "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mj8r67pdw5c2c2@resize_w900_nl.webp",
        "link": "https://s.shopee.com.br/8AQXlDPX9s",
        "highlight": false
    },
    {
        "id": 103,
        "name": "Kit 10 Esmaltes Impala Marrom Nude Esmalte Capivara",
        "category": "beleza",
        "price": 0.00,
        "oldPrice": null,
        "description": "Desconto especial.",
        "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mc9dux5ewycr4e@resize_w900_nl.webp",
        "link": "https://s.shopee.com.br/7pnhMv5Jmp",
        "highlight": false
    },
    {
        "id": 104,
        "name": "Copo Térmico Grande 1200ml Em Aço Inox Com Alça",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Verifique a disponibilidade.",
        "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rfgq-m9ex0vr1fnonf6.webp",
        "link": "https://s.shopee.com.br/4VXFOsXiyq",
        "highlight": true
    },
    {
        "id": 105,
        "name": "Espuma Limpa Estofados a seco Magica 300ml Kit",
        "category": "automotivo",
        "price": 0.00,
        "oldPrice": null,
        "description": "Clique em Ver Oferta.",
        "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8xer7tqkxkyde.webp",
        "link": "https://s.shopee.com.br/8AQXlf5M3g",
        "highlight": false
    },
    {
        "id": 106,
        "name": "Cooler Multifuncional Super Térmica 32 Litros",
        "category": "lazer",
        "price": 0.00,
        "oldPrice": null,
        "description": "Aproveite esta promoção.",
        "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfe54je0p345ca@resize_w900_nl.webp",
        "link": "https://s.shopee.com.br/8V3OANwrHo",
        "highlight": false
    }
];
