import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Booking from "./components/Pages/Booking";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import SinglePlace from "./components/Pages/SinglePlace";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { theme } from "./Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/booking/:hotelId">
            <Booking />
          </PrivateRoute>
          <Route path="/place/:id">
            <SinglePlace />
          </Route>
        </Switch>
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
