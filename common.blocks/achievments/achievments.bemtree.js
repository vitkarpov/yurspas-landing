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
            content: this.data.achievments.items.map(function(item, i) {
                return {
                    elem: 'item',
                    mods: {preview: !!item.preview},
                    js: {
                        id: this.generateId() + '-' + i
                    },
                    content: [
                        {
                            elem: 'pic',
                            mods: {type: item.type},
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
                        },
                        (function() {
                            if (!item.preview) {
                                return null;
                            }
                            return {
                                block: 'modal',
                                js: true,
                                mods: { theme: 'islands', autoclosable: true },
                                content: {
                                    tag: 'img',
                                    attrs: { src: item.preview, width: '100%' }
                                }
                            };
                        }())
                    ]
                };
            }.bind(this))
        }
    ];
})
