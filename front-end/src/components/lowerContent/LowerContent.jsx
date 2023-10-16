import React from "react";
import Student from "../../assets/Student.png";
import Teacher from "../../assets/Teacher.png";
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";
import Icon4 from "../../assets/Icon4.png";

function LowerContent() {
  return (
    <div>
      <div className="flex max-h-fit relative">
        {/*----------------------------- Left -----------------------------*/}
        <div className="mx-44 my-48">
          <div className="font-extrabold font-poppins text-7xl">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
              All-in-One{" "}
            </span>
            platform <br /> that Makes Easier
          </div>
          <p className="text-3xl text-black font-sm my-8">
            We are more than a platform; We are your <br /> success partner.
            Discover our services to achieve <br /> your business and
            educational goals
          </p>
          <div className="my-10">
            <div className="flex gap-20">
              <div className="flex gap-5 ">
                <img className="h-fit" src={Icon1} alt="" />
                <p className="text-2xl font-medium">
                  <b>SEARCH</b> for vital <br /> company <br /> information{" "}
                </p>
              </div>
              <div className="flex gap-5">
                <img className="h-fit" src={Icon2} alt="" />
                <p className="text-2xl font-medium">
                  <b>CONNECT</b> with the <br /> resources to meet <br /> your
                  business needs{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-20 my-20">
              <div className="flex gap-5">
                <img className="h-fit" src={Icon3} alt="" />
                <p className="text-2xl font-medium">
                  <b>RESEARCH</b> and <br /> generate reports <br /> that drive
                  growth{" "}
                </p>
              </div>
              <div className="flex gap-5">
                <img className="h-fit" src={Icon4} alt="" />
                <p className="text-2xl font-medium">
                  <b>ACADEMY</b> to give you <br /> the skills for success{" "}
                  <br /> in your career{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*----------------------------- Right -----------------------------*/}
        <div className="my-48 -ml-20 mx-30">
          <div className="flex">
            <div className="my-16">
              <p className="h-10 w-fit my-2 ml-14 rounded-s-2xl rounded-tr-xl bg-pink-100 p-1 px-5 text-lg">
                Hey, check out loreumipsum services.
              </p>
              <p className="h-10 w-fit my-2 ml-4 rounded-s-2xl rounded-tr-xl bg-pink-100 p-1 px-5 text-lg">
                I learned from their videos, got my first job.
              </p>
              <p className="h-10 w-fit my-2 rounded-s-2xl rounded-tr-xl bg-pink-100 p-1 px-5 text-lg">
                You won't be disappointed with their services.
              </p>
              <p className="h-10 w-fit my-14 mx-20 rounded-e-2xl rounded-tl-xl bg-cyan-100 p-1 px-3 text-lg">
                I got a perfect analysis report from them too
              </p>
              <p className="h-10 w-fit -my-10 ml-72 rounded-e-2xl rounded-tl-xl bg-cyan-100 p-1 px-3 text-lg">
                Oh, that's great.
              </p>
            </div>
            <img className="h-96 w-17 -mx-28" src={Student} alt="" />
          </div>
          <img className="h-fit -my-20" src={Teacher} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LowerContent;
