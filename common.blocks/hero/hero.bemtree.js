block('hero').content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'hero',
                elem: 'content',
                content: [
                    {
                        block: 'caption',
                        mix: [{ block: 'hero', elem: 'caption' }],
                        content: this.data.hero.caption
                    },
                    {
                        elem: 'subcaption',
                        content: this.data.hero.subcaption
                    },
                    {
                        block: 'advantages'
                    }
                ]
            }
        ]
    };
})
