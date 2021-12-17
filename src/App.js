import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import MiddleSection from "./components/Middle";
import About from "./components/About";
import Ecosystem from "./components/Eosystem";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Review from "./components/Review";

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <MiddleSection />
      <About />
      <Ecosystem />
      <Features />
      <Review />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
