import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Sample1 from './components/sample1';
import Sample2 from './components/sample2';
import Sample3 from './components/sample3';
import Sample4 from './components/sample4';
import Sample5 from './components/sample5';
import Sample6 from './components/sample6';
import Sample7 from './components/sample7';
import Sample8 from './components/sample8';


const routes = [
  {
    path: "/sample-1",
    component: Sample1
  },
  {
    path: "/sample-2",
    component: Sample2
  },
  {
    path: "/sample-3",
    component: Sample3
  },
  {
    path: "/sample-4",
    component: Sample4
  },
  {
    path: "/sample-5",
    component: Sample5
  },
  {
    path: "/sample-6",
    component: Sample6
  },
  {
    path: "/sample-7",
    component: Sample7
  },
  {
    path: "/sample-8",
    component: Sample8
  },
];

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default function App() {

  return (
    <>
    <div className="container-fluid">
      <Router>
        <div >
          <ul className="font-small">
            <li>
              <Link to="/sample-1">Simple form validation through formik</Link>
            </li>
            <li>
              <Link to="/sample-2">Validate using Yup, remove name,value,onchange,onblue in one method getFieldProps</Link>
            </li>
            <li>
              <Link to="/sample-3">Insted of useFormik use  Formik and make simple</Link>
            </li>
            <li>
              <Link to="/sample-4">Additional input field</Link>
            </li>
            <li>
              <Link to="/sample-5">Nested Object</Link>
            </li>
            <li>
              <Link to="/sample-6">Field Array</Link>
            </li>
            <li>
              <Link to="/sample-7">Block error on  onchange and onBlue event</Link>
            </li>
            <li>
              <Link to="/sample-8">Field Level validation code take form Sample 3</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
      </div>
    </>
  );
}