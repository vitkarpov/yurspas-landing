block('scroll-menu')(
    js()(true),

    content()(function() {
        return applyNext().map(function(item) {
            return {
                elem: 'item',
                content: {
                    block : 'link',
                    js: {
                        id: item.url.split('#').pop()
                    },
                    mods : { theme : 'islands', size : 'm' },
                    url : item.url,
                    content : item.content
                }
            };
        });
    })
);
