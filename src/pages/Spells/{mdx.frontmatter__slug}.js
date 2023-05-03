import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from 'C:/Users/corbi/Desktop/496Final/src/components/layout.js'
import Seo from 'C:/Users/corbi/Desktop/496Final/src/components/seo.js'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <hr></hr>

      <em><p>{data.mdx.frontmatter.level}</p></em>
      <p><strong>Casting Time:</strong> {data.mdx.frontmatter.castingtime}</p>
      <p><strong>Range:</strong> {data.mdx.frontmatter.range}</p>
      <p><strong>Components:</strong> {data.mdx.frontmatter.components}</p>
      <p><strong>Duration:</strong> {data.mdx.frontmatter.duration}</p>

      <hr></hr>

      <p>{data.mdx.frontmatter.description}</p>
      <em><p>{data.mdx.frontmatter.levelinfo}</p></em>

      <hr></hr>
      
      <p>Spell lists: {data.mdx.frontmatter.lists}</p>
      <p>Source: {data.mdx.frontmatter.source}</p>

      <hr></hr>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        slug
        level
        castingtime
        range
        components
        duration
        description
        levelinfo
        lists
        source
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost