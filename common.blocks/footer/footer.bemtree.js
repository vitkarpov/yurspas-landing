block('footer').content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'footer',
                elem: 'finish',
                content: [
                    {
                        elem: 'copy',
                        content: this.data.copyright
                    },
                    {
                        elem: 'developer',
                        content: [
                            'Built with ❤ by ',
                            { block: 'link', url: this.data.authors.landing4me.url, content: this.data.authors.landing4me.name },
                            ' and ',
                            { block: 'link', url: this.data.authors.vitkarpov.url, content: this.data.authors.vitkarpov.name }
                        ]
                    }
                ]
            }
        ]
    };
})
