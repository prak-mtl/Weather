import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./Routing";
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routing />, document.getElementById("root"));
serviceWorker.unregister();
