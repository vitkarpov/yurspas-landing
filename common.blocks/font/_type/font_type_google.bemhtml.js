block('font').mod('type', 'google')(
    js()(function() {
        return {
            family: this.ctx.family,
            weights: this.ctx.weights,
            sets: this.ctx.sets
        };
    }),

    content()(function() {
        var font = [
            this.ctx.family.split(' ').join('+'),
            this.ctx.weights.join(','),
            this.ctx.sets.join(',')
        ].join(':');

        return {
            tag: 'script',
            content: (
              "var WebFontConfig = {" +
                "google: { families: [ '" + font + "' ] }" +
              "};" +
              "(function() {" +
                "var wf = document.createElement('script');" +
                "wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +" +
                  "'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';" +
                "wf.type = 'text/javascript';" +
                "wf.async = 'true';" +
                "var s = document.getElementsByTagName('script')[0];" +
                "s.parentNode.insertBefore(wf, s);" +
              "})();"
            )
        };
    })
)
