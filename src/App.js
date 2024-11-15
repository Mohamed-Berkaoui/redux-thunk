import "./App.css";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/productsActions";

function App() {
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(fetchProducts())
},[])

  return (

      <div className="App">
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>

  );
}

export default App;
