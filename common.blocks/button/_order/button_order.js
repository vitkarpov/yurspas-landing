modules.define('button', ['i-bem__dom'], function(provide, BEMDOM, Button) {

provide(Button.decl({ modName : 'order', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var page = this.findBlockOutside('page');
                var modal = page.findBlockInside('modal');

                this.bindTo('click', function() {
                    modal.setMod('visible', true)
                });
            }
        }
    }
}));

});
