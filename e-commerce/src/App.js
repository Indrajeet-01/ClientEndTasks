import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { CartProvider } from "./store";
import Header from "./components/header/Header";



import AboutUs from "./pages/about/AboutUs";
import HomePage from "./pages/home/Home";
import ContactUs from "./pages/contact/ContactUs";
import Cart from "./pages/cart/Cart";
import Products from './pages/products/Products'
import ProductDetail from "./pages/productDetail/ProductDetail";

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.5,
    category: 'Electronics',
    stock: 10,
    images: [
      'product1-image1.jpg',
      'product1-image2.jpg',
    ],
    reviews: [
      {
        author: 'User 1',
        rating: 5,
        text: 'Great product!'
      },
      {
        author: 'User 2',
        rating: 4,
        text: 'Good value for the price.'
      }
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    price: 24.99,
    description: 'Suspendisse potenti. Nulla accumsan.',
    rating: 3.8,
    category: 'Clothing',
    stock: 5,
    images: [
      'product2-image1.jpg',
      'product2-image2.jpg',
    ],
    reviews: [
      {
        author: 'User 3',
        rating: 3,
        text: "It's okay, but the sizing is off."
      }
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.2,
    category: 'Electronics',
    stock: 15,
    images: [
      'product3-image1.jpg',
      'product3-image2.jpg',
    ],
    reviews: [
      {
        author: 'User 4',
        rating: 4,
        text: 'Nice product!'
      },
      {
        author: 'User 5',
        rating: 4.5,
        text: 'Impressive quality.'
      }
    ],
  },
  {
    id: 4,
    name: 'Product 4',
    price: 14.99,
    description: 'Aenean ac elit mauris.',
    rating: 4.0,
    category: 'Furniture',
    stock: 7,
    images: [
      'product4-image1.jpg',
      'product4-image2.jpg',
    ],
    reviews: [
      {
        author: 'User 6',
        rating: 3.5,
        text: 'Not the best quality.'
      }
    ],
  },
  {
    id: 5,
    name: 'Product 5',
    price: 39.99,
    description: 'Vivamus tristique malesuada odio.',
    rating: 4.8,
    category: 'Electronics',
    stock: 12,
    images: [
      'product5-image1.jpg',
      'product5-image2.jpg',
    ],
    reviews: [
      {
        author: 'User 7',
        rating: 5,
        text: 'Amazing product!'
      },
      {
        author: 'User 8',
        rating: 4.7,
        text: 'Highly recommended.'
      }
    ],
  },
  {
    id: 6,
    name: 'Product 6',
    price: 22.50,
    description: 'In hac habitasse platea dictumst.',
    rating: 3.7,
    category: 'Clothing',
    stock: 8,
    images: [
      'product6-image1.jpg',
      'product6-image2.jpg',
    ],
    reviews: [
      {
        author: 'User 9',
        rating: 4.2,
        text: 'Decent quality.'
      },
      {
        author: 'User 10',
        rating: 4.0,
        text: 'Not bad for the price.'
      }
    ],
  },
];


function App() {
  return (
    <Router>
      <CartProvider >
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      
      </div>

      </CartProvider>
      
    </Router>
    
  );
}

export default App;
