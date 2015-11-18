block('form').mod('type', 'order')(
    content()(function() {
        return [
            {
                block: 'caption',
                mix: [{ block: 'form', elem: 'caption' }],
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
                            mix: [{ block: 'form', elem: 'phone' }],
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
                    apply('states'),
                    {
                        elem: 'item',
                        content: {
                            block: 'button',
                            mods: { theme: 'islands', size: 'xl', view: 'action', type: 'submit' },
                            text: 'Заказать звонок'
                        }
                    },
                    {
                        tag: 'input',
                        attrs: {
                            name: 'type',
                            value: 'order',
                            type: 'hidden'
                        }
                    }
                ]
            }
        ];
    })
)