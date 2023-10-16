import {
  FirstBackgroundImage,
  SecondBackgroundImage,
  ThirdBackgroundImage,
} from "./backgroundImage/BackgroundImage";
import NavBar from "./navBar/NavBar";
import UpperContent from "./upperContent/UpperContent";
import MiddleContent from "./middleContent/MiddleContent";
import LowerContent from "./lowerContent/LowerContent";
import Footer from "./footer/Footer";

function Home() {
  return (
    <>
      <FirstBackgroundImage />
      <NavBar />
      <UpperContent />
      <SecondBackgroundImage />
      <ThirdBackgroundImage />
      <MiddleContent />
      <LowerContent />
      <Footer />
    </>
  );
}

export default Home;
