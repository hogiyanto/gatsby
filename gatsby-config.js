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
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-typescript"],
};
