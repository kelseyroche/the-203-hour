// export default {
//     name: 'deal',
//     title: 'Deal',
//     type: 'object',
//     fields: [
//       { name: 'type', title: 'Type (Drinks, Food, Both)', type: 'string' },
//       { name: 'description', title: 'Description', type: 'text' },
//       { name: 'days', title: 'Days Available', type: 'array', of: [{ type: 'string' }] },
//       { name: 'startTime', title: 'Start Time', type: 'string' },
//       { name: 'endTime', title: 'End Time', type: 'string' }
//     ]
//   }

export default {
    name: 'deal',
    title: 'Deal',
    type: 'object',
    fields: [
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: ['Drinks', 'Food', 'Drinks + Food'],
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'days',
        title: 'Days Available',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
          },
        ],
      },
      {
        name: 'startTime',
        title: 'Start Time',
        type: 'string',
      },
      {
        name: 'endTime',
        title: 'End Time',
        type: 'string',
      },
    ],
  }