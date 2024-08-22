import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import Home from "./home";
import About from "./Pages/About/About";
const App = () => {
  return ( 
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
   );
}
 
export default App;