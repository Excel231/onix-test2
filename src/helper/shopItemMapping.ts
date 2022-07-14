import bodyFortressWheyProtein from '../images/products/bodyFortress/wheyProtein.jpg';
import dymatizeIso100 from '../images/products/dymatize/iso100.jpg';
import isopureLowCarbProtein from '../images/products/isopure/lowCarbProtein.jpg';
import isopureZeroCarbProtein from '../images/products/isopure/zeroCarbProtein.jpg';
import saschaIsolate from '../images/products/sascha/isolate.jpg';
import wheyGoldStandard from '../images/products/whey/goldStandard.jpg';

const shopItemMapping = () => {
  const result: {
    bodyFortressWheyProtein: string;
    dymatizeIso100: string
    isopureLowCarbProtein: string
    isopureZeroCarbProtein: string
    saschaIsolate: string
    wheyGoldStandard: string
  } = {
    bodyFortressWheyProtein,
    dymatizeIso100,
    isopureLowCarbProtein,
    isopureZeroCarbProtein,
    saschaIsolate,
    wheyGoldStandard
  };
  return result;
};

export default shopItemMapping();
