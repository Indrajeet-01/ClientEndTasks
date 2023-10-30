import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import { CartProvider } from "./components/reducers/ContextReducer";



function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header/>
        <main>
          <Menu/>
        </main>
        <Footer/>
      </CartProvider>
      
    </div>
  );
}

export default App;
