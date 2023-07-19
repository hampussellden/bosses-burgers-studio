import {StarIcon} from '@sanity/icons'
export default {
  name: 'hamburger',
  title: 'Hamburger',
  type: 'document',
  icon: StarIcon,
  fields: [
    {
      name: 'name',
      title: 'Hamburger',
      type: 'string',
      description: 'Name of the hamburger',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.image?.asset && !value) {
            return 'Alt text is required'
          }
          return true
        }),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'topping'}]}],
    },
    {
      name: 'preferences',
      title: 'Preferences',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'preference'}]}],
      description: 'Preferences or dietary restrictions that this hamburger is suitable for/can be modified for',
    },
  ],
}
