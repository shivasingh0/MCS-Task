import React from 'react'
import RectangleImage from "../../assets/Rectangle.png";
import { FaStar } from "react-icons/fa";

function CardSection() {
  return (
      <div>
          <div className="bg-white scale-75 shadow-lg shadow-white-500/50 text-2xl w-fit my-10 rounded-3xl">
            <img src={RectangleImage} alt="" />
            <div className="m-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold">Michael Jackson</h1>
                <span>
                  <b>₹4,370</b>
                </span>
              </div>
              <p className="text-2xl mt-5">
                I will do business evaluation and <br /> corporate services
              </p>
              <div className="flex text-2xl mt-10 gap-2">
                <FaStar className="text-blue-600 my-0.5" />
                <span className="text-blue-600">4.8</span>
                <span>(89)</span>
              </div>
              <button className="inline-flex w-full mt-5 bg-blue-500 px-48 py-2.5 text-2xl rounded-xl font-medium text-white ring-1 ring-inset">
                View service
              </button>
            </div>
          </div>
      </div>
  )
}

export default CardSection
