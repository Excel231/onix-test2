import React from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './withLayout.scss';
import { getThemeColorContext } from '../../layout/ThemeColorProvider/ThemeColorProvider';

const withLayout = (WrappedComponent) => {
  return () => {
    const darkThemeOn = getThemeColorContext() ?? true;
    return (
      <div className={`wrapper ${darkThemeOn ? 'dark-theme' : 'light-theme'}`}>
        <Header />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...WrappedComponent.props} />
        <Footer />
      </div>
    );
  };
};

export default withLayout;
