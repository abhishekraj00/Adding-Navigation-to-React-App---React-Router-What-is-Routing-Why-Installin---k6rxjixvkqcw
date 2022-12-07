import React, { Component, useState } from "react";
import "../styles/App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Navbar from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>You are home</div>
  },
  {
    path: "/",
    element: <div>You are on the about page</div>
  }
]);

class App extends Component {
  render() {
    return (
      <div id="main">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
