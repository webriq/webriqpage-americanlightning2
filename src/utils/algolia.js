const postQuery = `{
  allSanityProduct {
    edges {
      node {
        id
        title
        description
        slug {
          current
        }
      }
    }
  }
}`
// const flatten = arr =>
//   arr.map(({ node: { ...rest } }) => ({
//     ...rest,
//   }))
// const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.allSanityProduct.edges,
    indexName: `products`,
    // settings,
  },
]
module.exports = queries
