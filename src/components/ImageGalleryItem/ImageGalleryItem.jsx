import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webImage, largeImage, tags, showModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        showModal({ largeImage: largeImage, tags: tags });
      }}
    >
      <img src={webImage} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string,
  largeImage: PropTypes.string,
  tags: PropTypes.string,
  showModal: PropTypes.func,
};