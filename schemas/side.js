import {LemonIcon} from '@sanity/icons'
export default {
    name: 'side',
    title: 'Side',
    type: 'document',
    icon: LemonIcon,
    fields: [
      {
        name: 'name',
        title: 'Side',
        type: 'string',
        description: 'Name of the side',
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
    ],
  }
  