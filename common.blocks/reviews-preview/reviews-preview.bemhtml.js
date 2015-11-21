block('reviews-preview')(
    js()(true),

    content()(function() {
        return {
            elem: 'inner',
            content: [
                {
                    tag: 'img',
                    attrs: { src: this.ctx.url }
                },
                {
                    block: 'modal',
                    js: true,
                    mods: { theme: 'islands', autoclosable: true },
                    content: {
                        block: 'reviews-preview',
                        elem: 'image',
                        content: {
                            tag: 'img',
                            attrs: { src: this.ctx.url }
                        }
                    }
                }
            ]
        }
    })
)
