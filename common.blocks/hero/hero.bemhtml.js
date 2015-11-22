block('hero')(
    attrs()({ id: 'main' })
)

block('hero').elem('caption')(
    tag()('h1')
);

block('hero').elem('subcaption')(
    tag()('h2')
);
