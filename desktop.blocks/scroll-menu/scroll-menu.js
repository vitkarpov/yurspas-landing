modules.define('scroll-menu', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            BEMDOM.win.on('scroll', this._onScroll.bind(this));
            this._cachedOffset = 0;
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

    isVisible: function() {
        return this.hasMod('visible');
    }
}));

});
