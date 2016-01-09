modules.define('achievments', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: function() {
            this.popups = {};
        }
    },

    _onClick: function(e) {
        var item = e.currentTarget.bem('achievments__item');
        var popup = item.findBlockInside('modal');

        if (popup) {
            this.popups[item.params.id] = popup;
        } else {
            popup = this.popups[item.params.id];
        }

        popup.setMod('visible', true);
    }
}, {
    live: function() {
        this.liveBindTo('item', 'click', function(e) {
            this._onClick(e);
        });
    }
}));

});
