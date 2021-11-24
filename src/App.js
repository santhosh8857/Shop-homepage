import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {

  // state to track the value of cart
  const [cart, setCart] = useState(0);

  // function to update the state
  const addCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="App">
      {/* navigational  */}
      <Navbar cart={cart} />
      <Header />
      {/* includes card components */}
      <Showcase cart={cart} setCart={setCart} addCart={addCart} />
      <Footer />
    </div>
  );
}

export default App;
