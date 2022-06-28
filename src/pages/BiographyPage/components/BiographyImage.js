import React from 'react';
import PropType from 'prop-types';
import biographyMapping from '../../../helper/biographyMapping';
import '../sass/BiographyImage.scss';

const BiographyImage = ({ fullName, photo }) => {
  return (
    <img
      className="boxer-photo"
      alt={fullName}
      src={biographyMapping[photo]}
      /* eslint-disable-next-line no-console */
      onLoad={() => console.log(`Photo of ${fullName} has loaded successfully!`)}
      /* eslint-disable-next-line no-console */
      onError={() => console.log(`Error occurred with the photo of ${fullName}!`)}
    />
  );
};

BiographyImage.propTypes = {
  fullName: PropType.node.isRequired,
  photo: PropType.node.isRequired
};

export default BiographyImage;
