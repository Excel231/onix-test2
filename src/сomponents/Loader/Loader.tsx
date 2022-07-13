import React from 'react';
import './Loader.scss';
import PropType from 'prop-types';

interface Props {
  displayLoader: boolean
}

const Loader: React.FC<Props> = ({ displayLoader }) => {
  return (
    <div className={displayLoader ? 'lds-hourglass' : ''} />
  );
};

Loader.propTypes = {
  displayLoader: PropType.bool.isRequired
};

export default Loader;
