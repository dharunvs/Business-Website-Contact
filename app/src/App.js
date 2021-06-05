import { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useAuth, useResolved } from "./hooks";
import { Navbar } from "./components";
import { Home, Admin, Login } from "./pages";
import "./App.css";

function App() {
  const history = useHistory();
  const location = useLocation();
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      if (location.pathname !== "/") {
        history.push(!!authUser ? "/admin" : "login");
      }
    }
  }, [authResolved, authUser, history]);
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
      </>
    </Switch>
  );
}

export default App;
