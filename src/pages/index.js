// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to your very own spellbook.</p>
      <StaticImage
        alt="A wizards spellbook, open for you to read."
        src="C:\Users\corbi\Desktop\496Final\src\images\Spellbook.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage