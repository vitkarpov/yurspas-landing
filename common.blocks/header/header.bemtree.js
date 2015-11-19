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
                        elem: 'phone',
                        content: this.data.phone
                    },
                    {
                        elem: 'hours',
                        content: this.data.hours
                    },
                    {
                        block: 'button',
                        mods: { theme: 'islands', size: 'xl', view: 'action', order: true },
                        text: this.data.call
                    }
                ]
            }
        ]
    };
})
