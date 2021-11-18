import React from 'react'
import { graphql, Link } from 'gatsby'
// import get from 'lodash/get'

const RootIndex = ({ data }) => {
  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to="/products">Go to Products</Link>
      </p>
    </>
  )
}

// export const pageQuery = graphql`
// query ProductQuery {
//   allContentfulProduct {
//     nodes {
//       productName {
//         productName
//       }
//       productDescription {
//         productDescription
//       }
//     }
//   }
// }
// `

export default RootIndex