// import logo from "./logo.svg";
import "./App.css";
// import Form from "./componet/Form";
// import Createnote from "./Createnote";
// import Card from "./componet/card";
// import Temprature from "./weather/Temp";
// import Todo from "./componet/Todo";
// import UseHook from "./Hooks/UseHook";
// import Restaurant from "./componet/Restaurant";
// import data from "./componet/carddata";
import Covid19 from "./componet/Covid19";
import Navbar from "./componet/Navbar";
import Form from "./componet/Form";
import Createnote from "./componet/Createnote"
import { BrowserRouter, Routes , Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Covid19  />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/Createnote" element={<Createnote />}></Route>
      </Routes>
    </BrowserRouter>
      {/* <Restaurant/> */}
      {/* < UseHook/> */}
      {/* < Todo /> */}
      {/* <Temprature /> */}
      {/* < Card menu={data}/> */}
      {/* <Form/> */}
      {/* < Createnote /> */}
      {/* <Covid19 /> */}
    </>
  );
}

export default App;
