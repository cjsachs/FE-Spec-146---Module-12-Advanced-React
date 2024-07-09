import axios from "axios";

// fetching to api
export const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log('fetching')
      return response.data;
    } catch (err) {
      console.log(err);
    }
};

// posting to api
export const addProduct = async ({ title, price, description, image, category }) => {
  const response = await axios.post('https://fakestoreapi.com/products', {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  return response.data;
};