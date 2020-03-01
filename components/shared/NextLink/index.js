import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NextLink = ({ href, children, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      <a>{children}</a>
    </Link>
  );
};
NextLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
};

export default NextLink;
