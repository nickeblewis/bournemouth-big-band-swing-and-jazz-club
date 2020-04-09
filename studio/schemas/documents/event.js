import {format} from 'date-fns'

export default {
  name: 'event',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Your event title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Most of the time clicking generate will create this for you and its based on the title',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      title: 'Newsletter PDF',
      name: 'newsletter',
      type: 'file',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title'}) {
      return {
        title
      }
    }
  }
}
