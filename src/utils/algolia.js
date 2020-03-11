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
          quickSpecs {
            _key
            series
            voltage
            cct {
              _key
              cct
              color {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
            cri
            wattage
            lumens
            maxRun
            cuttable
            ipRating
            dimmable
            rating
            ratedLife
          }
          productDetails
          orderingInfo {
            _key
            title
            body
            limited
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
