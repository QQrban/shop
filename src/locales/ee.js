const ee = {
    header: {
        icons: {
            cart: 'Ostukorv',
            profile: 'Profiil',
            wishes: 'Soovid',
        },
        navigation: {
            home: 'Esileht',
            products: 'Tooted',
            services: 'Teenused',
            news: 'Uudised',
        }
    },
    main: {
        main_poster: {
            title: 'Internetipood kus on tooteid',
            styled_title: `Apple'ist Xiaomi'ni`,
            text: 'Külastage meid ja avastage linna parimad pakkumised elektroonikaseadmetele!',
            button: 'osta kohe',
        },
        section_titles: {
            popular_goods: 'Populaarsed Kaubad',
            new_goods: 'Uued Kaubad',
            super_sale: 'Mega Müük',
            news_and_blog: 'Uudised ja blogi',
        },
        secondary_poster: {
            title: 'Pakume teile võimalust vahetada',
            styled_title: 'oma telefon uue vastu',
            text: 'Vahetage oma vana telefon uue vastu meie vahetusprogrammi abil',
            button: 'loe rohkem',
        },
        show_all: 'näita kõiki',
        buttons: 'osta',
        products: {
            filters: {
                search_placeholder: `Otsing ReactShop'is`,
                price: 'Hind',
                release_year: 'Väljalaskeaasta',
                internal_memory: 'Sisemälu',
                color: {
                    name: 'Värv',
                    colors: [
                        { label: 'Must', value: 'black' },
                        { label: 'Hõbe', value: 'silver' },
                        { label: 'Valge', value: 'white' },
                        { label: 'Muud', value: 'other' },
                    ],
                },
            },
            no_products: 'Sobivaid tooteid pole',
        },
        news: {
            header: 'Värsked Uudised'
        },
        cart: {
            title: 'Kassasse minek',
            empty_cart: 'Teie ostukorv on tühi',
            button: 'Jätka maksmisega',
            total_price: 'Koguhind',
            clear_cart: ' Tühjenda ostukorv'
        },
        services: {
            banner: {
                title: 'Hoolitse oma rahakoti ja keskkonna eest',
                big_text: 'Vahetus lisatasuga',
                text: '- Saad uue seadme odavamalt vana seadme maksumuse võrra'
            },
            steps: 'Millised sammud on vajalikud lisamaksega vahetusprogrammi jaoks?',
            list: [
                'Tooge oma seade esindusse.',
                'Kui soovite andmeid vanast seadmest uuele üle kanda, looge varukoopia või salvestage andmed muul viisil',
                'Tagastataval seadmel ei tohi olla lukku ega võrgulukku.',
                'Seadmest peab olema välja lülitatud Find My iPhone / Find My Device funktsioon.',
                'Veenduge, et olete seadmest kõik isiklikud kontod ja andmed eemaldanud.',
            ]
        }
    },
}

export default ee;