block('modal').mod('order', true).content()(function() {
    return {
        block: 'form',
        mods: { type: 'order' },
        caption: this.data['application-caption']
    };
})
