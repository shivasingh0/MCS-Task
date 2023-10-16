import React from "react";
import Card from "./Card";

function MiddleContent() {
  return (
    <div className="relative">
      <div className="text-center">
        <div className="font-extrabold font-poppins text-7xl ">
          Want to{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-700">
            Join
          </span>{" "}
          Us
        </div>
        <p className="text-3xl text-gray-900 font-medium my-10">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>
      {/* ------Cards------ */}
      <div className="flex justify-center ">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <p className="text-2xl mx-32 text-black font-sm my-10">*For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <b>every day</b> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
      </div>
    </div>
  );
}

export default MiddleContent;
