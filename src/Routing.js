import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import App from "./App.js";
import Svg from "./Svg";
import Canvas from "./Canvas";
import Upload from "./Upload";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 300); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 300);
  }
};

export default function Routing() {
  return (
    <Router>
      <div>
        <AuthButton />
        <hr />
        <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/Routing-And-Drawing"
          label="Home"
        />

        <OldSchoolMenuLink
          activeOnlyWhenExact={true}
          to="/protected"
          label="Login page"
        />

        <hr />

        <Switch>
          <Route exact path="/Routing-And-Drawing">
            <App />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/protected">
            <PrivateRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active m-4" : "m-4"}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div className="m-4">
      <h1>Welcome!!!</h1>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/Routing-And-Drawing"));
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <p className="m-4">You are not logged in.</p>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/protected" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className="m-4">
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  let { path, url } = useRouteMatch();
  return fakeAuth.isAuthenticated ? (
    <div className="m-4">
      <h2>Please select a topic.</h2>

      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to={`${url}/upload`}
        label="Upload"
      />

      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to={`${url}/drawing`}
        label="Drawing tools"
      />

      <Switch>
        <Route exact path={`${path}/upload`}>
          <Upload />
        </Route>
        <Route path={`${path}/drawing`}>
          <Drawing />
        </Route>
      </Switch>
    </div>
  ) : (
    <Redirect
      to={{
        pathname: "/login"
      }}
    />
  );
}

function Drawing() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  return (
    <div className="m-4">
      <h3>Topics</h3>
      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to={`${url}/svg`}
        label="Rendering SVG"
      />

      <OldSchoolMenuLink
        activeOnlyWhenExact={true}
        to={`${url}/canvas`}
        label="Rendering Canvas"
      />

      <Switch>
        <Route exact path={`${path}/svg`}>
          <Svg />
        </Route>
        <Route path={`${path}/canvas`}>
          <Canvas />
        </Route>
      </Switch>
    </div>
  );
}
