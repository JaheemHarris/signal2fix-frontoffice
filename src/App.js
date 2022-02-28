import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Logout from "./components/Logout";
import ErrorPage from "./components/ErrorPage";
import Fiche from "./components/Fiche";
import CarteTest from "./components/CarteTest";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/logout" element={<Logout/>} ></Route>
          <Route path="/fiche/:id" element={<Fiche/>} ></Route>
          <Route path="/cartetest" element={<CarteTest />}></Route>
          <Route path="*" element={<ErrorPage/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
