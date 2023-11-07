import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import  { CartProvider } from "./context/store";
import { AuthProvider, useAuth } from "./context/auth";
import Header from "./components/header/Header";



import AboutUs from "./pages/about/AboutUs";
import HomePage from "./pages/home/Home";
import ContactUs from "./pages/contact/ContactUs";
import Cart from "./pages/cart/Cart";
import Products from './pages/products/Products'
import ProductDetail from "./pages/productDetail/ProductDetail";
import UserAuth from "./pages/userAuth/UserAuth";


const products = [
  {
    id: 1,
    name: 'Denim Jacket',
    price: 19.99,
    description: 'most demanding aqua blue denim jacket for men.',
    rating: 4.5,
    category: 'Clothes',
    stock: 10,
    images: [
      'https://5.imimg.com/data5/NR/ON/MY-57009823/men-27s-denim-jackets.jpg',
      'https://data.glamood.com/imgprodotto/denim-nhill-tw-jacket_922576_zoom.jpg',
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
    name: 'Blue Jeans',
    price: 24.99,
    description: 'blue stylish jeans for men',
    rating: 3.8,
    category: 'Clothes',
    stock: 5,
    images: [
      'https://assets.ajio.com/medias/sys_master/root/20210923/ovv7/614b7854f997ddce89d75509/-473Wx593H-469009841-blue-MODEL.jpg',
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
    name: 't-shirt',
    price: 29.99,
    description: 'modal sports t-shirt ',
    rating: 4.2,
    category: 'Clothes',
    stock: 15,
    images: [
      'https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077',
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
    name: 'Trouser',
    price: 14.99,
    description: 'adidas sports trouser ',
    rating: 4.0,
    category: 'Sports wear',
    stock: 7,
    images: [
      'https://assets.ajio.com/medias/sys_master/root/20221208/YiJR/6391c089aeb269659cde0f34/-473Wx593H-469211195-silver-MODEL.jpg',
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
    name: 'Hoody',
    price: 39.99,
    description: 'latest light blue hoody give a dashing look',
    rating: 4.8,
    category: 'Clothes',
    stock: 0,
    images: [
      'https://images.macmerise.com/product/hoodies/chmsh6whateverittakes.jpg',
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
    name: 'Sneakers',
    price: 22.50,
    description: 'nike white sneakers for sports',
    rating: 3.7,
    category: 'Footwear',
    stock: 8,
    images: [
      'https://www.campusshoes.com/cdn/shop/products/CAMPDENVER_TRIPLEWHT_1200x1200.jpg?v=1670325511',
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
      <AuthProvider>
        
        <CartProvider >
      <div className="App">
         <Header/> 
      
        <Routes>
          <Route path="/" element={<UserAuth/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/about" element={<AboutUs/>} />
          
        </Routes>
      
      </div>

      </CartProvider>
      </AuthProvider>
      
      
    </Router>
    
  );
}

export default App;
