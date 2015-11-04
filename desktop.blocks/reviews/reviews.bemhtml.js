block('reviews').elem('quote')(
    content()(function() {
        return this.ctx.content.map(function(item) {
            return {
                tag: 'p',
                content: item
            };
        });
    })
)

block('reviews').elem('preview')(
    content()(function() {
        return {
            elem: 'preview-inner',
            content: {
                bem: false,
                tag: 'img',
                attrs: {
                    src: this.ctx.url
                }
            }
        }
    })
)
