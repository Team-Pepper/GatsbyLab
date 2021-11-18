import React from 'react'
import { graphql } from 'gatsby'

const Product = ({ data }) => {

  const product = data.contentfulProduct;
  const results = fetch('http://localhost:8888/.netlify/functions/sayHello').then(res => res.json()).then(data => data).catch(err => console.log(err))
  console.log(results)

  return (
    <div>
      {product.productName.productName}
      {results.message}
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
