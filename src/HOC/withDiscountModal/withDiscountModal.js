import React from 'react';
import DiscountModal from '../../сomponents/DisocuntModal/DiscountModal';

const withDiscountModal = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
        <DiscountModal />
      </>
    );
  };
};

export default withDiscountModal;
