export   const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  document.body.addEventListener('click', handleBackdropClick)