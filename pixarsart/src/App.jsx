import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Root from "./Root";
import About from "./pages/about/About";

function App() {
  const location = useLocation(); 
  
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App /> 
    </Router>
  );
}
