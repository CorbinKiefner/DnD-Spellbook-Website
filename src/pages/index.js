// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <hr></hr>
      <p>Welcome to your very own spellbook.</p>
      <StaticImage
        alt="A wizards spellbook, open for you to read."
        src="C:\Users\corbi\Desktop\496Final\src\images\Spellbook.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

// Step 3: Export your component
export default IndexPage