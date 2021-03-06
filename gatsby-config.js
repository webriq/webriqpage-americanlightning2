const queries = require("./src/utils/algolia")
module.exports = {
  siteMetadata: {
    title: `American Lighting`,
    description: `American Lighting, Inc. manufactures a wide range of lighting solutions for your residential, commercial and specialty lighting needs.`,
    author: `@gatsbyjs`,
    siteUrl: `https://webriq-gatsby-cms-starter-template-sanity.webriq.me/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `300i`, `400`, `600`, `600i`],
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: "289N66N94S",
        apiKey: "4be67740186aa2b48aa0d61d1a5c1850",
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allSanityPost } }) => {
    //           return allSanityPost.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               title: edge.node.title,
    //               description: edge.node.excerpt,
    //               date: edge.node.publishedAt,
    //               url: site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
    //               guid:
    //                 site.siteMetadata.siteUrl + "/" + edge.node.slug.current,
    //               custom_elements: [{ "content:encoded": edge.node.body }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allSanityPost(
    //               sort: { order: ASC, fields: publishedAt }
    //             ) {
    //               edges {
    //                 node {
    //                   id
    //                   title
    //                   publishedAt
    //                   excerpt
    //                   slug {
    //                     current
    //                   }
    //                   body
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Gatsby + Sanity CMS",
    //       },
    //     ],
    //   },
    // },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "anbkks9g",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token: `sk5ybFcDE6crpliGhhwmhnst3tWfBwdJrNfceMnd13XQ2MouanIVMuItjdetOv3MpQJw710mDgL11Qah5FxCMzMfdzD4l39Lz5tZRB6OkHZGHVyPexn9MZLWVShA0eMDu005fMO949BpSo2jYEDHIk2ryR9wGfK2ErxnC1PVChDm204na2bx`,
        watchMode: true,
        overlayDrafts: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Sanity CMS Template`,
    //     short_name: `sanitytemplate`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
  ],
}
