import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ children, title, subtitle }) {
  return (
    <div>
      <div className='banner'>
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
