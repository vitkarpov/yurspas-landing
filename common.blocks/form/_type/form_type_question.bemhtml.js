block('form').mod('type', 'question')(
    attrs()({
        action: '?action=question', method: 'POST'
    }),
    content()(function() {
        return [
            {
                elem: 'inputs-wrapper',
                content: [
                    {
                        block : 'input',
                        mix: [{ block: 'form', elem: 'item' }],
                        name: 'name',
                        mods : { theme : 'islands', size : 'xl', width: 'available' },
                        placeholder : 'Как вас зовут?'
                    },
                    {
                        block : 'input',
                        mix: [{ block: 'form', elem: 'email' }, { block: 'form', elem: 'item' }],
                        name: 'email',
                        mods : { theme : 'islands', size : 'xl', width: 'available' },
                        placeholder : 'Электронная почта для ответа'
                    }
                ]
            },
            {
                elem: 'item',
                content: {
                    block : 'textarea',
                    mix: [{ block: 'form', elem: 'textarea' }],
                    name: 'question',
                    mods : { theme : 'islands', size : 'xl', width : 'available' },
                    placeholder : 'Задайте свой вопрос'
                }
            },
            apply('states'),
            {
                elem: 'item',
                content: [
                    {
                        block: 'button',
                        mix: [{ block: 'form', elem: 'button-right' }],
                        mods: { theme: 'islands', size: 'xl', view: 'action', type: 'submit' },
                        text: 'Задать вопрос'
                    },
                    {
                        elem: 'teaser',
                        content: this.ctx.teaser
                    }
                ]
            },
            {
                tag: 'input',
                attrs: {
                    name: 'type',
                    value: 'question',
                    type: 'hidden'
                }
            }
        ];
    })
)
