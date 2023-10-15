// import { Routes } from "react-router-dom";
import "./App.css";
import { FirstBackgroundImage, SecondBackgroundImage } from "./components/backgroundImage/BackgroundImage";
import MiddleContent from "./components/middleContent/MiddleContent";
import NavBar from "./components/navBar/NavBar";
import UpperContent from "./components/upperContent/UpperContent";

function App() {
  return (
    <>
      {/* <Routes> */}
      <FirstBackgroundImage/>
        <NavBar/>
        <UpperContent/>
        <SecondBackgroundImage/>
        {/* <MiddleContent/> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
