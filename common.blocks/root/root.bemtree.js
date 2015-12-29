block('root').replace()(function() {
    this.data = this.ctx.data;

    return {
        block: 'page',
        title: this.data.title,
        favicon : '/favicon.ico',
        head : [
            { elem : 'meta', attrs : { name : 'description', content : this.data.description } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
            { elem : 'css', url : 'index.min.css' },
            { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&subset=cyrillic' }
        ],
        scripts: [
            { elem : 'js', url : 'index.min.js' }
        ],
        mods : { theme : 'islands' }
    };
});
