// schemas/landingPageInfoBlock.js
export default {
    name: 'landingPageInfoBlock',
    title: 'Landing Page Info Block',
    type: 'document',
    fields: [
      {
        name: 'content',
        title: 'Text Content',
        type: 'string',
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
        name: 'permalink',
        title: 'Permalink',
        type: 'string',
      }
    ],
  }
  