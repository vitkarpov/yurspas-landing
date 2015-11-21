block('page').content()(function() {
    return [
        { block: 'header' },
        { block: 'hero' },
        { block: 'achievments' },
        { block: 'about' },
        { block: 'services' },
        { block: 'reasons' },
        { block: 'footer' },
        {
            block : 'modal',
            js: true,
            mods : { theme : 'islands', autoclosable: true, order: true },
            content : {
                block: 'form',
                mods: { type: 'order' },
                caption: this.data['application-caption']
            }
        }
    ];
})
