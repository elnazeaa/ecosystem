import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Switch,
  Router,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default App;
