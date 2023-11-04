import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Products from './pages/store/Products'
import Cart from "./pages/cart/Cart";
import { ProductsContextProvider } from "./reducers/ContextReducer";
import AboutUs from "./pages/about/AboutUs";
import HomePage from "./pages/home/Home";


function App() {
  return (
    <Router>
      <ProductsContextProvider>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      
      </div>

      </ProductsContextProvider>
      
    </Router>
    
  );
}

export default App;
