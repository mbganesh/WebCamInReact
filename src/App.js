import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExportSheet from "./Components/ExportSheet";
import Home from "./Components/Home";
import WebCamCapture from "./Components/WebCamCapture";

function App() {
  return (
    <Router>
     <Switch>
     <Route exact path="/" component={ExportSheet} />
      <Route exact path="/webCam" component={WebCamCapture} />
      <Route exact path="/excel" component={ExportSheet} />
     </Switch>
    </Router>
  );
}

export default App;
