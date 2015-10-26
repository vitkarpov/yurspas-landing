block('scroll-menu')(
    content()(function() {
        return this.ctx.items.map(function(item) {
            return {
                elem: 'item',
                url: item.url,
                content: item.content
            };
        });
    })
);

block('scroll-menu').elem('item')(
    content()(function() {
        return {
            block : 'link',
            js: false,
            mods : { theme : 'islands', size : 'm' },
            url : this.ctx.url,
            content : this.ctx.content
        }
    })
);
