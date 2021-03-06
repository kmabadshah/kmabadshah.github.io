module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `KMA Badshah`,
    description: `Hi. My name is KMA Badshah. I am a full stack web and mobile developer with over 1 year of experience. `,
    author: `KMA Badshah`,
    url: `
https://kmabadshah.github.io/
`,
    image: `/images/image-self.jpg`,
    twitterUsername: `@kmabadshah`,
    siteUrl: `https://kmabadshah.github.io`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1338`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`experience`, `project`, `article`],
        //If using single types place them in this array.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
