import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return (
    <div className='section-title'>
      <h4>{title}</h4>
      <div />
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
