import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from 'C:/Users/corbi/Desktop/496Final/src/components/layout.js'
import Seo from 'C:/Users/corbi/Desktop/496Final/src/components/seo.js'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost