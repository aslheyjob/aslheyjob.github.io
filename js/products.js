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
        "name": "NIVEA SUN Protetor Solar Facial Toque Seco Antissinais FPS70 40ml, Alta Proteção UVA/UVB, Controla a Oleosidade, Previne Envelhecimento, Textura Leve",
        "category": "Beleza",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_990747-MLA105989506287_012026-F.webp",
        "link": "https://mercadolivre.com/sec/2FxkGwT",
        "highlight": false
    },
    {
        "id": 12,
        "name": "Plus do Brasil Cabo Usb Turbo Tipo C Compativel Com Samsung Galaxy S25 S24 Plus S23 Fe S22 S21 S20 A16 A15 A22 A13 A14 A55 A53 A54 A06 A05s A20 A21 Apple iPhone 17 16 15 Carplay Auto Android",
        "category": "Acessórios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_724447-MLA106895488253_022026-F.webp",
        "link": "https://mercadolivre.com/sec/2cgkAwS",
        "highlight": false
    },
    {
        "id": 13,
        "name": "Filamento Pla Velvet Preto 1kg",
        "category": "Diversos",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_872979-MLA97109618044_112025-F.webp",
        "link": "https://mercadolivre.com/sec/327tQtz",
        "highlight": false
    },
    {
        "id": 14,
        "name": "Bicicleta Rosa Nathor Flower Infantil Aro 12 Menina Cestinha",
        "category": "Lazer",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_642327-MLA99888118883_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1FgymU4",
        "highlight": false
    },
    {
        "id": 15,
        "name": "Afiador E Amolador De Facas E Tesouras 4 Em 1 Profissional ",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_745769-MLA106573280695_022026-F.webp",
        "link": "https://mercadolivre.com/sec/2NamnKQ",
        "highlight": false
    },
    {
        "id": 16,
        "name": "Kit 4 Rodízio Giratório Gel Silicone Rodinha Móveis 50mm - Compra Segura Ekom ",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_701301-MLA105259227459_012026-F.webp",
        "link": "https://mercadolivre.com/sec/1Fm183e",
        "highlight": false
    },
    {
        "id": 17,
        "name": "Espelho Vildrex Roma 70x50cm Design Moderno Lapidado Luxo",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_737366-MLB95371198573_102025-F-espelho-vildrex-roma-70x50cm-design-moderno-lapidado-luxo.webp",
        "link": "https://mercadolivre.com/sec/1Fm183e",
        "highlight": false
    },
    {
        "id": 18,
        "name": "Smart Tv 32 Philco P32vik Roku Led Dolby Audio Hdr Wi-fi 110/220v",
        "category": "Eletronicos",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_691057-MLA100479527690_122025-F.webp",
        "link": "https://mercadolivre.com/sec/2BvmJas",
        "highlight": false
    },
    {
        "id": 19,
        "name": "Mixer Power Inox 3 Em 1 600w Elgin Lunar",
        "category": "casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_884782-MLA100072923939_122025-F.webp",
        "link": "https://mercadolivre.com/sec/1g4QEg3",
        "highlight": false
    },
    {
        "id": 20,
        "name": "Capa Colchão Impermeável Hospitalar Antialérgico Solteiro",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_926506-MLA96049314300_102025-F.webp",
        "link": "https://mercadolivre.com/sec/2ik2cpz",
        "highlight": false
    },
    {
        "id": 21,
        "name": "Mini Compressor Digital Simake Bomba De Encher Pneus Portátil Para Carro Bicicleta Motocicletas Cor Preto Com Calibrador",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_900674-MLA100087555981_122025-F.webp",
        "link": "https://mercadolivre.com/sec/1snGmJw",
        "highlight": false
    },
    {
        "id": 22,
        "name": "Percarbonato De Sódio 1 Kg Tira Manchas Alvejante Sem Cloro 1 Kg",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_648597-MLB95229878600_102025-F.webp",
        "link": "https://mercadolivre.com/sec/2DAYuoU",
        "highlight": false
    },
    {
        "id": 23,
        "name": "Elgin plafon painel quadrado sobrepor 24w branco frio 6500k estrutura branco-frio",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_765319-MLA100105841965_122025-F.webp",
        "link": "https://mercadolivre.com/sec/1AhoiYW",
        "highlight": false
    },
    {
        "id": 24,
        "name": "Robô aspirador Robot W90 varre aspira e passa pano 30w Wap cor preto",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_748103-MLA99906601653_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1L8jaQh",
        "highlight": false
    },
    {
        "id": 25,
        "name": "Aspirador Piscina Manual Netuno Venturi Nv Azul",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_740298-MLA95495291638_102025-F.webp",
        "link": "https://mercadolivre.com/sec/2DeBoZj",
        "highlight": false
    },
    {
        "id": 26,
        "name": "Colchonete 90x40x3 Academia Impermeável Fit Yoga Ginastica Preto",
        "category": "Exercicios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_833684-MLA99608314112_122025-F.webp",
        "link": "https://mercadolivre.com/sec/1cei5te",
        "highlight": false
    },
    {
        "id": 27,
        "name": "Carregador Turbo Duplo 40w Usb Tipo C Para iPhone 8 X Xr 11 12 13 14 Pro Max Dtimp",
        "category": "Acessórios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_609505-MLA105673814081_012026-F.webp",
        "link": "https://mercadolivre.com/sec/1bmwehB",
        "highlight": false
    },
    {
        "id": 28,
        "name": "Escorredor de Louças Compacto 13 Pratos Porta Talher Preto Metaltru",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_956987-MLA99618172634_122025-F.webp",
        "link": "https://mercadolivre.com/sec/22YG9yp",
        "highlight": false
    }, {
        "id": 29,
        "name": "We Varejo - Raquete Mata Mosca Elétrica Bateria Recarregável Portátil Pega Mosquitos Penilogos Matar Insetos",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_928009-MLA105666481248_012026-F.webp",
        "link": "https://mercadolivre.com/sec/22YG9yp",
        "highlight": false
    },
    {
        "id": 30,
        "name": "Roçadeira Nakasaki 75cc 3.6hp Gasolina 6 Em 1 Nk750pro",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_852970-MLB107008940939_022026-F.webp",
        "link": "https://mercadolivre.com/sec/2iwKyDY",
        "highlight": false
    },
    {
        "id": 31,
        "name": "Tapete Higiênico 50 Unidades (60x55) Descartável Manta Fralda Absorvente Gel Para Cachorro Pet Cão",
        "category": "PET",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_916620-MLA100071703077_122025-F.webp",
        "link": "https://mercadolivre.com/sec/1bmwehB",
        "highlight": false
    },
    {
        "id": 32,
        "name": "Smartwatch Xiaomi Redmi Watch 5 Active Tela Lcd 2.00 Preto",
        "category": "Acessórios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_949046-MLA99507276886_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1WUrWwi",
        "highlight": false
    },
    {
        "id": 33,
        "name": "Smart Tv Samsung U8100f Crystal Uhd 4k 2025 43 Preto",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_648933-MLA99498284868_112025-F.webp",
        "link": "https://mercadolivre.com/sec/2jZHSG1",
        "highlight": false
    },
    {
        "id": 34,
        "name": "Varal De Chão Grande De Roupas 3 Andares Dobrável Cor Azul Kontuz 170 cm",
        "category": "Casa",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_968619-MLA99977372933_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1bmwehB",
        "highlight": false
    },
    {
        "id": 35,
        "name": "Mochila Masculina Impermeável Reforçada Aço Escola Notebook Preto Liso",
        "category": "Acessórios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_839933-MLB98920410204_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1SRddV2",
        "highlight": false
    },
    {
        "id": 36,
        "name": "Grill Sanduicheira Cadence SAN400 Elétrica Chapa Misteira Tostex Tostequeira Hambúrguer Click",
        "category": "Acessórios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_934834-MLA99525616894_122025-F.webp",
        "link": "https://mercadolivre.com/sec/1YrU5Sw",
        "highlight": false
    },
    {
        "id": 37,
        "name": "Desodorante Pedra Sal Hi Cool Cristal Vegano, Crystal Deo Stick Sem cheiro - Natural Sem Fragrância 60g Sem Alumínio Antiodor",
        "category": "Acessórios",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_899521-MLA99924804553_112025-F.webp",
        "link": "https://mercadolivre.com/sec/1Rgai3B",
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
