import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tasks from "./pages/Tasks/Tasks";
import About from "./pages/About/About";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import NotFound from "./components/NotFound/NotFound";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<HomeInfo darkMode={darkMode} />} />
        <Route path="/tasks" element={<Tasks darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;
