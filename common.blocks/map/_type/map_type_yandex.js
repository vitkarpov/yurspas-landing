modules.define('map', ['i-bem__dom'], function(provide, BEMDOM, block) {

provide(block.decl({ modName: 'type', modValue: 'yandex' }, {
    onSetMod: {
        'js': function() {
            ymaps.ready(this._initYandexMap.bind(this));
        }
    },

    _initYandexMap: function() {
        var map = new ymaps.Map(this.params.mapid, {
            center: this.params.coords,
            zoom: this.params.zoom || 15,
            type: "yandex#map"
        });

        map.controls
            .add("zoomControl")
            .add(new ymaps.control.TypeSelector(["yandex#map", "yandex#satellite", "yandex#hybrid", "yandex#publicMap"]))
            .add(new ymaps.control.MiniMap({},{size:[200,150]}));

        if (this.params.balloon) {
            map.balloon.open(
                this.params.coords,
                this.params.balloon,
                {
                    closeButton: false
                }
            );
        }
    }
}));

});
