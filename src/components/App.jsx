import React, { useState } from 'react';
import css from './styles.module.css';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { fetchImagesWithQuery } from '../utils/GetImage.js';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [inputValue, setInputValue] = useState('');

  let page = 1;

  const getImagesData = async inputValue => {
    setIsLoading(true);
    try {
      let moreImages = await fetchImagesWithQuery(inputValue, page);
      moreImages = images.concat(moreImages);
      setImages(moreImages);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchForImages = async inputValue => {
    page = 1;
    setImages([]);
    setInputValue(inputValue);
    getImagesData(inputValue);
  };

  const loadMore = async () => {
    page = page + 1;
    getImagesData(inputValue);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const escapeModal = event => {
    if (modalContent !== null && event.key === 'Escape') {
      closeModal();
    }
  };

  const showModal = modalContent => {
    setModalContent(modalContent);
  };

  return (
    <div className={css.App} onKeyDown={escapeModal} tabIndex={-1}>
      <Searchbar onSubmit={searchForImages} />

      {error && <p>Something went wrong: {error.message}</p>}
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} showModal={showModal} />
      )}
      {modalContent !== null && (
        <Modal
          largeImage={modalContent.largeImage}
          tags={modalContent.tags}
          onClick={closeModal}
        />
      )}

      {!isLoading && images.length > 0 && <Button onClick={loadMore} />}
    </div>
  );
};

export default App;
