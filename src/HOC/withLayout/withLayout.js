import React from 'react';
import Header from '../../сomponents/Header/Header';
import Footer from '../../сomponents/Footer/Footer';

const withLayout = (WrappedComponent) => {
  return (
    <>
      <Header />
      {WrappedComponent}
      <Footer />
    </>
  );
};

export default withLayout;
