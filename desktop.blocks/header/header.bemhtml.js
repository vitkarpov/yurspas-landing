block('header')(
    content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    })
);
