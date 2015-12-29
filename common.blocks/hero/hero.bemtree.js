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
                        block: 'button',
                        mods: { theme: 'islands', size: 'l', question: true },
                        text: this.data.question
                    },
                    {
                        block: 'advantages'
                    }
                ]
            }
        ]
    };
})
