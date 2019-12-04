export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de7addb80933698c28d991c',
                  title: 'Sanity Studio',
                  name: 'bournemouth-big-band-swing-and-jazz-club-studio',
                  apiId: 'cec30e9e-bcaf-44f7-8458-83000ba7d0dc'
                },
                {
                  buildHookId: '5de7addb0b692912d38f766a',
                  title: 'Blog Website',
                  name: 'bournemouth-big-band-swing-and-jazz-club',
                  apiId: '8309c007-b7dc-4473-b055-89b1a42b9f46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/bournemouth-big-band-swing-and-jazz-club',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bournemouth-big-band-swing-and-jazz-club.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
