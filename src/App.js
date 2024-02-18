import{Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Productpage from "./pages/Productpage";
import ProductsPage from "./pages/ProductsPage"




function App() {
  return (
    <div className="App">
      <Routes/>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/products" exact Component={ProductsPage}/>
          <Route path="/product/:id" exact Component={Productpage}/>
          <Route path="/cart" exact Component={Cart}/>
          <Route path="*" exact Component={NotFound}/>
        </Routes>
      <Routes/>
    </div>
  );
}

export default App;

