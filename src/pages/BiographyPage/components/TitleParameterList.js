import React from 'react';
import '../../../styles.scss';
import PropType from 'prop-types';
import '../sass/TitleParameterList.scss';
import BoxerParameterButton from '../../../сomponents/buttons/BoxerParameterButton/BoxerParameterButton';

const TitleParameterList = ({ sortOnClick }) => {
  return (
    <ul className="biography-ul">
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => {}}>
          <h3>Photo</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('fullName')}>
          <h3>Full Name</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('birthYear')}>
          <h3>Birth Year</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li">
        <BoxerParameterButton handleClick={() => sortOnClick('weight')}>
          <h3>Weight</h3>
        </BoxerParameterButton>
      </li>
      <li className="biography-li belt">
        <BoxerParameterButton handleClick={() => sortOnClick('belts')}>
          <h3>Year - Belts</h3>
        </BoxerParameterButton>
      </li>
    </ul>
  );
};

TitleParameterList.propTypes = {
  sortOnClick: PropType.func.isRequired,

};

export default TitleParameterList;
