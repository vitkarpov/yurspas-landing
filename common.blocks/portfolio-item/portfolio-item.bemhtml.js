block('portfolio-item')(
    js()(true),

    content()(function() {
        var articleContent = [
            {
                block: 'portfolio-item',
                elem: 'article-date',
                content: this.ctx.date
            },
            {
                block: 'portfolio-item',
                elem: 'article-caption',
                content: this.ctx.caption
            },
            {
                block: 'portfolio-item',
                elem: 'article-content',
                content: this.ctx.detailed.map(function(item) {
                    return {
                        tag: 'p',
                        content: item
                    };
                })
            }
        ];
        return {
            elem: 'inner',
            content: [
                {
                    elem: 'text',
                    content: this.ctx.caption
                },
                {
                    elem: 'date',
                    content: this.ctx.date
                },
                {
                    block: 'modal',
                    js: true,
                    mods: { theme : 'islands', autoclosable: true, portfolio: true },
                    content: {
                        block: 'portfolio-item',
                        elem: 'article',
                        content: articleContent
                    }
                }
            ]
        };
    })
)
