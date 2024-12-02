import * as datas from "./datas/datas.js";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./App.css";
import FormNewUser from "./components/FormNewUser.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar datas={datas.navLinks} />
        <Routes>
          <Route path="/new-user" element={<FormNewUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;