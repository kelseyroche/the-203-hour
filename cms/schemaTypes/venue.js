// export default {
//     name: 'venue',
//     title: 'Venue',
//     type: 'document',
//     fields: [
//       { name: 'name', title: 'Name', type: 'string' },
//       { name: 'neighborhood', title: 'Neighborhood', type: 'string' },
//       { name: 'address', title: 'Address', type: 'string' },
//       { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
//       { name: 'happyHourMenu', title: 'Happy Hour Menu Image', type: 'image' },
//       {
//         name: 'deals',
//         title: 'Deals',
//         type: 'array',
//         of: [{ type: 'deal' }]
//       }
//     ]
//   }

export default {
    name: 'venue',
    title: 'Venue',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Venue Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'neighborhoods',
        title: 'Neighborhood Tags',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: [
                { title: 'Stamford', value: 'stamford' },
                { title: 'Downtown', value: 'downtown' },
                { title: 'Bedford Street', value: 'bedford-street' },
                { title: 'Harbor Point', value: 'harbor-point' },
                { title: 'Glenbrook', value: 'glenbrook' },
                { title: 'Old Greenwich', value: 'old-greenwich' },
                { title: 'Norwalk', value: 'norwalk' },
                { title: 'South Norwalk (SoNo)', value: 'sono' },
                { title: 'Darien', value: 'darien' },
              ],
              layout: 'tags', // Makes it look like tags in the studio
            },
          },
        ],
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'happyHourMenu',
        title: 'Happy Hour Menu (image)',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'deals',
        title: 'Deals',
        type: 'array',
        of: [{ type: 'deal' }],
      },
    ],
  }