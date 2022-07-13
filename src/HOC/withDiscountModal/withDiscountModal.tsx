import React from 'react';
import DiscountModal from '../../сomponents/DisocuntModal/DiscountModal';

const withDiscountModal = (WrappedComponent: React.FC) => {
  return (props: any) => {
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
