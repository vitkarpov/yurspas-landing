block('root').replace()(function() {
    return {
        block: 'page',
        title: this.ctx.data.title,
        head: [
            { elem: 'css', url: 'index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'index.min.js' }
        ],
        mods: { theme: 'islands' }
    };
});
