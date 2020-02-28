import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NextLink = ({ href, children }) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
NextLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
};

export default NextLink;
