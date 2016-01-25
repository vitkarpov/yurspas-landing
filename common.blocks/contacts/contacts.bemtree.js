block('contacts').content()(function() {
    return [
        {
            block: 'page',
            elem: 'wrapper',
            content: [
                {
                    block: 'caption',
                    mix: [{ block: 'contacts', elem: 'caption' }],
                    content: 'Контакты'
                }
            ]
        },
        {
            block: 'page',
            elem: 'wrapper',
            content: {
                block: 'contacts',
                elem: 'content',
                attrs: {id: 'question'},
                content: [
                    {
                        elem: 'wrapper-contacts',
                        content: [
                            {
                                elem: 'left',
                                content: [
                                    'Офис: 344016, Россия,',
                                    'Ростов-на-Дону, ул. Таганрогская, 124',
                                    'Обращайтесь за помощью по телефону:'
                                ].join('<br />')
                            },
                            {
                                elem: 'icons',
                                content: [
                                    {
                                        elem: 'icon',
                                        mods: { type: 'mail' },
                                        content: 'advokat@yurspas.ru'
                                    },
                                    {
                                        elem: 'icon',
                                        mods: { type: 'skype' },
                                        content: 'karpov20111'
                                    },
                                    {
                                        elem: 'icon',
                                        mods: { type: 'phone' },
                                        content: 'Офис: +7 (863) 223-24-40'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem: 'cell-phone',
                        content: [
                            {
                                elem: 'cell-prefix',
                                content: 'Моб. '
                            },
                            {
                                tag: 'a',
                                attrs: {
                                    href: 'tel:+79094098026'
                                },
                                content: '+7 (909) 409-80-26'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'map',
            mix: [{ block: 'contacts', elem: 'map' }],
            mods: { type: 'yandex' },
            height: '450px',
            js: {
                coords: [39.644664, 47.255705],
                balloon: {
                    contentHeader: "Адвокат Карпов С.В.",
                    contentBody: "ул. Таганрогская, 124, офис 137"
                }
            }
        }
    ];
})
