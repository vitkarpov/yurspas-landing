modules.define('order', ['jquery', 'i-bem__dom'], function(provide, $, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.bindTo('submit', this._onSubmit);
            }
        }
    },

    _onSubmit: function(e) {
        var $form = $(e.target);

        $.post($form.attr('action'), $form.serialize())
            .done(this._onDone.bind(this))
            .fail(this._onFail.bind(this));

        e.preventDefault();
    },

    _onDone: function() {
        this.setMod('done', true);
    },

    _onFail: function() {
        this.setMod('fail', true);
    }
}));

});
