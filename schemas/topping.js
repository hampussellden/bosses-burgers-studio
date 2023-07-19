import {ChevronRightIcon} from '@sanity/icons'
export default {
    name: 'topping',
    title: 'Topping',
    type: 'document',
    icon: ChevronRightIcon,
    fields: [
      {
        name: 'name',
        title: 'Topping Name',
        type: 'string',
        description: 'Name of the topping',
      },
    ],
  }
  