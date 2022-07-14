import bryan from '../images/boxer-photos/Bryan.jpg';
import fury from '../images/boxer-photos/Fury.jpg';
import usyk from '../images/boxer-photos/Usyk.jpg';
import briedis from '../images/boxer-photos/Briedis.jpg';
import tyson from '../images/boxer-photos/Tyson.jpg';
import klitchko from '../images/boxer-photos/Klitschko.jpg';
import defaultImage from '../images/boxer-photos/Default.jpg';

const biographyMapping = () => {
  const result: {
    bryan: string;
    fury: string;
    usyk: string;
    briedis: string;
    tyson: string;
    klitchko: string;
    defaultImage: string;
  } = {
    bryan,
    fury,
    usyk,
    briedis,
    tyson,
    klitchko,
    defaultImage
  };
  return result;
};

export default biographyMapping();
