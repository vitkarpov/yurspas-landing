modules.define('scroll-menu', ['i-bem__dom', 'jquery', 'jquery__scrollto'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            BEMDOM.win.on('scroll', this._onScroll.bind(this));
            this._cachedOffset = 0;

            this.bindTo('item', 'click', this._onItemClick);
        }
    },

    _onScroll: function() {
        var offset = BEMDOM.win.scrollTop();

        if (
            (this._cachedOffset > 0 && offset === 0) ||
            (this._cachedOffset === 0 && offset > 0)
        ) {
            this._cachedOffset = offset;
            this.setMod('visible', offset > 0);
            this.emit('visibility-changed');
        }
    },

    _onItemClick: function(e) {
        var item = $(e.target).bem('link');
        var id = item.params.id;

        BEMDOM.win.scrollTo(document.getElementById(id), {
            offset: {top: -76},
            duration: 200
        });

        e.preventDefault();
    },

    isVisible: function() {
        return this.hasMod('visible');
    }
}));

});
