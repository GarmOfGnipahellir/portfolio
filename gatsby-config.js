require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Henrik Melsom`,
    // Default title of the page
    siteTitleAlt: `Henrik Melsom - Tech Art`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Henrik Melsom - Techie Artsy`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://henrikmelsom.com`,
    // Used for SEO
    siteDescription: `Showcase page for tech artist Henrik Melsom.`,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        projectsUrl: "/",
        navigation: [
          { name: `Showcases`, slug: `/` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `4058597312`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Henrik Melsom - Tech Art`,
        short_name: `Henrik Melsom`,
        description: `Showcase page for tech artist Henrik Melsom.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
