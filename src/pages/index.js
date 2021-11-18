import React from 'react'
import { graphql, Link } from 'gatsby'

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


export default RootIndex