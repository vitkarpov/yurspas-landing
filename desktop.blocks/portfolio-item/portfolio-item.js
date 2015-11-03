modules.define('portfolio-item', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('modal');
            this.bindTo('click', this._onClickItem);
        }
    },

    _onClickItem: function(e) {
        this.popup.setMod('visible', true);
    }

}));

});
