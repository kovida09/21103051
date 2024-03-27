// // api.js
// import axios from 'axios';

// const API_BASE_URL = 'http://20.244.56.144';

// const ACCESS_CODE = 'zpKKbc'; // Replace 'YOUR_ACCESS_CODE_HERE' with your actual access code

// const getProducts = async (category, company, rating, priceRange, availability, sortBy, sortOrder, page, pageSize) => {
//     const params = new URLSearchParams({
//         category,
//         company,
//         rating,
//         priceRange,
//         availability,
//         sortBy,
//         sortOrder,
//         page,
//         pageSize,
//         accessCode: ACCESS_CODE // Include access code as a parameter
//     });
//     const response = await axios.get('${API_BASE_URL}/products?${params}');
//     return response.data;
// };

// const getProductById = async (productId) => {
//     const params = new URLSearchParams({
//         accessCode: ACCESS_CODE // Include access code as a parameter
//     });
//     const response = await axios.get('${API_BASE_URL}/products/${productId}?${params}');
//     return response.data;
// };

// export { getProducts, getProductById };

// api.js
// api.js
import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test/register'; // Replace with your actual API base URL
const ACCESS_CODE = 'zpKKbc'; // Access code variable

// Function to fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      headers: {
        Authorization: `Bearer ${ACCESS_CODE}` // Include access code in the headers
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Function to fetch a specific product by ID
export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_CODE}` // Include access code in the headers
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
