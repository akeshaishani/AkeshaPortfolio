import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  //Navigate,
  //Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Header1 from "./components/Header1";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/header1" element={<Header1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
