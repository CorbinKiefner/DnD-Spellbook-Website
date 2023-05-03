import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from 'C:/Users/corbi/Desktop/496Final/src/components/layout.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="3rd Level Spells">
      
      <hr></hr>
      <ul className={navLinks}>
        <li className={navLinkItem}>
            <Link to="/Spells/0th" className={navLinkText}>
              Cantrips
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/1st" className={navLinkText}>
              1st Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/2nd" className={navLinkText}>
              2nd Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/3rd" className={navLinkText}>
              3rd Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/4th" className={navLinkText}>
              4th Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/5th" className={navLinkText}>
              5th Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/6th" className={navLinkText}>
              6th Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/7th" className={navLinkText}>
              7th Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/8th" className={navLinkText}>
              8th Lvl
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/Spells/9th" className={navLinkText}>
              9th Lvl
            </Link>
          </li>
        </ul>

      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <hr></hr>
            <h2>
              <Link to={`/Spells/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.excerpt}</p>
            <hr></hr>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {title: ASC}}) {
        nodes {
          frontmatter {
            title
            slug
            level
          }
          id
          excerpt
        }
      }
  }
`

export const Head = () => <Seo title="Spells" />

export default BlogPage