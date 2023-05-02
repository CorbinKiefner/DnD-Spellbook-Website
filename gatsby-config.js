module.exports = {
  siteMetadata: {
    title: "Dungeons & Dragons Spellbook",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `Spellbook`,
        path: `${__dirname}/Spellbook`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};