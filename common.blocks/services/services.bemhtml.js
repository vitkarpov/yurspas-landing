block('services')(
    replace()(function() {
        return {
            block: 'page',
            elem: 'wrapper',
            content: applyNext()
        }
    }),

    attrs()({id: 'services'}),

    js()(true)
)

block('services').elem('item')(
    attrs()(function() {
        return {'data-id': this.ctx.id}
    }),

    content()(function() {
        return [
            {
                elem: 'pic',
                mods: { type: this.ctx.id }
            },
            applyNext()
        ];
    })
)
