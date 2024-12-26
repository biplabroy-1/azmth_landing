// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Innovations from "./pages/Innovations.jsx";
import Future from "./pages/Future.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-[#0b0f10] to-[#0f3d4c] min-h-screen">
        <Navbar/>
        <div className="bg-yellow-300 text-black text-center py-3">
      🚧 This website is still under construction. Some text may not be visible currectly. 🚧
    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/future" element={<Future />} />
          <Route path="/innovations" element={<Innovations />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
