import React from 'react';
import shopItemMapping from '../../../helper/shopItemMapping';
import '../sass/ItemImage.scss';

interface Props {
  name: string;
  image: string;
}

const ItemImage: React.FC<Props> = ({
  image,
  name
}) => {
  return (
    <div className="photo-wrapper">
      <img className="item-photo" src={shopItemMapping[image as keyof typeof shopItemMapping]} alt={name} />
    </div>
  );
};

export default ItemImage;
