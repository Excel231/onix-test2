import React from 'react';
import Header from '../../сomponents/Header/Header';
import Footer from '../../сomponents/Footer/Footer';

const withLayout = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Header />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <WrappedComponent {...this.props} />
          <Footer />
        </>
      );
    }
  };
};

export default withLayout;
