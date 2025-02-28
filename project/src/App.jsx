import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Errorpage from "./pages/Errorpage";
import Home from "./pages/home/Home";
import Register from "./components/forms/Register";
import Login from "./components/forms/Login";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Errorpage />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
