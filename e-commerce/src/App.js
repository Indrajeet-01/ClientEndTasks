import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Products from './pages/store/Products'
import Cart from "./pages/cart/Cart";
import { ProductsContextProvider } from "./reducers/ContextReducer";


function App() {
  return (
    <Router>
      <ProductsContextProvider>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      
      </div>

      </ProductsContextProvider>
      
    </Router>
    
  );
}

export default App;
