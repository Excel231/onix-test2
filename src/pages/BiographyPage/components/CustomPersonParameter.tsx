import React from 'react';
import '../sass/CustomPersonParameter.scss';

interface Props {
  children: string;
  setParameter: (parameter: string) => void;
}

const CustomPersonParameter: React.FC<Props> = ({ children, setParameter }) => {
  return (
    <li>
      <label htmlFor="parameter"><h3 className="parameter">{children}</h3></label>
      <input type="text" onChange={(e) => setParameter(e.target.value)} />
    </li>
  );
};

export default CustomPersonParameter;
