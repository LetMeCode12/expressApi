import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading/Loading";
import AuthRoute from "./components/authRoute/AuthRoute";

const Login = lazy(() => import("./containers/login/Login"));
const MainPage = lazy(() => import("./containers/mainPage/MainPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <AuthRoute
            exact
            path="/"
            component={(props) => <MainPage {...props} />}
          />
          <Route path="/login" component={(props) => <Login {...props} />} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
