block('about').content()(function() {
    return {
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
                    }
                ]
            }
        }
    };
})
