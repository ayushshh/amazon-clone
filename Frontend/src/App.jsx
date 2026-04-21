import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import Footer from "./components/Footer/Footer";
import Product from "./screen/Products/Product";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./screen/Cart/Cart";
import { SignIn, SignUp } from "./components/Auth/auth";

// Hide Navbar and Footer on auth pages
const AuthLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ["/signin", "/signup"].includes(location.pathname);

  return (
    <div className="m-0 p-0 box-border w-full min-h-screen">
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/"        element={<HomeScreen />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart"    element={<Cart />} />
        <Route path="/signin"  element={<SignIn />} />
        <Route path="/signup"  element={<SignUp />} />
      </Routes>
    </AuthLayout>
  );
};

export default App;