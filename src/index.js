import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./reduxe/store.js";
import "./index.css";
// import Form from "./componet/Form";
// import Createnote from "./componet/Createnote";
// import {
//   BrowserRouter,
//   // createBrowserRouter,
//   // createRoutesFromElements,
//   Route,
//   // RouterProvider,
//   Routes,
// } from "react-router-dom";

// const router = createBrowserRouter( 
//   createRoutesFromElements([
//     <Route path="/" element={<App />}></Route>,
//     <Route path="/Form" element={<Form />}></Route>,
//     <Route path="/Createnote" element={<Createnote />}></Route>,
//     <Route path="/services" element={<Service/>}>
//       <Route path="ecom" element={<ECom/>}></Route>
//       <Route path="wp" element={<Wp/>}></Route>
//       <Route path="php" element={<Php/>}></Route>
//     </Route>,
//   ])
// );

// const router = [

// ]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* {<RouterProvider router={router} />} 
   <App/>
    */}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode> 
);



