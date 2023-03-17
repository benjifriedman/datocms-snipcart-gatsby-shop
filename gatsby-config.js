require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "Benji Friedman Shop",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "e8787cf6edac08b2ee99318722bd5e",
      },
    },
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        publicApiKey: "0b687e83847ac890e44cf2177f0bc2",
        autopop: true,
      },
    },
  ],
};
