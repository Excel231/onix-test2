import React from 'react';
import '../../../styles.css';
import PropType from 'prop-types';
import ParameterList from '../ParameterList/ParameterList';
import './styles.css';

function TitleParameterList({ sortOnClick }) {
  return (
    <ul className="biography-ul">
      <li className="biography-li">Photo</li>
      <li className="biography-li" onClick={() => sortOnClick('fullName')}>Full Name</li>
      <li className="biography-li" onClick={() => sortOnClick('birthYear')}>Birth Year</li>
      <li className="biography-li" onClick={() => sortOnClick('weight')}>Weight</li>
      <li className="biography-li belt" onClick={() => sortOnClick('belts')}>Year - Belts</li>
    </ul>
  );
}

ParameterList.propTypes = {
  sortOnClick: PropType.func.isRequired,

};

export default TitleParameterList;
