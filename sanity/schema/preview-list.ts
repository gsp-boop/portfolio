const previewList = {
    name: 'previewList',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
      {
        title: 'Title',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Subtitle',
        name: 'subtitle',
        type: 'string'
      },
      {
        title: 'Desciption',
        name: 'description',
        type: 'array',
        of: [{type: 'string',}]
      }
    ],
  }

  export default previewList