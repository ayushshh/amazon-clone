import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="m-0 p-0 box-border w-full min-h-screen">
      <Navbar />
      <HomeScreen />
      <Footer />
    </div>
  )
}

export default App