import { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useAuth, useResolved } from "./hooks";
import { Navbar } from "./components";
import { Home, Admin, Login, Contact } from "./pages";

function App() {
  const history = useHistory();
  const location = useLocation();
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      if (location.pathname === "/admin") {
        history.push(!!authUser ? "/admin" : "login");
      }
    }
  }, [authResolved, authUser]);

  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </>
    </Switch>
  );
}

export default App;
