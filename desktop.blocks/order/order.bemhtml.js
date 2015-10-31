block('order')(
    tag()('form'),

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
                            mods : { theme : 'islands', size : 'xl', width: 'available' },
                            placeholder : 'Как вас зовут?'
                        }
                    },
                    {
                        elem: 'item',
                        content: {
                            block : 'input',
                            mods : { theme : 'islands', size : 'xl', width: 'available' },
                            placeholder : 'Телефон'
                        }
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
