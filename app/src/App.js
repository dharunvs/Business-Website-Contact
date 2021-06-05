import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Admin, Login } from "./pages";
import "./App.css";

function App() {
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
