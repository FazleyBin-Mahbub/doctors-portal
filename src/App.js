import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/AppointmentPage/Appointment/Appointment";
import Home from "./Pages/HomePage/Home/Home";
import "@fontsource/montserrat";
import Login from "./Pages/LoginPage/Login/Login";
import Registration from "./Pages/LoginPage/Registration/Registration";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Router>
            {/* default routes */}
            <Route path="/" element={<Home />} />
            {/* default routes endpoint */}

            {/* home Routes */}
            <Route path="/home" element={<Home />} />
            {/* HOME routes endpoint */}

            {/* appointments routes here */}
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Router>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
