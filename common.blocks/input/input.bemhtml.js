block('input').elem('box')(
    content()(function() {
        return this.extend(applyNext(), {
            attrs: {required: true}
        });
    })
)
