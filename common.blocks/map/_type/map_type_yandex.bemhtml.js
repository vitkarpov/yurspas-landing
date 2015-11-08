block('map').mod('type', 'yandex')(
    js()(function() {
        return this.extend(applyNext(), {
            mapid: this.generateId()
        });
    }),

    content()(function() {
        var lang = (this.ctx.lang) ? this.ctx.lang : 'ru-RU';
        var script = [
            "(function() {",
                "var wf = document.createElement('script');",
                "wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +",
                  "'://api-maps.yandex.ru/2.0/?coordorder=longlat&load=package.standard&lang=" + lang + "';",
                "wf.type = 'text/javascript';",
                "wf.async = 'true';",
                "var s = document.getElementsByTagName('script')[0];",
                "s.parentNode.insertBefore(wf, s);",
            "})();"
        ].join('');
        var style = [
            'width:' + ((this.ctx.width) ? this.ctx.width : '100%'),
            'height:' + ((this.ctx.height) ? this.ctx.height : '100%')
        ].join(';');

        return [
            applyNext(),
            {
                tag: 'script',
                bem: false,
                content: script
            },
            {
                bem: false,
                attrs: {
                    id: this.generateId(),
                    style: style
                }
            }
        ];
    })
);
