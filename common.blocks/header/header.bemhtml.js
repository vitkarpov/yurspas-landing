block('header')(
    js()(true),

    content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    })
);
