// import { Routes } from "react-router-dom";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import DetailPage from "./components/detailPage/detailPage";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detailpage" element={<DetailPage/>} />
      </Routes>
    </>
  );
}

export default App;
