import React from 'react';
import css from './modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImage, tags, onClick }) => {
  const setCloseModal = event => {
    const hasClass = event.target.classList.contains(css.Overlay);
    if (hasClass) {
      onClick();
    }
  };

  return (
    <div className={css.Overlay} onClick={setCloseModal}>
      <div className={css.Modal}>
        {largeImage !== '' && <img src={largeImage} alt={tags} />}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  largeImage: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};
