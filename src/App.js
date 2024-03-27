// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import AllProductsPage from './AllProductsPage';
// import ProductDetailsPage from './ProductDetailsPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={AllProductsPage} />
//           <Route path="/product/:productId" component={ProductDetailsPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllProductsPage from './AllProductsPage';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Route for displaying all products */}
          <Route path="/" exact component={AllProductsPage} />

          {/* Route for displaying product details */}
          <Route path="/product/:productId" component={ProductDetailsPage} />

          {/* Add more routes if needed */}
          {/* <Route path="/about" component={AboutPage} /> */}
          {/* <Route path="/contact" component={ContactPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
