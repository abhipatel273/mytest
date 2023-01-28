import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Form from "./componet/Form";
import Createnote from "./componet/Createnote";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  
  createRoutesFromElements([
    <Route path="/" element={<App />}></Route>,
    <Route path="/Form" element={<Form />}></Route>,
    <Route path="/Createnote" element={<Createnote />}></Route>,
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {<RouterProvider router={router} />}
    {/* <App/> */}
  </React.StrictMode>
);



