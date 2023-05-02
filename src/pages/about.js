// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About the site">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby. This website is 
        made for individuals who love to play Dungeons & Dragons, but hate not having all of their
        spells in one place. Lucky for you, this is that place! Here, you will be able to search through
        every spell in the game and sort through them in various ways that suit your needs. Good luck!</p>
    </Layout>
  )
}

export const Head = () => <title>About The Spellbook</title>

// Step 3: Export your component
export default AboutPage