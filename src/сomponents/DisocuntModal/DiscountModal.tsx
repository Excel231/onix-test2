import React from 'react';
import './DiscountModal.scss';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import hideDiscountModal from '../../store/discountModal/discountModalActions';
import BigRedLinkButton from '../buttons/BigRedLinkButton/BigRedLinkButton';

interface SelectorProps {
  discountModalReducer: {
    discountModalVisible: boolean;
  }
}

const DiscountModal = () => {
  const discountModalIsVisible = useSelector((
    { discountModalReducer }: SelectorProps
  ) => discountModalReducer.discountModalVisible);

  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(hideDiscountModal());
  };

  const { t } = useTranslation('', { keyPrefix: 'discountModal' });

  Aos.init();

  return (
    <div className={discountModalIsVisible ? 'modal-wrapper' : 'hidden'}>
      <div className="modal-wrapper-content" data-aos="zoom-in">
        <button className="closing-btn" type="button" onClick={hideModal}>x</button>
        <h2>{t('discountEnd')}</h2>
        <p>{t('hurryUpText')}</p>
        <button className="shop-btn" type="button" onClick={hideModal}>
          <BigRedLinkButton path="/shop">
            <strong>{t('modalShopPageText')}</strong>
          </BigRedLinkButton>
        </button>
      </div>
    </div>
  );
};

export default DiscountModal;
