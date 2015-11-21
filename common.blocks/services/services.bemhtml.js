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
