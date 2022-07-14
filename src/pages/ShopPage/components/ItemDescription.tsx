import React from 'react';
import '../sass/ItemDescription.scss';

interface Props {
    firmName: string;
    name: string;
    description: string;
    weight: string | number;
}

const ItemDescription: React.FC<Props> = ({
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

export default ItemDescription;
