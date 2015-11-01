block('form')(
    tag()('form'),

    attrs()({ action: '/order', method: 'POST' }),

    js()(true),

    mode('states')(function() {
        return [
            {
                elem: 'item',
                mods: { request: 'done' },
                content: 'Ваша заявка отправлена!'
            },
            {
                elem: 'item',
                mods: { request: 'fail' },
                content: 'К сожалению, не удалось отправить заявку. Попробуйте позднее.'
            }
        ]
    })
)
