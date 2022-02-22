module.exports = {
    siteMetadata: {
      title: "Naruto - The hokage",
    },
    plugins: [
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-embed-snippet`,
              options: {
                directory: `${__dirname}/snippets/`
              },
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {},
            },
          ],
        },
      },
      
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
    ],
  };