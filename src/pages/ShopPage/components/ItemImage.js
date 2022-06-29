import React from 'react';
import PropType from 'prop-types';
import shopItemMapping from '../../../helper/shopItemMapping';
import '../sass/ItemImage.scss';

const ItemImage = ({
  image,
  name
}) => {
  return (
    <div className="photo-wrapper">
      <img className="item-photo" src={shopItemMapping[image]} alt={name} />
    </div>
  );
};

ItemImage.propTypes = {
  name: PropType.node.isRequired,
  image: PropType.node.isRequired
};

export default ItemImage;
