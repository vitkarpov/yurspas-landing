block('root').replace()(function() {
    this.data = this.ctx.data;

    return {
        block: 'page',
        title: this.data.title,
        favicon : '/favicon.ico',
        head : [
            { elem : 'meta', attrs : { name : 'description', content : '' } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
            { elem : 'css', url : 'index.min.css' }
        ],
        scripts: [
            { elem : 'js', url : 'index.min.js' },
            { block : 'font', mods: { type: 'google' }, family: 'Roboto Slab', weights: [400,700], sets: ['cyrillic'] }
        ],
        mods : { theme : 'islands' }
    };
});
