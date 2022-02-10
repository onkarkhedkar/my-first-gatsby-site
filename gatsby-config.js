require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Hello Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `gatsby`,
        remote: `https://bhargav-coditas:${process.env.GITHUB_TOKEN}@github.com/bhargav-coditas/gatsby`,
        branch: 'docs',
        local: `${__dirname}/blog/`,
      },
    },
  ],
};
