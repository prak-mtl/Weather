import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Upload from "./Upload";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Upload />, document.getElementById("root"));
serviceWorker.unregister();
