import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./page/header/Header";
import Banner from "./page/banner/Banner";
import Home from "./page/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
  
      <Banner/>
      
    </div>
  );
}

export default App;
