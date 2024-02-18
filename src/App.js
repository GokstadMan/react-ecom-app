import{Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Productpage from "./pages/Productpage";
import ProductsPage from "./pages/ProductsPage";
import CartContext from "./components/Context/CartContext";
import { useState } from "react";




function App() {

  const [cart,setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={[cart,setCart]}>
          <Navbar/>
            <Routes>
              <Route path="/" exact Component={Home}/>
              <Route path="/products" exact Component={ProductsPage}/>
              <Route path="/product/:id" exact Component={Productpage}/>
              <Route path="/cart" exact Component={Cart}/>
              <Route path="*" exact Component={NotFound}/>
            </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;

