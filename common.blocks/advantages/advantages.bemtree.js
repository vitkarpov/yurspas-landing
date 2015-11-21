block('advantages').content()(function() {
    return this.data.advantages.map(function(item) {
        return {
            elem: 'item',
            content: [
                {
                    block: 'caption',
                    mix: [{ block: 'advantages', elem: 'caption' }],
                    content: [
                        {
                            tag: 'b',
                            bem: false,
                            content: item.digit
                        },
                        item.unit
                    ]
                },
                item.text
            ]
        }
    });
})
