import axios from 'axios';
let apiKey = '33268326-bb3a299852ac950b9c9a6ecaa';

axios.defaults.baseURL = `https://pixabay.com/api/`;
//?q=${searchQuery.value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12
//pixabay.com/api/search?query=cats&page=1&key=33268326-bb3a299852ac950b9c9a6ecaa&image_type=photo&orientation=horizontal&per_page=12

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
