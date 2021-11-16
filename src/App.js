import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/AppointmentPage/Appointment/Appointment";
import Home from "./Pages/HomePage/Home/Home";
import "@fontsource/montserrat";
import Login from "./Pages/LoginPage/Login/Login";
import Registration from "./Pages/LoginPage/Registration/Registration";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/LoginPage/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/DashboardPage/Dashboard/Dashboard";
import AdminAlert from "./Pages/LoginPage/AdminRoute/AdminAlert";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            {/* default routes */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* default routes endpoint */}

            {/* home Routes */}
            <Route exact path="/home">
              <Home />
            </Route>
            {/* HOME routes endpoint */}

            {/* appointments routes here */}
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/adminalert">
              <AdminAlert />
            </Route>
            
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
