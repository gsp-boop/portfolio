const contentSection = {
  name: 'baseContentSection',
  title: 'Content Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      // of: [{ type: 'image' }],
    },
    {
      name: 'content',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
    },
  ],
}
export default contentSection
