import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import Footer from "./components/Footer/Footer";
import Product from "./screen/Products/Product";
import {Routes ,Route} from "react-router-dom";
import Cart from "./screen/Cart/Cart";

const App = () => {
  return (
    <div className="m-0 p-0 box-border w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App