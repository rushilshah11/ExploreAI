import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginOrRegister from "./pages/LoginOrRegister";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginOrRegister" element={<LoginOrRegister />} />
      </Routes>
    </>
  );
}

export default App;
