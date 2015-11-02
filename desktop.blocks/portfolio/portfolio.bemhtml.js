block('portfolio').elem('item')(
    content()(function() {
        return {
            elem: 'item-i',
            content: [
                {
                    elem: 'text',
                    content: applyNext()
                },
                {
                    elem: 'date',
                    content: this.ctx.date
                }
            ]
        };
    })
)
