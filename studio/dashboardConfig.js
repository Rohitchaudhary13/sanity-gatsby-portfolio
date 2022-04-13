export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '625700c4881a0a0b02a4ee54',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jodxswf8',
                  apiId: '3a4d5f2b-d9f4-4c45-af93-56171b8c58fd'
                },
                {
                  buildHookId: '625700c4cd308c0419d3ef78',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bqqsom9v',
                  apiId: 'dcf09752-5a21-4125-9383-e1e74aa6a4a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rohitchaudhary13/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bqqsom9v.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
