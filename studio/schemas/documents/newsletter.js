import { format } from 'date-fns'

export default {
  name: 'newsletter',
  type: 'document',
  title: 'Newsletters',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This should be your headline'
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
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
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
      slug: 'slug'
    },
    prepare({ title = 'No title', publishedAt, slug = {} }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
