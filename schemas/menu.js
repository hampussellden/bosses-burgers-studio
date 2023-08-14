// schemas/menu.js
export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitleOne',
            title: 'Meals',
            description: 'Subtitle One',
            type: 'reference',
            to: [{type: 'subtitle'}],
        },
        {
            name: 'menuGroupOne',
            title: 'Menu Group One',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'meal'}]}],
        },
            {
            name: 'subtitleTwo',
            title: 'Subtitle Two',
            description: 'sides',
            type: 'reference',
            to: [{type: 'subtitle'}],
        },
        {
            name: 'menuGroupTwo',
            title: 'Menu Group Two',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'side'}]}],
        },
        {
            name: 'subtitleThree',
            title: 'Subtitle Three',
            description: 'drinks',
            type: 'reference',
            to: [{type: 'subtitle'}],
        },
        {
            name: 'menuGroupThree',
            title: 'Menu Group Three',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'drink'}]}],
        }
    ]
}