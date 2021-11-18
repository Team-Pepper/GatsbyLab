import React from 'react'
import { graphql } from 'gatsby'

const Product = ({ data }) => {

  const product = data.contentfulProduct;

  return (
    <div>
      {product.productName.productName}
    </div>
  )
}

export const productQuery = graphql `
query Query (
    $slug: String!
  )
  {
    contentfulProduct(slug: {eq: $slug}) {
      id
      productName {
        productName
      }
      productDescription {
        productDescription
      }
    }
}
`
export default Product
