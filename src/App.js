import "./Scss/index.scss";
//* Routing imports
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Mobilenav from "./components/Mobilenav";

function App() {
  return (
    <div className="App">
      <Mobilenav/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
