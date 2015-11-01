modules.define('button', ['i-bem__dom', 'jquery', 'jquery__scrollto'], function(provide, BEMDOM, $, scrollto, Button) {

provide(Button.decl({ modName : 'question', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.on('click', this._onClick);
            }
        }
    },

    _onClick: function() {
        BEMDOM.win.scrollTo(document.getElementById('question'), {
            offset: {top: -76},
            duration: 200
        });
    }
}));

});
