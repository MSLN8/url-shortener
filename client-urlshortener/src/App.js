import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Form from "./components/urls/Form";
import Navbar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Switch> */}
      <Route exact path="/" component={Form} />
      {/* <Route exact path="/urls/:id" component={List} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
