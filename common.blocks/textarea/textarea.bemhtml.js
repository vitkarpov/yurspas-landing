block('textarea')(
    attrs()(function() {
        return this.extend(applyNext(), {
            required: true
        });
    })
)
