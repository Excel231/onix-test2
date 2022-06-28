import React from 'react';
import withLayout from '../../HOC/withLayout/withLayout';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error-page-main-section">
      <h1 className="error-msg">
        Page is not found
        <br />
        404
      </h1>
    </div>
  );
};

export default withLayout(ErrorPage);
