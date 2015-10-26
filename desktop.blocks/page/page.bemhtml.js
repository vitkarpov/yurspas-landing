block('page').elem('wrapper')(
    content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    })
);

block('page').elem('googlefont').match(function() { return this.ctx.font })(
    def()(function() {
        return applyCtx({
            tag: 'script',
            content: (
              "var WebFontConfig = {" +
                "google: { families: [ '" + this.ctx.font + "' ] }" +
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
        });
    })
)
