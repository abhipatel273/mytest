// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componet/Navbar";
import Textform from "./componet/Textform";
import * as React from "react";
import Accordion from "./componet/Accordion";
import * as ReactDOM from "react-dom";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Accordion />}></Route>,
    <Route path="/acc" element={<Navbar />}></Route>,
    <Route path="/acc/arr" element={<Textform />}></Route>,
  ])
);

function App() {
  return ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
