import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const data = graphql`
query ($slug: String!){
    contentfulBlogPost(slug: {eq:  $slug}){
        title
        publishedDate
        body {
            content {
              content{
                value
              }
            }
          }
    }
  }
`

const Blog = (props) => {
    console.log(props)
    return (
    <Layout>
        <SEO title="Blog" />
    <h2>{props.data.contentfulBlogPost.title}</h2>
    <p>{props.data.contentfulBlogPost.publishedDate}</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default Blog