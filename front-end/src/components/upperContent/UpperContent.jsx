import React from "react";
import {useNavigate} from "react-router-dom";
import ImageFirst from "../../assets/Picture.png";
import ImageSecond from "../../assets/Picture1.png";
import ImageThird from "../../assets/Picture2.png";

function UpperContent() {
  const navigate = useNavigate()

  const Navigate = () => {
    navigate('/detailpage')
  }

  return (
    <div>
      <div className="flex max-h-fit relative">
        {/*----------------------------- Left -----------------------------*/}
        <div className="w-1/2 mx-44 my-48">
          <div className="font-extrabold font-poppins text-7xl">
            Find
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">
              {""} Parteners {""}
            </span>
            (CAs) <br /> available online
          </div>
          <p className="text-2xl text-gray-500 font-medium my-8">
            <span className="text-gray-600 font-bold">CONNECT</span> with us
            where your services are listed and visible to a myriad <br /> of
            businesses seeking CA’s for compliance support
          </p>
          <div>
            {/* Input */}
            <input
              type="text"
              name="price"
              className="rounded-md border-0 px-5 w-1/2 py-6 font-bold text-2xl pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
              placeholder="Search by name"
            />
            {/* Search button */}
            <button onClick={Navigate} className="inline-flex items-center cursor-pointer bg-blue-600 px-20 py-8 text-xl rounded-xl font-medium text-white ring-1 ring-inset ring-blue-700/10">
              Search
            </button>
          </div>
        </div>
        {/*----------------------------- Right -----------------------------*/}
        <div className="w-1/2 flex gap-3">
          <img className="my-56 h-fit z-10" src={ImageFirst} alt="" />
          <img className="my-40 h-fit" src={ImageSecond} alt="" />
          <img className="my-48 h-fit z-20" src={ImageThird} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UpperContent;
