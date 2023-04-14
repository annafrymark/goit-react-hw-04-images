import css from './imageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          webImage={image.webformatURL}
          largeImage={image.largeImageURL}
          tags={image.tags}
          showModal={showModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      webImage: PropTypes.string,
      largeImage: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  showModal: PropTypes.func,
};
