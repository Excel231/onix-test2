import React from 'react';
import PropType from 'prop-types';
import '../sass/ItemDescription.scss';

const ItemDescription = ({
  firmName, name, description, weight
}) => {
  return (
    <div>
      <h2>{`${firmName} - ${name}`}</h2>
      <h2>{`${weight} lbs`}</h2>
      <p className="item-description">{description}</p>
    </div>
  );
};

ItemDescription.propTypes = {
  firmName: PropType.node.isRequired,
  name: PropType.node.isRequired,
  description: PropType.node.isRequired,
  weight: PropType.node.isRequired
};

export default ItemDescription;
