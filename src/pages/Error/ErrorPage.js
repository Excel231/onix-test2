import React from 'react';
import { useTranslation } from 'react-i18next';
import withLayout from '../../HOC/withLayout/withLayout';
import './ErrorPage.scss';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className="error-page-main-section">
      <h1 className="error-msg">
        {t('pageNotFound')}
      </h1>
    </div>
  );
};

export default withLayout(ErrorPage);
