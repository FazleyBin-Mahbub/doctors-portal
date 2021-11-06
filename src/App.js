import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Router>
            {/* default routes */}
            <Route exact path="/" element={<Home />} />
            {/* default routes endpoint */}

            {/* home Routes */}
            <Route exact path="/home" element={<Home />} />
            {/* HOME routes endpoint */}
          </Router>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
