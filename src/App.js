import{Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <div className="App">
      <Routes/>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/products" exact Component={Products}/>
          <Route path="/products/:id" exact Component={NotFound}/>
          <Route path="/cart" exact Component={Cart}/>
          <Route path="*" exact Component={NotFound}/>
        </Routes>
      <Routes/>
    </div>
  );
}

export default App;

