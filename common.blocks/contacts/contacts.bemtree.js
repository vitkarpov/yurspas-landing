block('contacts').content()(function() {
    return [
        {
            block: 'page',
            elem: 'wrapper',
            content: [
                {
                    block: 'caption',
                    mix: [{ block: 'contacts', elem: 'caption' }],
                    content: 'Контакты и онлайн-консультация'
                },
                {
                    elem: 'subcaption',
                    content: 'Оставьте свой вопрос и адвокат Карпов свяжется с вами'
                }
            ]
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
                        elem: 'form',
                        content: {
                            block: 'form',
                            mods: { type: 'question'},
                            teaser: [
                                'Если у&nbsp;вас есть срочный вопрос — ',
                                { tag: 'b', content: 'позвоните на&nbsp;мобильный' }
                            ]
                        }
                    },
                    {
                        elem: 'info',
                        content: [
                            {
                                elem: 'subcaption',
                                content: 'Офис'
                            },
                            {
                                elem: 'address',
                                content: '344016, Россия, Ростов-на-Дону, ул. Таганрогская, 124'
                            },
                            {
                                elem: 'icons',
                                content: [
                                    {
                                        elem: 'icon',
                                        mods: { type: 'phone' },
                                        content: '+7 (909) 409-80-26'
                                    },
                                    {
                                        elem: 'icon',
                                        content: '+7 (863) 223-24-40'
                                    },
                                    {
                                        elem: 'icon',
                                        mods: { type: 'mail' },
                                        content: 'advokat@yurspas.ru'
                                    },
                                    {
                                        elem: 'icon',
                                        mods: { type: 'skype' },
                                        content: 'karpov20111'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ];
})
