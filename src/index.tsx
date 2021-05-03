import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CarsList from "./components/Cars/CarsList";
import CarsForm from "./components/Cars/CarsForm";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path={"/"} component={CarsList} />
          <Route path={"/new-car"} component={CarsForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
