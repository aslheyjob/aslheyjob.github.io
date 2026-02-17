/* 
   Banco de dados de produtos
   Carregado a partir do JSON do usuário.
*/

const products = [
    // --- Mercado Livre ---
    {
        "id": 1,
        "name": "Creatina Monohidratada 250g Growth Supplements - Sem sabor em Pó",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta imperdível do Mercado Livre.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SScIucZsOFSry8L_F-Xxh23XvUJS-_wUnp60rrif4BkcshUV934pbAS_DhU4d2zhX9gwdKrjCA-D-S9z_z9RHtdpxd3-KZ6es8VjyuBNooZMWGqOWu5cmtXMcxnlKSY7eNNyMQoHfEddWz1E79myMYS3drBB9E92ebD1WglMsn2SjuOhhI9-l_U_Sgj3TfmAvdiBETM-dmf6OvC0P0oQzw7GT1cRUbHqx-UQak=w1280",
        "link": "https://mercadolivre.com/sec/2h7z9NU",
        "highlight": true
    },
    {
        "id": 2,
        "name": "Produto Mercado Livre 02",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Mais uma grande oferta para descobrir.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SS3j3seuXEkEyoNLANmzqwT6GFgCuVPp4nkLNGg3oJ7X23iZ1P6kd5pF3mWaC4TG8Rdj8PxgCHmJhF5AwmLDu9ZamVepjcwT_l0eysbgdy82XhosLx7OE56mwdra-hj_iLl_4PivfvzInXcRahIRXDFoyHcx45yYW86oIxYp7Wsfvo59Ceh1im1n1KSIZXlw1_1fKzd2BINqsScGpMD6zDm2_rd0Gmn9viH0O4=w1280",
        "link": "https://mercadolivre.com/sec/32FEwPa",
        "highlight": false
    },
    {
        "id": 3,
        "name": "Produto Mercado Livre 03",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Qualidade e bom preço.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SRrD8pbNjCcMoKFZeYUpqU2lhpnsf1VtDNSqYJW-nAzzTAQfltsHq5GYwdPez-efYix8L4NUY1hAJjNyRhbvtHI4LCakOT-QvWR-9CKQlEoFT-yZTMbOeTldWUrsxT1gHjCaYukPTCFfiCjR9PzU-qmaM5JiXzyAU3wkVqQbGAN61sBmIVTXwd6loRw21QreFz8MBwxgDws6B6KPEPDssnYYIxfYDnHCkhN9Pg=w1280",
        "link": "https://mercadolivre.com/sec/2UTY8QQ",
        "highlight": false
    },
    {
        "id": 4,
        "name": "Produto Mercado Livre 04",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Confira os detalhes no site.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SR4lk-ydvHKEYsFancQefpfHc3ltGNDv4L8Ejo-ZeSm0ix_xJn05SU7TVYoWDp7X0xuNFmqOcPUBDFpQKkyASYGJ7JcKlqJphlDrFhArvVAo8UpkX1QvlDPQCiRC61m3ddSkrVUbrIWYlfYSCDRCBWPy53jC4HQnf7FVi8YmH6chBkklLkR_9hbQ3PDZJacRLA7-qot5bZs2Pyks2mlplziD-DuLj84WMcSFbg=w1280",
        "link": "https://mercadolivre.com/sec/2m2XDGF",
        "highlight": true
    },
    {
        "id": 5,
        "name": "Produto Mercado Livre 05",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Excelente oportunidade.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SSrZdWjomEDxHN-Xf7xEB2PN-Engwsfp8pLjepsXO_8z2EDZ0Pdid9IBeLlfBdLAf4Kg3X70BnznrcHiwiLzPttC1BA0s6FGYmyju9kK1AeliJUpfw66KxxF6m6zJmO37qLLvwGtSzS2NKEqRGm_o56k-1tMY22Sy5mo7gQ5eINlipsNYB3fj0vX6yXHIrK-YedFxOVxeQzgsIncxQjwvn7NqiBfsrGkYklBzM=w1280",
        "link": "https://mercadolivre.com/sec/1qTe2C2",
        "highlight": false
    },
    {
        "id": 6,
        "name": "Produto Mercado Livre 06",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Verifique o preço atualizado no link.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0STwsI5_kEhQHeHZ8FQZf_lJf2Byfe9NusCIAYLH1xJyBWbYMh6fJlzA3QsMHbdiXomVt8aNTgk9NkaBfH4UiP2eQeI_VU8CFCJY6_hri5PvBrk2QZNpyfr9lmE1pjM4BpIQd7nD2hLOrU7LqzqD7ruY7tGo9uOQOYMkUm7eSViC4ejvCCOY2ckdvP9hGTFQxzEUqcmZ0r40EzdgOrupL_PD3h94k_xl1D7ILic=w1280",
        "link": "https://mercadolivre.com/sec/23A54KT",
        "highlight": false
    },
    {
        "id": 7,
        "name": "Produto Mercado Livre 07",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Oferta especial.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SQx7qf40ifv7Ha4K19XzEtFxovy90hINVzXgP6wRJwnPaQ_0OCjjGi2QZ9lACfjdReEc1Ai0ACsFukJl2iTsoX6qP_CHN0k8QCFvpnRyu1DotzL8JFEBOLRpto7LudKCNEFKiPJPrcmBR2VOvJ2rAohRLBqAx_O6EW7C9gSmnSWjxNgqmPCXuzim_V-MyzwIzcf98J8i6IFl0G9GB9huwPQlQpH47JvZm0u=w1280",
        "link": "https://mercadolivre.com/sec/16djxWQ",
        "highlight": false
    },
    {
        "id": 8,
        "name": "Produto Mercado Livre 08",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Aproveite esta oferta.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SQrM5PuaLrvS61HXbz6ZgC3a1QsuWG2zgV921YbbizeFDpK5fR3MHgRofztXUbJ0DRQ_wapDRExuHcpQ7PNCL2IKSfs3UJxTDKTX48pPD14paYtKrM1tge2pO5x5dNNIBU6YUc_qTsCfVFFV0uFTnibf_FNbWNAeTK3DhTnjRBF41E7gwEeAap4ldoJUVcaINSMUjNdD9sy5_QuMh3r0rGn9tvRKMGlteK_lqI=w1280",
        "link": "https://mercadolivre.com/sec/1fFD8rW",
        "highlight": false
    },
    {
        "id": 9,
        "name": "Produto Mercado Livre 09",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Promoção imperdível.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SRwSQ6YCn8Xv0r_3HT1c2dSgTDwyI2RYKr8WM2nTO5r5pkQXNT6ZAIZSbIfJXOKmkFDRC2RRfEboNWwbcMiZ21i1OsgmOXBv-yGdIh22XMCFjijsjurFjVEWH1aEP32G0QZckZvnSjAKmfaJCld0DqMUM1_s705oKj_X2Msb1F4UONUW5M7FVZ_KEi44tEXhVBTY9oPwEVEBYv9tBHqT-xbRVWnmDM35ebAUhc=w1280",
        "link": "https://mercadolivre.com/sec/2iWXAQ5",
        "highlight": false
    },
    {
        "id": 10,
        "name": "Produto Mercado Livre 10",
        "category": "variados",
        "price": 0.00,
        "oldPrice": null,
        "description": "Melhor custo-benefício.",
        "image": "https://lh3.googleusercontent.com/sitesv/APaQ0SS3MOt2UsA2Uvk2oWEqjO2j_GJUdmSfLI99AuYNVZzMdIZ5dS1cSAwe9GRqoLYc67VJMhQSSKa6G4PiTmJ_tWf4peXu9tI6-vpCnMpx6CoWkwDDbGJP362BrZj1eu92BjWxTop7A8YDnuTrnmIOlGIayyFzEYSzvp6iSrS5XNE8vRZknfYGcLI66Z9W_JDWCInYUhcsraNg3C76ZnD9P4c0ZkpwvQAW5A=w1280",
        "link": "https://mercadolivre.com/sec/2PhKTK8",
        "highlight": false
    },

    // --- Shopee ---
    {
        "id": 101,
        "name": "Oferta Shopee 01",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Achadinho da Shopee.",
        "image": "https://placehold.co/600x600/orange/white?text=Shopee",
        "link": "https://s.shopee.com.br/6VIJly5Jkf",
        "highlight": true
    },
    {
        "id": 102,
        "name": "Oferta Shopee 02",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Produto incrível da Shopee.",
        "image": "https://placehold.co/600x600/orange/white?text=Shopee",
        "link": "https://s.shopee.com.br/8AQXlDPX9s",
        "highlight": false
    },
    {
        "id": 103,
        "name": "Oferta Shopee 03",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Desconto especial.",
        "image": "https://placehold.co/600x600/orange/white?text=Shopee",
        "link": "https://s.shopee.com.br/7pnhMv5Jmp",
        "highlight": false
    },
    {
        "id": 104,
        "name": "Oferta Shopee 04",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Verifique a disponibilidade.",
        "image": "https://placehold.co/600x600/orange/white?text=Shopee",
        "link": "https://s.shopee.com.br/4VXFOsXiyq",
        "highlight": true
    },
    {
        "id": 105,
        "name": "Oferta Shopee 05",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Clique em Ver Oferta.",
        "image": "https://placehold.co/600x600/orange/white?text=Shopee",
        "link": "https://s.shopee.com.br/8AQXlf5M3g",
        "highlight": false
    },
    {
        "id": 106,
        "name": "Oferta Shopee 06",
        "category": "shopee",
        "price": 0.00,
        "oldPrice": null,
        "description": "Aproveite esta promoção.",
        "image": "https://placehold.co/600x600/orange/white?text=Shopee",
        "link": "https://s.shopee.com.br/8V3OANwrHo",
        "highlight": false
    }
];
