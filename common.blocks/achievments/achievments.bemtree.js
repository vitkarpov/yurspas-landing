block('achievments').content()(function() {
    return [
        {
            block: 'caption',
            mix: [{ block: 'achievments', elem: 'caption' }],
            content: this.data.achievments.caption
        },
        {
            elem: 'subcaption',
            content: this.data.achievments.subcaption
        },
        {
            elem: 'content',
            content: this.data.achievments.items.map(function(item) {
                return {
                    elem: 'item',
                    content: [
                        {
                            elem: 'pic',
                            mods: { type: item.type },
                            content: [
                                {
                                    block: 'caption',
                                    mix: [{ block: 'achievments', elem: 'item-caption' }],
                                    content: item.caption
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: item.text
                        }
                    ]
                };
            })
        }
    ];
})
