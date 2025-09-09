import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tasks from "./pages/Tasks/Tasks";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import "./App.css";

function App() {
  return (
    <Router basename="/todo-app/">
      <Header />
      <Routes>
        <Route path="/" element={<HomeInfo />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
