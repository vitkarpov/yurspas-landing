modules.define('reviews-preview', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('modal');
        }
    },

    _onClick: function(e) {
        if (this._disabled) {
            return;
        }
        this.popup.setMod('visible', true);

        // не будем переключать слайд
        e.stopPropagation();
    },

    disable: function() {
        this._disabled = true;
    },

    enable: function() {
        this._disabled = false;
    }
}, {
    live: function() {
        this.liveBindTo('click', function(e) {
            this._onClick(e);
        });
    }
}));

});
