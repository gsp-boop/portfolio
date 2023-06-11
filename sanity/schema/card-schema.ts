const card = {
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titles',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Cover Photo',
      type: 'image',
      fields: [
        { name: 'alt', title: 'Alt', type: 'string' },
        { name: 'caption', title: 'Caption', type: 'string' },
      ],
      options: [
        {
          hotspot: true,
        },
      ],
    },
    {
      name: 'card',
      title: 'Cards',
      type: 'array',
      options: [{ sortable: true }],
      of: [
        {
          type: 'image',
          title: 'Image',
          name: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name:'body',
              title:'Body',
              type:'string'
            },
            {
              name:'link',
              title:'Link',
              type:'string'
            }
          ],
          options: {
            hotspot: true,
            metadata: ['pallette'],
          },
        },
      ],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    }
  ],
}
export default card
