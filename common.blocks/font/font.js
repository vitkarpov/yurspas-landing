modules.define('font', ['i-bem__dom', 'font__observer', 'vow', 'jquery__cookies'], function(provide, BEMDOM, Observer, vow) {

provide(BEMDOM.decl('font', {
    onSetMod: {
        'js': function() {
            var observers = this.params.weights.map(function(weight) {
                return new Observer(this.params.family, {
                    weight: weight
                }).check();
            }, this);

            vow.all(observers)
                .then(this._onLoaded.bind(this));
        }
    },

    _onLoaded: function() {
        BEMDOM.doc.find('html').addClass('fonts-loaded');
    }
}));

});
