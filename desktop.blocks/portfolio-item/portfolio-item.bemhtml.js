block('portfolio-item')(
    js()(true),

    content()(function() {
        return {
            elem: 'inner',
            content: [
                {
                    elem: 'text',
                    content: applyNext()
                },
                {
                    elem: 'date',
                    content: this.ctx.date
                },
                {
                    block: 'modal',
                    js: true,
                    mods: { theme : 'islands', autoclosable: true, portfolio: true },
                    content: this.ctx.detailed.map(function(item) {
                        return {
                            tag: 'p',
                            content: item
                        };
                    })
                }
            ]
        };
    })
)
