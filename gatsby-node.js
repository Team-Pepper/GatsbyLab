const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const productPage = path.resolve('./src/templates/product.js')

  const result = await graphql(
    `
      {
        allContentfulProduct {
          nodes {
            productName {
              productName
            }
            productDescription {
              productDescription
            }
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const products = result.data.allContentfulProduct.nodes;
  console.log(products[0].slug);

  if (products.length > 0) {
    products.forEach((product, index) => {

      createPage({
        path: `/products/${product.slug}`,
        component: productPage,
        context: {
          slug: product.slug,
        },
      })
    })
  }
}

