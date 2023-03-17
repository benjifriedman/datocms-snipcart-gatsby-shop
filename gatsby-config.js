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
        publicApiKey:
          "OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1",
        autopop: true,
      },
    },
  ],
};
