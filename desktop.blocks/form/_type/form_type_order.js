modules.define('form', ['i-bem__dom'], function(provide, BEMDOM, Form) {

provide(Form.decl({ modName : 'type', modVal : 'order' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var input = this.elem('phone').bem('input');

                input
                    .elem('control')
                    .mask('+7 (999) 999-9999');
            }
        }
    }
}));

});
