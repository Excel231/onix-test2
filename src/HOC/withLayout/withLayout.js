import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './withLayout.scss';

const withLayout = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div className="wrapper">
          <Header />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      );
    }
  };
};

export default withLayout;
