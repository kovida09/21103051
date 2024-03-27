// // AllProductsPage.js
// AllProductsPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from './api'; // Import API function to fetch all products

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from API
    getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="AllProductsPage">
      <h1>All Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllProductsPage; // Export AllProductsPage as the default export



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllProducts } from './api'; // Import API function to fetch all products

// function AllProductsPage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch all products from API
//     getProducts()
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   return (
//     <div className="AllProductsPage">
//       <h1>All Products</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <Link to={`/product/${product.id}`}>{product.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default AllProductsPage;
// // ProductDetailsPage.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProductById } from './api'; // Import getProductById function from api.js

// function ProductDetailsPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details by productId
//     getProductById(productId)
//       .then(data => setProduct(data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [productId]);

//   return (
//     <div className="ProductDetailsPage">
//       {/* Display product details */}
//       {product && (
//         <div>
//           <h2>{product.name}</h2>
//           {/* Display other product details */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductDetailsPage;

