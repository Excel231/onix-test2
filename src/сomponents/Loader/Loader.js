import React from 'react';
import './Loader.scss';
import PropType from 'prop-types';

const Loader = ({ displayLoader }) => {
  return (
    <div className={displayLoader ? 'lds-hourglass' : ''} />
  );
};

Loader.propTypes = {
  displayLoader: PropType.bool.isRequired
};

export default Loader;
