
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

import { CloseModalBtn, ModalBackdrop, ModalContent } from './Modal.styled';
import { CarDetails } from '../СarDetails/CarDetails';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, data, country, city }) => {
// console.log("CARD:", data)

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}
    >
      <ModalContent>
        <CloseModalBtn onClick={closeModal} />
        <CarDetails data={data} country={country} city={city}/>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  )
};