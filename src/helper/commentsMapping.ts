import arnold from '../images/commentator-photos/arnold.jpg';
import dwayne from '../images/commentator-photos/dwayne.jpg';
import jax from '../images/commentator-photos/jax.jpg';
import khalimov from '../images/commentator-photos/khalimov.jpg';

const commentsMapping = () => {
  const result: {
    arnold: string;
    dwayne: string;
    jax: string;
    khalimov: string;
  } = {
    arnold,
    dwayne,
    jax,
    khalimov
  };
  return result;
};

export default commentsMapping();
