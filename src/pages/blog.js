import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost{
        edges{
          node{
            title
            publishedDate
            slug
            body {
              content {
                content{
                  value
                }
              }
            }
            
          }
        }
      }
    }
   
  `)
  console.log(data)
    return (

    <Layout>
        <SEO title="Blog" />
        <h2>Welcome to blog</h2>
        <p>Blogs ({data.allContentfulBlogPost.edges.length})</p>
        <ol>
            {data.allContentfulBlogPost.edges.map((art,i) => {
                return <li key={i}>
                    <Link to={`/blog/${art.node.slug}`}>
                     <h2>Title: {art.node.title}</h2>
                    </Link>
                    <p>Published on: {art.node.publishedDate}</p>
                    <p dangerouslySetInnerHTML={{__html: art.node.body.value}}></p>
                </li>
            })}
        </ol>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
    )
}

export default BlogPage

// query {
//   allMarkdownRemark{
//     edges{
//       node{
//         frontmatter{
//           title
//           date
//         }
//         html
//       }
      
//     }
//   }
// }