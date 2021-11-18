import React from 'react'
import { graphql, Link } from 'gatsby'

const Products = ({ data }) => {
  return (
    <>
      <h1>Products</h1>
      {data.allContentfulProduct.nodes.map(p => {
        return (
          <div>
            <Link to={`/products/${p.slug}`}>
              <h2>{p.productName.productName}</h2>
              <p>{p.productDescription.productDescription}</p>
            </Link>
          </div>
        )}
      )}
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
    </>
  )
}

export const pageQuery = graphql`
query ProductQuery {
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

export default Products