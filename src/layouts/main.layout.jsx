import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// @ts-ignore
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.scss';

// eslint-disable-next-line react/prop-types
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle || data?.site?.siteMetadata?.title}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
