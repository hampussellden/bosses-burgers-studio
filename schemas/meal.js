import {CaseIcon} from '@sanity/icons'
export default {
    name: 'meal',
    title: 'Meal',
    type: 'document',
    icon: CaseIcon,
    fields: [
      {
        name: 'name',
        title: 'Meal',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'hamburger',
        title: 'Hamburger',
        type: 'reference',
        to: [{type: 'hamburger'}],
      },
      {
        name: 'side',
        title: 'Side',
        type: 'reference',
        to: [{type: 'side'}],
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
  