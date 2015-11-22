block('reviews')(
    attrs()({id: 'reviews'}),

    js()(true),

    elem('quote')(
        content()(function() {
            return this.ctx.content.map(function(item) {
                return {
                    tag: 'p',
                    content: item
                };
            });
        })
    )
)
