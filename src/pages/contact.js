import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h2>Contact Us</h2>
    <p>#22/2, H.B.Samaja Road, Basavanagudi, Bangalore – 560004</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact