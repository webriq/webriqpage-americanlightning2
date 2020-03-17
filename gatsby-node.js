const path = require("path")
const slugify = require("slugify")

function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

function createSlug(text) {
  return slugify(text, {
    replacement: "-", // replace spaces with replacement
    remove: /[*+~.()'"!:@?]/g, // regex to remove characters
    lower: true, // result in lower case
  })
}

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const getSanityPost = makeRequest(
    graphql,
    `query {
       allSanityPost {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
              title
            }
          }
        }
    }
 `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allSanityPost.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug.current,
        component: path.resolve(`./src/templates/blog-template.js`),
        context: {
          id: post.node.id,
          slug: post.node.slug.current,
          previous,
          next,
        },
      })
    })
  })

  const getSanityEvent = makeRequest(
    graphql,
    `query {
      allSanityEvent {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
 `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const events = result.data.allSanityEvent.edges

    events.forEach((event, index) => {
      const previous =
        index === events.length - 1 ? null : events[index + 1].node
      const next = index === 0 ? null : events[index - 1].node

      createPage({
        path: event.node.slug.current,
        component: path.resolve(`./src/templates/event-template.js`),
        context: {
          id: event.node.id,
          slug: event.node.slug.current,
          previous,
          next,
        },
      })
    })
  })

  const categoryPage = makeRequest(
    graphql,
    `query {
      allSanityCategory {
        edges {
          node {
            title
          }
        }
      }
    }
 `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const cats = result.data.allSanityCategory.edges

    cats.map(cat =>
      createPage({
        path: slugify(cat.node.title.toLowerCase()),
        component: path.resolve(`./src/templates/category.js`),
        context: {
          title: cat.node.title,
        },
      })
    )
  })

  const productPage = makeRequest(
    graphql,
    `query {
      allSanityProduct(filter: {category: {elemMatch: {title: {ne: ""}}}}) {
        edges {
          node {
            id
            title
            slug{
              current
            }
            category {
              title
            }
          }
        }
      }
    }
 `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const products = result.data.allSanityProduct.edges

    products.map(prod =>
      createPage({
        path: prod.node.slug.current,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          id: prod.node.id,
          title: prod.node.title,
          category: prod.node.category[0].title,
        },
      })
    )
  })

  return Promise.all([getSanityPost, getSanityEvent, categoryPage, productPage])
}
