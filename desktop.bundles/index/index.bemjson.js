module.exports = {
    block : 'page',
    title : 'Yurspas',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' },
        { elem : 'googlefont', font: 'Roboto+Slab:400,700:cyrillic' }
    ],
    scripts: [
        { elem : 'js', url : 'index.min.js' }
    ],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            js: true,
            content : [
                {
                    block: 'page',
                    elem: 'wrapper',
                    content: [
                        {
                            block: 'header',
                            elem: 'left',
                            content: [
                                {
                                    block: 'logo',
                                    mix: [{ block: 'header', elem: 'logo' }],
                                    content: [
                                        {
                                            elem: 'main',
                                            content: 'ЮрСпас.ру'
                                        },
                                        {
                                            elem: 'add',
                                            content: 'Юридические услуги'
                                        }
                                    ]
                                },
                                {
                                    block: 'scroll-menu',
                                    js: true,
                                    mix: [{ block: 'header', elem: 'menu' }],
                                    items: [
                                        {
                                            url: '#main',
                                            content: 'Главная'
                                        },
                                        {
                                            url: '#achievments',
                                            content: 'Награды'
                                        },
                                        {
                                            url: '#about',
                                            content: 'Адвокат'
                                        },
                                        {
                                            url: '#services',
                                            content: 'Услуги'
                                        },
                                        {
                                            url: '#contacts',
                                            content: 'Контакты'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'header',
                            elem: 'right',
                            content: [
                                {
                                    elem: 'phone',
                                    content: '8 909 409-80-26'
                                },
                                {
                                    elem: 'hours',
                                    content: 'С 9 до 18 часов'
                                }
                            ]
                        },
                        {
                            block: 'button',
                            mods: { theme: 'islands', size: 'xl', view: 'action', order: true },
                            text: 'Заказать звонок'
                        }
                    ]
                }
            ]
        },
        {
            block: 'hero',
            attrs: {id: 'main'},
            content: [
                {
                    block: 'page',
                    elem: 'wrapper',
                    content: [
                        {
                            block: 'hero',
                            elem: 'content',
                            content: [
                                {
                                    block: 'caption',
                                    mix: [{ block: 'hero', elem: 'caption' }],
                                    content: 'Ростовская городская юридическая контора&nbsp;№1'
                                },
                                {
                                    elem: 'subcaption',
                                    content: 'Получи бесплатную консультацию юриста прямо сейчас!'
                                },
                                {
                                    block: 'button',
                                    url: 'http://www.yurspas.ru/consult',
                                    mods: { theme: 'islands', size: 'l', view: 'action', type: 'link' },
                                    text: 'Задать вопрос'
                                },
                                {
                                    block: 'advantages',
                                    content: [
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'caption',
                                                    content: [
                                                        {
                                                            tag: 'b',
                                                            bem: false,
                                                            content: '90'
                                                        },
                                                        '%'
                                                    ]
                                                },
                                                'Более&nbsp;90% всех дел выигрывается'
                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'caption',
                                                    content: [
                                                        {
                                                            tag: 'b',
                                                            bem: false,
                                                            content: '500'
                                                        },
                                                        '&nbsp;дел'
                                                    ]
                                                },
                                                'Адвокат Карпов провел более 300 уголовных и&nbsp;200 граждаских дел'
                                            ],
                                        },
                                        {
                                            elem: 'item',
                                            content: [
                                                {
                                                    elem: 'caption',
                                                    content: [
                                                        {
                                                            tag: 'b',
                                                            bem: false,
                                                            content: '37'
                                                        },
                                                        '&nbsp;лет'
                                                    ]
                                                },
                                                '37&nbsp;лет опыта работы в&nbsp;юридической сфере'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'page',
            elem: 'wrapper',
            content: {
                block: 'achievments',
                attrs: {id: 'achievments'},
                content: [
                    {
                        block: 'caption',
                        mix: [{ block: 'achievments', elem: 'caption' }],
                        content: 'Достижения адвоката'
                    },
                    {
                        elem: 'subcaption',
                        content: 'Значимые награды и статусы Карпова Сергея Викторовича',
                    },
                    {
                        elem: 'content',
                        content: [
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'pic',
                                        mods: { type: 'medal' },
                                        content: [
                                            {
                                                elem: 'item-caption',
                                                content: 'Медаль прокуратуры'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'text',
                                        content: 'В&nbsp;2011 году награжден медалью прокуратуры Российской Федерации &laquo;290 лет прокуратуре России&raquo;'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'pic',
                                        mods: { type: 'diploma' },
                                        content: [
                                            {
                                                elem: 'item-caption',
                                                content: 'Грамота Президента'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'text',
                                        content: 'В&nbsp;2011 году награжден почетной грамотой Президента Федеральной палаты адвокатов&nbsp;РФ'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'pic',
                                        mods: { type: 'international' },
                                        content: [
                                            {
                                                elem: 'item-caption',
                                                content: 'Международный статус юриста'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'text',
                                        content: 'С&nbsp;2013 года является членом международной ассоциации юристов (IBA), секция &laquo;криминальное право&raquo;'
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'pic',
                                        mods: { type: 'expert' },
                                        content: [
                                            {
                                                elem: 'item-caption',
                                                content: 'Статус эксперта'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'text',
                                        content: 'Эксперт некоммерческой организации &laquo;Центр общественных процедур &laquo;Бизнес против Коррупции&raquo;'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'about',
            content: {
                elem: 'wrapper',
                attrs: {id: 'about'},
                content: {
                    block: 'page',
                    elem: 'wrapper',
                    content: {
                        block: 'about',
                        elem: 'content',
                        content: [
                            {
                                block: 'caption',
                                mix: [{ block: 'about', elem: 'caption' }],
                                content: 'Карпов Сергей&nbsp;Викторович'
                            },
                            {
                                elem: 'quote',
                                content: [
                                    'Честность в&nbsp;работе на&nbsp;клиента&nbsp;&mdash; это главное.',
                                    {
                                        tag: 'br',
                                        bem: false
                                    },
                                    'Все вопросы по&nbsp;ведению дела согласовываются с&nbsp;клиентом'
                                ]
                            },
                            {
                                elem: 'item',
                                mods: { pic: 'military' },
                                content: 'Проходил службу в&nbsp;органах военной прокуратуры с&nbsp;1978 по&nbsp;2001&nbsp;г.'
                            },
                            {
                                elem: 'item',
                                mods: { pic: 'lawer' },
                                content: 'Адвокат Ростовской областной коллегии адвокатов с&nbsp;2001&nbsp;года, а&nbsp;с&nbsp;2008&nbsp;&mdash; заведующий филиалом &laquo;Ростовской городской юридической конторы &#8470;&nbsp;1&raquo;'
                            },
                            {
                                block: 'button',
                                mods: { theme: 'islands', size: 'l', view: 'action', order: true },
                                text: 'Заказать звонок'
                            }
                        ]
                    }
                }
            }
        },
        {
            block: 'page',
            elem: 'wrapper',
            content: {
                block: 'services',
                attrs: {id: 'services'},
                js: true,
                content: [
                    {
                        block: 'caption',
                        mix: [{ block: 'services', elem: 'caption' }],
                        content: 'Услуги адвоката'
                    },
                    {
                        block : 'radio-group',
                        mods : { theme : 'islands', size : 'l', type : 'button' },
                        val: 'civil',
                        options : [
                            { val : 'civil', text : 'Гражданские' },
                            { val : 'criminal', text : 'Уголовные' },
                            { val : 'military', text : 'Военные' }
                        ]
                    },
                    {
                        elem: 'text',
                        content: 'Представительство клиента в судах первой, кассационной и надзорной инстанций, а также в арбитражный и третейских судах по гражданским делам.'
                    },
                    {
                        elem: 'item',
                        attrs: { 'data-id': 'civil' },
                        content: {
                            block: 'list',
                            items: [
                                'возврат долга',
                                'возмещение ущерба',
                                'жалобы на неправомерные действия государственных органов',
                                'жилищное законодательство',
                                'исполнительные производство',
                                'корпоративное правом',
                                'вопросы возмещения морального вреда',
                                'вопросы недвижимости',
                                'пенсионное законодательство',
                                'семейное законодательство',
                                'вопросы прохождения военной службы'
                            ]
                        }
                    },
                    {
                        elem: 'item',
                        attrs: { 'data-id': 'criminal' },
                        content: {
                            block: 'list',
                            items: [
                                'изучение уголовных дел с составлением поэпизодного заключения на предмет анализа доказательственной базы',
                                'анализ объективности судебно-бухгалтерских экспертиз по уголовным делам бизнес-направленности в сфере экономической деятельности',
                                'составление и подача апелляционных, кассационных и надзорных жалоб'
                            ]
                        }
                    },
                    {
                        elem: 'item',
                        attrs: { 'data-id': 'military' },
                        content: {
                            block: 'list',
                            items: [
                                'предоставления отсрочек от призыва на военную службу',
                                'прохождения военной службы',
                                'восстановления на военной службе',
                                'выплат установленных видов денежного и иного довольствия',
                                'предоставления жилья и льгот, в том числе по вопросу получения в собственность жилых помещений в порядке бесплатной приватизации военнослужащими и членами их семей на территории всего Южного военного округа',
                                'пенсионного обеспечения'
                            ]
                        }
                    },
                    {
                        block: 'button',
                        mods: { theme: 'islands', size: 'l', view: 'action', order: true },
                        text: 'Заказать звонок'
                    }
                ]
            }
        },
        {
            block: 'page',
            elem: 'wrapper',
            content: {
                block: 'reasons',
                caption: 'Еще 6 причин, почему стоит воспользоваться юридическими услугами адвоката Карпова',
                items: [
                    {
                        caption: '90% побед в суде',
                        pic: 'percent',
                        text: 'Высокий процент выигрыша судебных дел. Адвокат Карпов выигрывает более 90% всех граждаских и уголовных дел'
                    },
                    {
                        caption: '37 лет опыта работы',
                        pic: 'exp',
                        text: 'Большой опыт работы в прокуратуре помогает адвокату выработать индивидуальный подход к каждому делу'
                    },
                    {
                        caption: 'Клиенты по всей России',
                        pic: 'map',
                        text: 'География работ адвоката Карпова включает в себя территорию всей Российской Федерации'
                    },
                    {
                        caption: 'Провел более 500 дел',
                        pic: 'cases',
                        text: 'За время работы адвокатом Сергей Викторович провел более 300 уголовных и 200 граждаских дел'
                    },
                    {
                        caption: 'Бесплатная онлайн-консультация',
                        pic: 'consult',
                        text: 'Бесплатная и оперативная онлайн-консультация: за 3 года Сергей Викторович ответил на более 3000 вопросов онлайн'
                    },
                    {
                        caption: '100% конфеденциальность',
                        pic: 'anonim',
                        text: 'Адвокат Карпов гарантирует конфеденциальность всей информации, полученной от клиента'
                    }
                ]
            }
        },
        {
            block: 'contacts',
            attrs: {id: 'contacts'},
            content: [
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
            ]
        },
        {
            block : 'footer',
            content : {
                block: 'page',
                elem: 'wrapper',
                content: [
                    {
                        block: 'footer',
                        elem: 'form',
                        content: {
                            block: 'order',
                            caption: 'Оставьте заявку на услугу'
                        }
                    },
                    {
                        block: 'footer',
                        elem: 'finish',
                        content: [
                            {
                                elem: 'copy',
                                content: '&copy; Карпов С.В., 2015'
                            },
                            {
                                elem: 'developer',
                                content: [
                                    'Built with ❤ by ',
                                    { block: 'link', content: 'Den Shved' },
                                    ' and ',
                                    { block: 'link', url: 'http://vitkarpov.com', content: 'Vit Karpov' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {
            block : 'modal',
            js: true,
            mods : { theme : 'islands', autoclosable: true, order: true },
            content : {
                block: 'order',
                caption: 'Оставьте заявку на услугу'
            }
        }
    ]
};
