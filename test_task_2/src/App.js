
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./pages/menu/Menu";
import { CartProvider } from "./reducers/ContextReducer";
import Cart from "./pages/cart/Cart";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
        <Footer/>
      </CartProvider>
      
    </div>

    </Router>
    
  );
}

export default App;
