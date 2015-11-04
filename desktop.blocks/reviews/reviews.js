modules.define('reviews', ['i-bem__dom', 'jquery', 'jquery__slider'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            var slider = this.findElem('slider');

            slider.fotorama({
                width: '100%',
                ratio: 4/3
            });
        }
    }
}));

});
