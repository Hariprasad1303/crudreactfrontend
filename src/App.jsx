import Landing from "./pages/Landing";
import "./App.css";
import PublicNavbar from "./components/PublicNavbar";
import Features from "./components/Features";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Skillcard from "./pages/Skillcard";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skills" element={<Skillcard />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </>
  );
}

export default App;
