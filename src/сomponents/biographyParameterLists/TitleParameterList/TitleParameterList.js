import React from 'react';
import '../../../styles.css';
import PropType from 'prop-types';
import './styles.css';
import BoxerParameterButton from '../../buttons/BoxerParameterButton/BoxerParameterButton';

function TitleParameterList({ sortOnClick }) {
  return (
    <ul className="biography-ul">
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => {}}>
          Photo
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('fullName')}>
          Full Name
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('birthYear')}>
          Birth Year
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('weight')}>
          Weight
        </BoxerParameterButton>
      </li>
      <li className="biography-li belt">
        <BoxerParameterButton handleClick={() => sortOnClick('belts')}>
          Year - Belts
        </BoxerParameterButton>
      </li>
    </ul>
  );
}

TitleParameterList.propTypes = {
  sortOnClick: PropType.func.isRequired,

};

export default TitleParameterList;
