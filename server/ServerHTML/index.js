import React from 'react';
import PropTypes from 'prop-types';
import { Head, Main, NextScript } from 'next/document';

import TemplateTags from './TemplateTags';

/**
 * The is the HTML shell for our React Application.
 */

function HTML(props) {
  const { htmlAttributes, headerElements, headerStyleTags, nonce } = props;

  return (
    <html lang="en" {...htmlAttributes}>
      <Head nonce={nonce}>
        {TemplateTags()}
        {headerElements}
        {headerStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </html>
  );
}

HTML.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: PropTypes.object,
  headerElements: PropTypes.node,
  headerStyleTags: PropTypes.array,
  nonce: PropTypes.string
};

HTML.defaultProps = {
  htmlAttributes: null,
  headerElements: null,
  headerStyleTags: null,
  nonce: ''
};

// EXPORT
export default HTML;
