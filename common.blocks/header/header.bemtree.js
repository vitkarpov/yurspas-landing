block('header').content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'header',
                elem: 'left',
                content: [
                    {
                        block: 'logo',
                        mix: [{ block: 'header', elem: 'logo' }]
                    },
                    {
                        block: 'scroll-menu',
                        mix: [{ block: 'header', elem: 'menu' }]
                    }
                ]
            },
            {
                block: 'header',
                elem: 'right',
                content: [
                    {
                        tag: 'a',
                        attrs: {href: 'tel:89094098026'},
                        elem: 'phone',
                        content: this.data.phone
                    }
                ]
            }
        ]
    };
})
