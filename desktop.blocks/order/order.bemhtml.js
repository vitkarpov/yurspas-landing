block('order')(
    tag()('form'),

    attrs()({ action: '/order', method: 'POST' }),

    js()(true),

    content()(function() {
        return [
            {
                block: 'caption',
                mix: [{ block: 'order', elem: 'caption' }],
                content: this.ctx.caption
            },
            {
                elem: 'content',
                content: [
                    {
                        elem: 'item',
                        content: {
                            block : 'input',
                            name: 'name',
                            mods : { theme : 'islands', size : 'xl', width: 'available' },
                            placeholder : 'Как вас зовут?'
                        }
                    },
                    {
                        elem: 'item',
                        content: {
                            block : 'input',
                            mix: [{ block: 'order', elem: 'phone' }],
                            name: 'phone',
                            mods : { theme : 'islands', size : 'xl', width: 'available' },
                            placeholder : 'Телефон'
                        }
                    },
                    {
                        elem: 'item',
                        content: {
                            block : 'select',
                            mods : { mode : 'check', theme : 'islands', size : 'xl' },
                            name : 'service',
                            text : 'Услуги',
                            options : [
                                { val : 1, text : 'Гражданские' },
                                { val : 2, text : 'Уголовные' },
                                { val : 3, text : 'Военные' }
                            ]
                        }
                    },
                    {
                        elem: 'item',
                        mods: { request: 'done' },
                        content: 'Ваша заявка отправлена!'
                    },
                    {
                        elem: 'item',
                        mods: { request: 'fail' },
                        content: 'К сожалению, не удалось отправить заявку. Попробуйте позднее.'
                    },
                    {
                        elem: 'item',
                        content: {
                            block: 'button',
                            mods: { theme: 'islands', size: 'xl', view: 'action', type: 'submit' },
                            text: 'Заказать звонок'
                        }
                    }
                ]
            }
        ];
    })
)
