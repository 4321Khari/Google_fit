import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Headers from "./components/Headers";
import { Error } from "./components/Error";
import Dashboard from "./components/dashboard";
import './App.css';


function App() {


  return (
    <div className="container">
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
