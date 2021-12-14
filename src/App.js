import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Switch,
  Router,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import MiddleSection from "./components/Middle";
import About from "./components/About";
import Ecosystem from "./components/Eosystem";

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <MiddleSection />
      <About />
      <Ecosystem />
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default App;
