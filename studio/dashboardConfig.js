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
                  buildHookId: '618e981fa1943ddc2ac24c68',
                  title: 'Sanity Studio',
                  name: 'testinf-sanity-portfolio-studio',
                  apiId: '60d1088f-ff42-4770-bba1-140c1061bf69'
                },
                {
                  buildHookId: '618e981fba58aaf1e3c498b8',
                  title: 'Portfolio Website',
                  name: 'testinf-sanity-portfolio',
                  apiId: '347682f7-be74-4995-874c-0c60512e1e5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sammytran90/testinf-sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://testinf-sanity-portfolio.netlify.app',
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
