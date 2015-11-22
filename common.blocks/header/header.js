modules.define('header', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('scroll-menu').on('visibility-changed', this._onMenuVisibilityChanged, this);
        }
    },

    _onMenuVisibilityChanged: function(e) {
        var menu = e.target;

        this.setMod(this.elem('logo'), 'hidden', menu.isVisible());
    }
}));

});
