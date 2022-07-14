import React from 'react';
import biographyMapping from '../../../helper/biographyMapping';
import '../sass/BiographyImage.scss';

interface Props {
  fullName: string;
  photo: string;
}

const BiographyImage: React.FC<Props> = ({ fullName, photo }) => {
  return (
    <img
      className="boxer-photo"
      alt={fullName}
      src={biographyMapping[photo as keyof typeof biographyMapping]}
      /* eslint-disable-next-line no-console */
      onLoad={() => console.log(`Photo of ${fullName} has loaded successfully!`)}
      /* eslint-disable-next-line no-console */
      onError={() => console.log(`Error occurred with the photo of ${fullName}!`)}
    />
  );
};

export default BiographyImage;
