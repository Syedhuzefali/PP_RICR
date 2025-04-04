import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NewCollection from "./pages/NewCollection";
import Men from "./pages/men";
import Women from "./pages/Women";
import Sale from "./pages/Sale";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import UpdateProfile from "./pages/updateProfile";

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewCollection />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
      </Routes>
    </Router>
  );
}

