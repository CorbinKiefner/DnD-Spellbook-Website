import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <hr></hr>
      <p>Welcome to your very own spellbook. This website is made for you
        to browse the various spells of Dungeons & Dragons. This website is 
        meant to be purely informational, and will eventually allow the user to
        manage their characters spellbook, research lore, and take character notes.
        I hope you find it useful!
      </p>
      <StaticImage
        alt="A wizards spellbook, open for you to read."
        src="C:\Users\corbi\Desktop\496Final\src\images\Spellbook.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage