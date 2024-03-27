// ProductDetailsPage.js

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

// ProductDetailsPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './api'; // Import getProductById function from api.js

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details by productId
    getProductById(productId)
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      {/* Display product details */}
      {product && (
        <div>
          <h2>{product.name}</h2>
          {/* Display other product details */}
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
