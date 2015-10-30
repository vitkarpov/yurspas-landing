block('scroll-menu')(
    content()(function() {
        return this.ctx.items.map(function(item) {
            return {
                block : 'link',
                mix: [{ block: 'scroll-menu', elem: 'item' }],
                js: {
                    id: item.url.split('#').pop()
                },
                mods : { theme : 'islands', size : 'm' },
                url : item.url,
                content : item.content
            };
        });
    })
);
