import React from 'react'
import { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

const Product = ({ data }) => {

  const product = data.contentfulProduct;
 
  const { results, setResults } = useState();

  useEffect(() => {
    fetch('http://localhost:8888/.netlify/functions/sayHello')
      .then(res => res.json())
      .then(d => setResults(d))
      .catch(err => console.log(err))
    }, [])
    
  console.log(results)

  return (
    <div>
      {/* {product.productName.productName} */}
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
