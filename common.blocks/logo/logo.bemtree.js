block('logo').content()(function() {
    return [
        {
            elem: 'main',
            content: this.data.logo.main
        },
        {
            elem: 'add',
            content: this.data.logo.ext
        }
    ];
})
