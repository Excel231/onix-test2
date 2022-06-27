import React from 'react';
import PropType from 'prop-types';

const CustomPersonParameter = ({ children, setParameter }) => {
  return (
    <li>
      <h3>{children}</h3>
      <input type="text" onChange={(e) => setParameter(e.target.value)} />
    </li>
  );
};

CustomPersonParameter.propTypes = {
  children: PropType.node.isRequired,
  setParameter: PropType.func.isRequired
};

export default CustomPersonParameter;
