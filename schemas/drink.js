import {DropIcon} from '@sanity/icons'
export default {
  name: 'drink',
  title: 'Drink',
  type: 'document',
  icon: DropIcon,
  fields: [
    {
      name: 'name',
      title: 'Drink',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
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
  ],
}
