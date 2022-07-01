import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import './withLayout.scss';
import { useThemeColorContext } from '../context/ThemeColorProvider';

const withLayout = (WrappedComponent) => {
  return (props) => {
    const darkThemeOn = useThemeColorContext() ?? true;
    return (
      <div className={`wrapper ${darkThemeOn ? 'dark-theme' : 'light-theme'}`}>
        <Header />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default withLayout;
