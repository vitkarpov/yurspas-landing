block('reasons')(
    replace()(function() {
        return {
            block: 'page',
            elem: 'wrapper',
            content: applyNext()
        }
    }),

    content()(function() {
        var line1 = [];
        var line2 = [];
        var content = applyNext();

        content.items.forEach(function(item, i) {
            var content = {
                elem: 'item',
                mods: { pic: item.pic },
                content: [
                    {
                        block: 'caption',
                        mix: [{ block: 'reasons', elem: 'subcaption' }],
                        content: item.caption
                    },
                    {
                        elem: 'text',
                        content: item.text
                    }
                ]
            };
            if (i < 3) {
                line1.push(content);
            } else {
                line2.push(content);
            }
        });

        return [
            {
                block: 'caption',
                mix: [{ block: 'reasons', elem: 'caption' }],
                content: content.caption
            },
            {
                elem: 'items',
                content: line1
            },
            {
                elem: 'items',
                content: line2
            }
        ];
    })
)
