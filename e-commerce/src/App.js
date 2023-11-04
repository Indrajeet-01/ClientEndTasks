import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Products from './pages/store/Products'


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Products/>} />
        </Routes>
      
      </div>
    </Router>
    
  );
}

export default App;
