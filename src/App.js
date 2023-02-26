import "./Scss/index.scss";
//* Routing imports
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Mobilenav from "./components/Mobilenav";
import React, {useState} from "react"
import AddressCard from "./components/AddressCard";

function App() {
  const [sidebar, setSidebar] = useState(false)


  return (
    <div className="App">
      <Navbar showSidebar={()=>setSidebar(!sidebar)} />
      <Mobilenav showSidebar={sidebar} mobileMenuClose={()=>setSidebar(false)}/>
      <AddressCard showAddress = {sidebar}/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
