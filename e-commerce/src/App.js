import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/header/Header";
import Products from './pages/products/Products'
import Cart from "./pages/cart/Cart";

import AboutUs from "./pages/about/AboutUs";
import HomePage from "./pages/home/Home";
import ContactUs from "./pages/contact/ContactUs";
import ProductDetail from "./pages/productDetail/ProductDetail";


function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      
      </div>

      </Provider>
      
    </Router>
    
  );
}

export default App;
