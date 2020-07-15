import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  // const {title,author} = useStaticQuery(graphql 
  //   `query {
  //     site {
  //       siteMetadata{
  //         title
  //       }
  //     }
  //   }`
    // )
    return (
      <Layout>
        <SEO title="DCT Academy" />
        <Link to="/blog">Blog</Link>  || <Link to="/page-2/">Go to page 2</Link> || <Link to="/contact">Contact</Link><br />
    <h1>Home Page</h1>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
    </Layout>
    )
  }

export default IndexPage
