block('achievments').replace()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: applyNext()
    }
})

block('achievments').elem('caption')(
    tag()('h2')
)

block('achievments').elem('item-caption')(
    tag()('h3')
)
