modules.define('services', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name,
    {
        onSetMod: {
            'js': function() {
                this.switcher = this.findBlockInside('radio-group');

                this._show(this.switcher.getVal());
                this.switcher.on('change', this._onChange, this);
            }
        },

        /**
         * Обработчик смены переключателя
         */
        _onChange: function() {
            this._show(this.switcher.getVal());
        },

        /**
         * Возвращает указанный слайд
         * @param  {String} id
         * @return {jQuery}
         */
        _findItem: function(id) {
            return this.elem('item').filter('[data-id = "' + id + '"]');
        },

        /**
         * Показывает указанный слайд
         * @param  {String} id
         */
        _show: function(id) {
            this.setMod(this.elem('item'), 'current', false);
            this.setMod(this._findItem(id), 'current', true);
        }
    })
);

});
