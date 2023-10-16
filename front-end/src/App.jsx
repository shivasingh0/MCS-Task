// import { Routes } from "react-router-dom";
import "./App.css";
import {
  FirstBackgroundImage,
  SecondBackgroundImage,
  ThirdBackgroundImage,
} from "./components/backgroundImage/BackgroundImage";
import NavBar from "./components/navBar/NavBar";
import UpperContent from "./components/upperContent/UpperContent";
import MiddleContent from "./components/middleContent/MiddleContent";
import LowerContent from "./components/lowerContent/LowerContent";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <Routes> */}
      <FirstBackgroundImage />
      <NavBar />
      <UpperContent />
      <SecondBackgroundImage />
      <ThirdBackgroundImage/>
      <MiddleContent />
      <LowerContent />
      <Footer/>
      {/* </Routes> */}
    </>
  );
}

export default App;
