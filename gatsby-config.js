/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});
// After code above, we can use our env var via process.env.MY_VAR_NAME
// console.log(`Connect to http server host: ${process.env.HTTP_SERVER_HOST}`);

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      // All paths prefixed by /app/ will render the route described in src/pages/app.js
      // All components inside <Router /> will not have static assets
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        disable: false, // Change to true to enable analyzer
      },
    },
  ],
};
