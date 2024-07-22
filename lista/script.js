const presentesContainer = document.getElementById('presentes-container');
const presentesData = {
    "presentes": [
        {
            "nome": "6 pratos de sobremesa",
            "link": "https://www.mercadolivre.com.br/jogo-de-6-pratos-de-sobremesa-20-cm-floreal-salada-tropical-multicor-oxford/p/MLB25865058?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&item_id=MLB3897444888&from=gshop",
            "imagem": "./assets/images/6sobremesa.png"

        },
        {
            "nome": "6 pratos fundos",
            "link": "https://www.mercadolivre.com.br/kit-de-pratos-fundos-com-6-pecas-salada-tropical-oxford-cor-multicolor-floreal/p/MLB27805213?item_id=MLB3517933459&from=gshop&matt_tool=63065976&matt_word=&matt_source=google&matt_campaign_id=14302215534&matt_ad_group_id=154967597988&matt_match_type=&matt_network=g&matt_device=c&matt_creative=649487315899&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB27805213-product&matt_product_partition_id=1960832236233&matt_target_id=pla-1960832236233&cq_src=google_ads&cq_cmp=14302215534&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=Cj0KCQjwkdO0BhDxARIsANkNcrdljKd4w3FAegJXC0ko-qk82yffgvaDGhO70C0lnjAMZZcGRqP421AaAg0XEALw_wcB",
            "imagem": "./assets/images/6fundo.png"
        },
        {
            "nome": "6 pratos rasos",
            "link": "https://www.mercadolivre.com.br/kit-6-pratos-oxford-pratos-decorativos-redondos-cermica-dimetro-26cm/p/MLB26420365#reco_backend=machinalis-comparator-new-brand&reco_client=pdp_comparator&reco_product_pos=2&reco_backend_type=low_level&reco_id=08baf1c3-0e39-4265-aefd-571fdcc34faa",
            "imagem": "./assets/images/6raso.png"
        },
        {
            "nome": "Jogo de xícaras",
            "link": "https://www.mundodaporcelana.com/jogo-6-xicara-cafe-cha-porcelana-170ml-com-pires-colorida/p",
            "imagem": "./assets/images/6xicra.png"
        },
        {
            "nome": "Jogo de copos americanos",
            "link": "https://www.amazon.com.br/Copo-Americano-Rainbow-Neon-190ml/dp/B0BBSP2R2R/ref=asc_df_B0BBSP2R2R/?tag=googleshopp00-20&linkCode=df0&hvadid=631768784550&hvpos=&hvnetw=g&hvrand=9069407248996856199&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1032069&hvtargid=pla-1896290259569&psc=1",
            "imagem": "./assets/images/6neon.png"
        },
        {
            "nome": "Faqueiro",
            "link": "https://www.amazon.com.br/Faqueiro-luxo-Furtacor-Talheres-Inoxidavel/dp/B09W8QG4BC/ref=asc_df_B09W8QG4BC/?tag=googleshopp00-20&linkCode=df0&hvadid=647581676629&hvpos=&hvnetw=g&hvrand=7150653207893797315&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1032069&hvtargid=pla-2089529521679&psc=1",
            "imagem": "./assets/images/6faca.png"
        },
        {
            "nome": "Tapetes",
            "link": "https://produto.mercadolivre.com.br/MLB-1530981177-kit-cozinha-croch-cru-3-pecas-tapetes-barato-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
            "imagem": "./assets/images/tapetes.png"
        },
        {
            "nome": "Cesto de lixo",
            "link": "https://www.amazon.com.br/Lixeira-Cesto-Fechado-Ecol%C3%B3gico-75x60cm/dp/B081LM7KND/ref=asc_df_B081LM7KND/?tag=googleshopp00-20&linkCode=df0&hvadid=647588228288&hvpos=&hvnetw=g&hvrand=5786651177346504010&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-2266464342200&psc=1&mcid=77000f68b8643f9c96811e34af964a94",
            "imagem": "./assets/images/lixo.png"
        },
        {
            "nome": "Kit açucareiro-meleiro-molheira",
            "link": "https://shopee.com.br/product/328677186/19444574438?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBM2gra0RDK0NoV3o3b3ltS0V3c0kvQ1c0TU5kRTdMVVd5eXFBS0pWVmF4VkRhdGxvd3I2VWdNVDZqRjdPYm45VFBGNjQxOFRxUnFPRjV5Q05RaE1saEU3V3RaazY4bVFManp4dVoxelpEMWpnPT0&srsltid=AfmBOoqehovIeNQR-uoY_7rpgu7Nzu_-pblGa1x25ghCP417Az0HxEh9Ahs",
            "imagem": "./assets/images/kit.png"
        },
        {
            "nome": "Marcador de copos de lhaminhas",
            "link": "https://www.amazon.com.br/Marcador-de-Copo-Silicone-Lhama/dp/B08G9P6XKS/ref=asc_df_B08G9P6XKS/?tag=googleshopp00-20&linkCode=df0&hvadid=405267957275&hvpos=&hvnetw=g&hvrand=17423991213963429114&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1285055996342&mcid=5dc323cab03f38859d4c7e70f59cec02&th=1",
            "imagem": "./assets/images/marcador.png"
        },
        {
            "nome": "Bolacha de copo de bolacha",
            "link": "https://www.magazineluiza.com.br/jogo-de-porta-copos-bolacha-cracker-4-pecas-yaay/p/cd48a6742h/ud/tbar/?seller_id=lojageleia&srsltid=AfmBOorXa91Rt0Nj62O21sPvSS7CzNJ4njkxOYnbG3zzWlIJ7knliNseUSg",
            "imagem": "./assets/images/bolacha.png"
        },
        {
            "nome": "Petisqueira",
            "link": "https://www.amazon.com.br/Petisqueira-Bandeja-Porta-Melamina-Buffet/dp/B0875VRFPP/ref=asc_df_B0875VRFPP/?tag=googleshopp00-20&linkCode=df0&hvadid=379725881673&hvpos=&hvnetw=g&hvrand=18232948058150401307&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-925729221530&psc=1&mcid=3ee7e3a639d632b6b5ab4f884e1e8a9e",
            "imagem": "./assets/images/petisqueira.png"
        },
        {
            "nome": "Suporte de facas",
            "link": "https://www.magazineluiza.com.br/suporte-cepo-organizador-de-facas-tesoura-cozinha-multiuso-hauskraft/p/fec5a4h3ak/ud/ucep/?&=&seller_id=kasm",
            "imagem": "./assets/images/suporte.png"
        },
        {
            "nome": "Conjunto para foundue",
            "link": "https://www.magazineluiza.com.br/conjunto-para-fondue-ceramica-antiaderente-6-pecas-hauskraft/p/dkjcfchg3j/ud/apfd/?seller_id=ismaferferramentas&srsltid=AfmBOopgpaHhEv_t_MQ3c2DRBDRRmr47fBp6bAzFVQqiUjfQTn-ym3WUGvM",
            "imagem": "./assets/images/foundue.png"
        },
        {
            "nome": "Queijeira",
            "link": "https://www.amazon.com.br/Conjunto-Queijo-Pe%C3%A7as-2388100-Brinox/dp/B076T7Y3CK/ref=asc_df_B076T7Y3CK/?tag=googleshopp00-20&linkCode=df0&hvadid=379817877305&hvpos=&hvnetw=g&hvrand=5140874978125540714&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-874724620246&psc=1&mcid=fa8831b874e7310ba125c8de1b06b00a",
            "imagem": "./assets/images/queijeira.png"
        },
        {
            "nome": "Porta-taças",
            "link": "https://www.mercadolivre.com.br/porta-tacas-de-vinho-utimil-preto-suporte-aramado-de-mesa-ba/p/MLB28457858?item_id=MLB3523891249&from=gshop&matt_tool=63065976&matt_word=&matt_source=google&matt_campaign_id=14302215534&matt_ad_group_id=154967597988&matt_match_type=&matt_network=g&matt_device=c&matt_creative=649487315899&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB28457858-product&matt_product_partition_id=1960832236313&matt_target_id=aud-1966857867496:pla-1960832236313&cq_src=google_ads&cq_cmp=14302215534&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gclid=Cj0KCQjwkdO0BhDxARIsANkNcrfjt3VDY2bUjYoGuLqSjMtO99DO2zO-5llGvmpunAkeObHp4s5x6W4aAsauEALw_wcB",
            "imagem": "./assets/images/suportetacas.png"
        },
        {
            "nome": "Fruteira de banana",
            "link": "https://www.cobrelux.com.br/utensilios-de-cozinha/fruteiras-em-formato-de-frutas/fruteira-modelo-banana?parceiro=4487&srsltid=AfmBOopiA4snPsgLVglVNn2TqMUggCBnn90u0lnV7ArJfxN16iJDVxqCWEo",
            "imagem": "./assets/images/fruteirabanana.png"
        },
        {
            "nome": "Fruteira de arame",
            "link": "https://shopee.com.br/product/1078273222/19797655825?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDTGVlaGl1aVYrZ2Q0QWxHYTlNK1RKYklBODhrazJsWkp5MEpzaDljZWxselRXeXR3S2xuQjY1U3NVYTEyNFFqbDl4T1l4TzREQy9UcHRDT0x5MnNxOGdhNFBDbDZTYzlWNEZtcU54WDhOV3ZBPT0&srsltid=AfmBOoqYS9mF-DsgPzgYLel4WLAKs5lBHWEoWDpLf-HGt0DEB4YGSSSVvh4",
            "imagem": "./assets/images/fruteiraarame.png"
        },
        {
            "nome": "Potes de sobremesa",
            "link": "https://produto.mercadolivre.com.br/MLB-1395019629-6-pote-de-sobremesa-casquinha-de-sorvete-c-colher-color-kit-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
            "imagem": "./assets/images/potedesorvete.png"
        },
        {
            "nome": "Kit pizza",
            "link": "https://shopee.com.br/product/1103085331/19799030999?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSmZWZ1lwdmtFYW80QlkvNHlwemREdlV2bnZDZkdNc3dxVUhTU3kyOHBBMDg5ZDk0QklwekxXRWpNenEzZ0dSRWlVVjkzRzkzVnRtaUs3R0dFd2p5SVFxM3FIM0RObEN5WW9XRFJ0R29EZDh3PT0&srsltid=AfmBOoqQH0Ifeh109W0ecX5O03YBx-FYh15CxoBt5OO2TFRcZ2MgP-ssRj4",
            "imagem": "./assets/images/kitpizza.png"
        },
        {
            "nome": "Kit vinho",
            "link": "https://produto.mercadolivre.com.br/MLB-2640493816-kit-acessorios-para-vinho-5-pecas-inox-profissional-luxo-_JM?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic",
            "imagem": "./assets/images/kitvinho.png"
        },
        {
            "nome": "Marcados de copos de chinelinhos",
            "link": "https://havaianas.com.br/p/marcador%20de%20copos%20havaianas%20-kit%20com%206--4149710_0099_998.html",
            "imagem": "./assets/images/havaianas.png"
        },
        {
            "nome": "Mop spray",
            "link": "https://www.amazon.com.br/Mop-Spray-Reservat%C3%B3rio-Esfreg%C3%A3o-UTIMAIS/dp/B0CL7XLYLJ/ref=asc_df_B0CL7XLYLJ/?tag=googleshopp00-20&linkCode=df0&hvadid=647567073272&hvpos=&hvnetw=g&hvrand=4990889416591973206&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-2247690123264&psc=1&mcid=959eb66fc2cd3f44975df6dc477f5556",
            "imagem": "./assets/images/mop.png"
        },
        {
            "nome": "Mop limpa vidros",
            "link": "https://www.amazon.com.br/Limpa-Vidros-Extens%C3%ADvel-Flash-Limp/dp/B0779L3ZQ4/ref=asc_df_B0779L3ZQ4/?tag=googleshopp00-20&linkCode=df0&hvadid=379751716441&hvpos=&hvnetw=g&hvrand=8343225770329493082&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-900574013186&psc=1&mcid=82b8a9ca11c03d238e2d935d870c02b7",
            "imagem": "./assets/images/mopvidro.png"
        },
        {
            "nome": "Lasanheira",
            "link": "https://www.amazon.com.br/Assadeira-Tampa-Retangular-Sempre-Nadir/dp/B07BHR3ZRX/ref=asc_df_B07BHR3ZRX/?tag=googleshopp00-20&linkCode=df0&hvadid=379699132246&hvpos=&hvnetw=g&hvrand=5397286792002605820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1379735182531&mcid=ef1d01f662a533258df9e65ae505df0c&th=1",
            "imagem": "./assets/images/lasanha.png"
        },
        {
            "nome": "Conjunto de assadeiras",
            "link": "https://www.madeiramadeira.com.br/conjunto-assadeiras-antiaderente-retangular-alta-3-pcs-3210531.html",
            "imagem": "./assets/images/assadeiras.png"
        },
        {
            "nome": "Assadeira de pizza",
            "link": "https://www.amazon.com.br/Assadeira-Redonda-Antiaderente-Carbono-Resistente/dp/B09QLK3XZK/ref=asc_df_B09QLK3XZK/?tag=googleshopp00-20&linkCode=df0&hvadid=557926986208&hvpos=&hvnetw=g&hvrand=1777076793249257032&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1730524204055&psc=1&mcid=63bd87024a2b346b8f4b188962782470",
            "imagem": "./assets/images/formapizza.png"
        },
        {
            "nome": "Conjunto de tigelas",
            "link": "https://www.amazon.com.br/Conjunto-Bowls-Tigelas-Multiuso-Inoxid%C3%A1vel/dp/B0C97GBQZW?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2N28Y1TCHXVK3",
            "imagem": "./assets/images/tigelas.png"
        },
        {
            "nome": "Porta-patê",
            "link": "https://agourmetutilidades.com.br/products/porta-pate-molho-c-divisao-porcelana?variant=45238550856001&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOorEH1WheGcCNkyvheG41h5fzDqVY9wvWn36YYDUn1SEaUGGw2pKXVc",
            "imagem": "./assets/images/portapate.png"
        },
        {
            "nome": "Conjunto de porta-patê",
            "link": "https://shopee.com.br/product/894401774/20199201636?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMVI4T2h6a09Jd0RGT2VEYkpYWlAzT21odkkyS2xHWWJLY01MYmlHRGZaYVczY3pBN0hFeTFTb3RlVUljQ2NQVzlvLzFnRHAvWTZhdmhNeEpIODBqdmJreTRaMGNFUVBQeEs0Uy9ncHBtY0JnPT0&srsltid=AfmBOoqA3dvWsLNixzAYb-h6HwWfJ-ywk7x1ZS-ttZNxwpEWlqchXbeSLIs",
            "imagem": "./assets/images/portapatedois.png"
        },
        {
            "nome": "Conjunto de travessas",
            "link": "https://www.amazon.com.br/Conjunto-Travessas-Oval-Org%C3%A2nico-Night/dp/B0BV3BCBWQ/ref=asc_df_B0BV3BCBWQ/?tag=googleshopp00-20&linkCode=df0&hvadid=647682196970&hvpos=&hvnetw=g&hvrand=10452849356754165935&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-2199454496562&mcid=d1f11b7d653539bd9a09f2a0641822fa&th=1",
            "imagem": "./assets/images/travessas.png"
        },
        {
            "nome": "Conjunto de assadeiras Marinex",
            "link": "https://www.amazon.com.br/Jogo-assadeiras-Marinex-Opaline-pe%C3%A7as/dp/B087699KMS/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YWCBKGYLWD7&dib=eyJ2IjoiMSJ9.f0_NrsTFkIir7wRxXQkmf7cGXpq9n1nytTeED2dSUzBpwxjPWBI_1Z7l2jpWtvihcnAqbbe4pB5uE3aDzhCDF0vf1jUNaI0NDXMjRqvGKwzwmu3m1NUgvDpVgf7II5ZACu-ekdHT9Bj2vgjPl131TGSbNFDJyxXs_pIg_p0ScWleGkMTuN2rfVFvcL-YeSdpjBsC7yX6EK--DOocUWi5iwo7vqp-Pw_dzkOYdsMZoBA.t9hscnkYAcLeoQ43DGQCgcR8Z1VU3RQL7yOC24jUnlo&dib_tag=se&keywords=travessas&qid=1721158471&s=kitchen&sprefix=travessa%2Ckitchen%2C244&sr=1-8",
            "imagem": "./assets/images/marinex.png"
        },
        {
            "nome": "Travessa",
            "link": "https://www.amazon.com.br/Alleanza-5505-122-Travessa-S%C3%ADria/dp/B0CHGB4PBZ/ref=sr_1_19?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YWCBKGYLWD7&dib=eyJ2IjoiMSJ9.f0_NrsTFkIir7wRxXQkmf7cGXpq9n1nytTeED2dSUzBpwxjPWBI_1Z7l2jpWtvihcnAqbbe4pB5uE3aDzhCDF0vf1jUNaI0NDXMjRqvGKwzwmu3m1NUgvDpVgf7II5ZACu-ekdHT9Bj2vgjPl131TGSbNFDJyxXs_pIg_p0ScWleGkMTuN2rfVFvcL-YeSdpjBsC7yX6EK--DOocUWi5iwo7vqp-Pw_dzkOYdsMZoBA.t9hscnkYAcLeoQ43DGQCgcR8Z1VU3RQL7yOC24jUnlo&dib_tag=se&keywords=travessas&qid=1721158471&s=kitchen&sprefix=travessa%2Ckitchen%2C244&sr=1-19",
            "imagem": "./assets/images/travessa114.png"
        },
        {
            "nome": "Vassoura feiticeira",
            "link": "https://www.amazon.com.br/ROTATIVA-VASSOURA-FEITICEIRA-MIGALHA-ESTOFADOS/dp/B07B2Y8FYZ/ref=asc_df_B07B2Y8FYZ/?tag=googleshopp00-20&linkCode=df0&hvadid=379817901740&hvpos=&hvnetw=g&hvrand=11581935474336613496&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-873376041356&psc=1&mcid=85a6c8f80e7336fcbc99838735bcfa32",
            "imagem": "./assets/images/feiticeira.png"
        },
        {
            "nome": "Revisteiro",
            "link": "https://www.amazon.com.br/Revisteiro-Decorativo-Triangulo-Metaltru-Preto/dp/B08QSM3165/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2WW5QFYT8PYLJ&dib=eyJ2IjoiMSJ9.iplLvCFhUGc6Fen-dF06kySJakE1-HTajuGpx7cLsiEYuhNcHSeVDt9Rvw3CcgJ3luNbgap4cfPQXlH_HIjt8_7U4U6XZY-3GNQWTh6V7JUe51-luBAMt1d1aFu8ih1uLMMreVGDrUfjMpNAdoP8ZPjRVg1hy0A0HqUKVj1DRbfPqFNQ_EHNoLKNxtjqf0tG7KsUg432JtN6ftrMV2qIsJQvNkLCex03zXejxenRAphnN38CEqChqFDV13CXy5eFsE4zxB3_boVBhnjGRZ4Q5y2e2pliExKBzBtiAJVIHyo.QLz0Xh-b2fD4puBd_tN6SIeuERPytn5Zsr_C4lBnf20&dib_tag=se&keywords=revisteiro+decorativo&qid=1721158734&sprefix=revisteiro+decorativo%2Caps%2C223&sr=8-2",
            "imagem": "./assets/images/revisteiro.png"
        },
        {
            "nome": "Conjunto de cumbucas",
            "link": "https://www.amazon.com.br/Cumbuca-Porcelana-Premium-500ml-Tigela/dp/B09HNHS9QH/ref=sr_1_16?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Q1PLTEZQ0LQZ&dib=eyJ2IjoiMSJ9.tEjGp4YbI3RSnIh5fFt26eeN7AoDpcVNd1V17vuUizdpZ6JH8BD6w-draI1Yq6NLTdMP_3zcCQOcq_RaY9m_C3z7Bw50O7HpW0GVDvB_ha173qDIEy5DoT7-5SBToDU142UmWxWNIg7BwDWqhbnSdnjwQ4AqUiBLzZheZttD6m3_IdbpnY5s28ts5FFDwpkA7CiEbEKgm2hvYns4IkTdKxE2vlC8Iin8SlH6TxZzlIYADLA2IRY1vT53YsGb40qL6-YyPWSo7TGhxuvVn8XS-JMRzLzn7DKBujx1XJsIxYY.E5G2xRg4u_A7dxnavm_lMa12JrDJ2XbCfccFeJsNmBw&dib_tag=se&keywords=cumbuca&qid=1721158809&sprefix=cumbucas%2Caps%2C231&sr=8-16",
            "imagem": "./assets/images/bowls.png"
        },
        {
            "nome": "Toalha de mesa de animais",
            "link": "https://www.coredecore.com.br/produtos/toalha-de-mesa-quadrada-tecido-oxford-animais-geometrica-tl87-140x140cm/",
            "imagem": "./assets/images/toalha.png"
        },
        {
            "nome": "Toalha de mesa abstrata",
            "link": "https://www.coredecore.com.br/produtos/toalha-de-mesa-quadrada-tecido-oxford-formas-abstratas-coloridas-estampadas-140x140cm/",
            "imagem": "./assets/images/toalha2.png"
        },
        {
            "nome": "Caminho de mesa de girafa",
            "link": "https://www.coredecore.com.br/produtos/caminho-de-mesa-trilho-girafa-animal-print/",
            "imagem": "./assets/images/caminho.png"
        },
        {
            "nome": "Caminho de mesa de arco-íris 2m",
            "link": "https://shopee.com.br/product/1077897156/22497074361?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDTGVlaGl1aVYrZ2Q0QWxHYTlNK1RKYlE5U01NSlNVZzRkdHpxbm5Ea1RURjVmUVRsMlZ5TjhCcEZVZlUwQXRRZzRSVFdkMFF6T0dadElGcXFlL0xaNUxXUk9IMS9aekhKK2ZYQTlJK3VZVnJnPT0&srsltid=AfmBOopNklnSVVfadEbXCfgXebVQP5KV-plAusZnAFz4tZd23DW2pFOWcr0",
            "imagem": "./assets/images/caminhogay.png"
        },
        {
            "nome": "Kit de luvas térmicas",
            "link": "https://www.amazon.com.br/termicas-evitar-queimar-panela-termica/dp/B0B69PPN5Z/ref=asc_df_B0B69PPN5Z/?tag=googleshopp00-20&linkCode=df0&hvadid=379792469987&hvpos=&hvnetw=g&hvrand=16753348901672171888&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1721543758516&psc=1&mcid=978ac94e4ab73f87b98822e74d5f1eff",
            "imagem": "./assets/images/luva.png"
        },
        {
            "nome": "Pegador de saladas",
            "link": "https://www.amazon.com.br/Pegador-Salada-Silicone-Pequeno-OIKOS/dp/B085M4Z3NT/ref=pd_bxgy_thbs_d_sccl_2/136-5208835-6281138?pd_rd_w=MpRwD&content-id=amzn1.sym.dfe13063-d1af-4d14-870f-8e7a33b295c4&pf_rd_p=dfe13063-d1af-4d14-870f-8e7a33b295c4&pf_rd_r=0EHVTARBMS7G533DREFZ&pd_rd_wg=naHJA&pd_rd_r=00458a93-3cad-47c1-aa70-a8174d9f1b89&pd_rd_i=B085M4Z3NT&th=1",
            "imagem": "./assets/images/pegador.png"
        },
        {
            "nome": "Pegador multiuso",
            "link": "https://www.amazon.com.br/Pegador-Multiuso-Silicone-Henrique-Foga%C3%A7a/dp/B09D5SZSBX/ref=asc_df_B09D5SZSBX/?tag=googleshopp00-20&linkCode=df0&hvadid=379715601072&hvpos=&hvnetw=g&hvrand=9823285496443199473&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1481372189894&psc=1&mcid=e466d9925dd43331a20f700277f8161b",
            "imagem": "./assets/images/pegador3.png"
        },
        {
            "nome": "Pegador de massas",
            "link": "https://www.amazon.com.br/Pegador-Massa-Nylon-Ability-Tramontina/dp/B086YJL4PZ/ref=asc_df_B086YJL4PZ/?tag=googleshopp00-20&linkCode=df0&hvadid=379727414590&hvpos=&hvnetw=g&hvrand=15525294512052882142&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1341403644610&psc=1&mcid=e6349617fe343a9eac6b82bdfb3fdf45",
            "imagem": "./assets/images/pegador2.png"
        },
        {
            "nome": "Espátula de silicone",
            "link": "https://www.amazon.com.br/Esp%C3%A1tula-Nylon-Ability-Preto-Tramontina/dp/B086Y87Q4Y/ref=pd_bxgy_thbs_d_sccl_2/136-5208835-6281138?pd_rd_w=xCbkA&content-id=amzn1.sym.dfe13063-d1af-4d14-870f-8e7a33b295c4&pf_rd_p=dfe13063-d1af-4d14-870f-8e7a33b295c4&pf_rd_r=MV7B1AE4MDPS4FDGRK5Q&pd_rd_wg=sSZP4&pd_rd_r=d20a139c-148d-4f76-a2b7-0957fe45d29e&pd_rd_i=B086Y87Q4Y&psc=1",
            "imagem": "./assets/images/espatula.png"
        },
        {
            "nome": "Colher de silicone",
            "link": "https://www.amazon.com.br/Concha-Silicone-Mimo-Style-SN1736P/dp/B07D1KWMP2/ref=asc_df_B07D1L1Y3V/?tag=googleshopp00-20&linkCode=df0&hvadid=379751109541&hvpos=&hvnetw=g&hvrand=6537476773815062265&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-865187885184&mcid=d89d931909e23de896802fec47949e89&th=1",
            "imagem": "./assets/images/colher.png"
        },
        {
            "nome": "Concha de silicone",
            "link": "https://www.amazon.com.br/Concha-Silicone-Mimo-Style-SN1736P/dp/B07D1L1Y3V/ref=asc_df_B07D1L1Y3V/?tag=googleshopp00-20&linkCode=df0&hvadid=379751109541&hvpos=&hvnetw=g&hvrand=6537476773815062265&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-865187885184&mcid=d89d931909e23de896802fec47949e89&th=1",
            "imagem": "./assets/images/concha.png"
        },
        {
            "nome": "Concha de silicone para molho",
            "link": "https://www.amazon.com.br/Concha-Molho-Panqueca-Ability-Tramontina/dp/B086YM5D3Y/ref=asc_df_B086YM5D3Y/?tag=googleshopp00-20&linkCode=df0&hvadid=379715635596&hvpos=&hvnetw=g&hvrand=6537476773815062265&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1343827355673&psc=1&mcid=7df85309821335959a54fe8f51890e8e",
            "imagem": "./assets/images/conchamolho.png"
        },
        {
            "nome": "Potes de mantimentos",
            "link": "https://www.amazon.com.br/Mantimentos-Quadrado-Acr%C3%ADlico-Litros-Tampa/dp/B0CB1ZZ1HW/ref=asc_df_B0CB1ZZ1HW/?tag=googleshopp00-20&linkCode=df0&hvadid=647429706147&hvpos=&hvnetw=g&hvrand=5117207981475895935&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-2204846144128&psc=1&mcid=8e6ba635803b33fcb4ef7031d7de8e29",
            "imagem": "./assets/images/mantimentos.png"
        },
        {
            "nome": "Caixa de chás",
            "link": "https://www.magazineluiza.com.br/caixa-porta-cha-organizadora-bambu-estojo-6-divisorias-madeira-especiarias-livon/p/cj01df6jbf/ud/cxch/?seller_id=mtstore&srsltid=AfmBOopLN1p5TEe2DCvQOVZ9XMqDqd_IGNYrSUip7lKm2pPZvGcVyYv_jG4",
            "imagem": "./assets/images/cha.png"
        },
        {
            "nome": "Descansos de panela",
            "link": "https://www.amazon.com.br/Descansos-Panela-Bambu-Quadrado-15cm/dp/B0CKLTJX8B/ref=asc_df_B0CKLTJX8B/?tag=googleshopp00-20&linkCode=df0&hvadid=646911211159&hvpos=&hvnetw=g&hvrand=9481196355237681057&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-2260281338384&psc=1&mcid=69f440fa395c3b4f90eced5bd66c8d75",
            "imagem": "./assets/images/descanso.png"
        },
        {
            "nome": "Home spray",
            "link": "https://www.freshessence.com.br/produtos/home-spray-mango-smoothie/",
            "imagem": "./assets/images/mango.png"
        },
        {
            "nome": "Vela aromática Purple Fig",
            "link": "https://www.freshessence.com.br/produtos/vela-aromatica-purple-fig/",
            "imagem": "./assets/images/purplefig.png"
        },
        {
            "nome": "Vela aromática Autumn Flowers",
            "link": "https://www.freshessence.com.br/produtos/vela-aromatica-autumn-flowers-80g/",
            "imagem": "./assets/images/autumn.png"
        },
        {
            "nome": "Vela aromática Pé de moleque",
            "link": "https://www.freshessence.com.br/produtos/vela-aromatica-pe-de-moleque-80g/",
            "imagem": "./assets/images/pedemoleque.png"
        },
        {
            "nome": "Vela aromática Cerejeira",
            "link": "https://www.freshessence.com.br/produtos/vela-aromatica-cerejeira/",
            "imagem": "./assets/images/cerejeira.png"
        },
        {
            "nome": "Kit de medidores",
            "link": "https://tonystore.mercadoshops.com.br/MLB-4112590180-jogo-kit-8-pecas-medidor-culinario-colher-copo-em-aco-inox-_JM",
            "imagem": "./assets/images/medidor.png"
        },
        {
            "nome": "Kit coqueteleira",
            "link": "https://www.amazon.com.br/Caipirinha-Profissional-Coqueteleira-500ml-Pe%C3%A7as/dp/B0BSHCYV49/ref=asc_df_B0BSHCYV49/?tag=googleshopp00-20&linkCode=df0&hvadid=646911211159&hvpos=&hvnetw=g&hvrand=1319371529976265241&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9199085&hvtargid=pla-1969123673645&psc=1&mcid=463566ddbd623dbe9290d6ef33525d81",
            "imagem": "./assets/images/coqueteleira.png"
        },
        {
            "nome": "Capa de galão",
            "link": "https://www.novadecora.com.br/capa-para-galao-de-agua-20-litros-invertido-034cgai/",
            "imagem": "./assets/images/capagalao.png"
        },
        {
            "nome": "Topo de galão",
            "link": "https://www.novadecora.com.br/capa-para-galao-de-agua-20-litros-invertido-034cgai/",
            "imagem": "./assets/images/tampagalao.png"
        },
        {
            "nome": "Kit espátulas",
            "link": "https://www.novadecora.com.br/capa-para-galao-de-agua-20-litros-invertido-034cgai/",
            "imagem": "./assets/images/espatulas.png"
        }
    ]
};

presentesData.presentes.forEach(presente => {
    const card = document.createElement('div');
    card.classList.add('presente-card');

    const img = document.createElement('img');
    img.src = presente.imagem;
    img.alt = presente.nome;
    card.appendChild(img);

    const nome = document.createElement('h3');
    nome.textContent = presente.nome;
    card.appendChild(nome);

    const link = document.createElement('a');
    link.href = presente.link;
    link.textContent = 'Ver presente';
    card.appendChild(link);

    presentesContainer.appendChild(card);
});

