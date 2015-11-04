modules.define('reviews', ['i-bem__dom', 'jquery', 'jquery__slider'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            var slider = this.findElem('slider');

            slider.fotorama({
                width: '100%',
                ratio: 3/2,
                click: false
            });

            slider.on('fotorama:show', this._onShowStart.bind(this));
            slider.on('fotorama:showend', this._onShowEnd.bind(this));
        }
    },

    _onShowStart: function() {
        this.findBlocksInside('reviews-preview').forEach(function(block) {
            block.disable();
        });
    },

    _onShowEnd: function() {
        this.findBlocksInside('reviews-preview').forEach(function(block) {
            block.enable();
        });
    }
}));

});
