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
        apiToken: process.env.DATO_READONLY_API_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        publicApiKey: process.env.SNIPCART_PUBLIC_API_KEY,
        autopop: true,
      },
    },
  ],
};
