import {ChevronRightIcon} from '@sanity/icons'
export default {
    name: 'preference',
    title: 'Preference',
    type: 'document',
    icon: ChevronRightIcon,
    fields: [
      {
        name: 'name',
        title: 'Preference',
        type: 'string',
        description: 'Name of the preference',
      },
    ],
  }
  