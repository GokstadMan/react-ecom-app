import{Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <div className="App">
      <Routes/>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/about" exact Component={About}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/prices" exact Component={Prices}/>
          <Route path="*" exact Component={NotFound}/>
        </Routes>
      <Routes/>
    </div>
  );
}

export default App;

