// import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

 export const Modal = ({children
    
}

    // { children, onClose }
    ) => {
//   const handleBackdropClick = (event) => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };

//     useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//     }, [onClose]);
  
  return (
    <ModalBackdrop 
    // onClick={handleBackdropClick}
    >
      <ModalContent>
        {children}
      </ModalContent>
    </ModalBackdrop>
   
  )
};