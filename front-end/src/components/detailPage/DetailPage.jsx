import React from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import RectangleImage from "../../assets/Rectangle.png";
import Slide from "../../assets/Slide.png";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

function DetailPage() {
  return (
    <div className="bg-gray-100 ">
      <NavBar />
      <div className="flex my-44 ">
        {/* ----Left---- */}
        <div className="w-1/3 mx-28">
          <h1 className="text-5xl font-bold">Michael Jackson</h1>
          <p className="text-2xl mt-5">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist you effectively
          </p>
          <div className="flex text-2xl mt-10 gap-2">
            <FaStar className="text-blue-600 my-0.5" />
            <span className="text-blue-600">4.8</span>
            <span>(89)</span>
          </div>
          {/* -----miniCard------ */}
          <div className="bg-white shadow-lg shadow-white-500/50 text-2xl my-10 rounded-3xl">
            <div className="flex justify-between p-10">
              <h1>Basic to complex tasks</h1>
              <h1>
                <b>₹4,370</b>
              </h1>
            </div>
            <div className="flex px-10 gap-2">
              <MdDateRange className="text-blue-600 text-3xl" />
              <p>Delivers the job within 2 days</p>
            </div>
            <div className="flex justify-evenly p-8">
              <button className="inline-flex items-cente bg-blue-500 px-5 py-2.5 text-2xl rounded-xl font-medium text-white ring-1 ring-inset ring-blue-700/10">
                Request Proposal
              </button>
              <button className="mx-5 inline-flex items-center bg-blue-50 border-2 rounded-xl border-blue-700 px-4 py-2 text-2xl font-medium text-blue-700 ring-1 ring-inset">
                Chat with me
              </button>
            </div>
          </div>
          {/* -----Testrimonial card----- */}
          <div className="bg-white shadow-lg shadow-white-500/50 text-2xl p-10 my-10 rounded-3xl">
            <h1 className="text-3xl font-bold">What people say?</h1>
            <p className="text-xl mt-5">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
            <img className="mt-8 mx-36" src={Slide} alt="" />
          </div>
        </div>
        {/* -----Right---- */}
        <div className="w-2/3 mr-28">
          <img src={RectangleImage} className="w-full" alt="" />
          <h1 className="text-5xl my-10 font-bold">About Michael Jackson</h1>
          <div className="flex justify-between">
            <div>
              <span className="text-gray-400 text-xl font-bold">FROM</span>
              <p className="text-2xl my-5">INDIA</p>
            </div>
            <div>
              <span className="text-gray-400 text-xl font-bold">
                PARTNER SINCE
              </span>
              <p className="text-2xl my-5">2011</p>
            </div>
            <div>
              <span className="text-gray-400 text-xl font-bold">
                AVERAGE RESPONSE TIME
              </span>
              <p className="text-2xl my-10">30 minutes</p>
            </div>
          </div>
          <div>
            <span className="text-gray-400 my-20 text-xl font-bold">ABOUT</span>
            <p className="text-2xl my-5">
              I am a Professional Charted Accountant here to offer professional
              services of accounting and finance, financial statements,
              Bookkeeping in affordable price.
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <div>
                <span className="text-gray-400 my-20 text-xl font-bold">
                  SERVICES I OFFER
                </span>
                <ul className="text-2xl my-5 mx-8 list-disc">
                  <li>Financial accounting</li>
                  <li>Financial statements</li>
                  <li>Bookkeeping</li>
                  <li>Accountong and finance</li>
                  <li>Corporate Finance</li>
                  <li>Maintain Charts of Accounts</li>
                  <li>Profit and loss statements</li>
                  <li>Bank Reconciliation</li>
                  <li>Balance Sheets</li>
                </ul>
              </div>
              <div>
                <span className="text-gray-400 my-20 text-xl font-bold">
                  WHY ME?
                </span>
                <ul className="text-2xl my-5 mx-8 list-disc">
                  <li>One-time delivery</li>
                  <li>24 / 7 customer support</li>
                  <li>Error-free documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------Cards section-------- */}
      <div>
        <h1 className="text-5xl ml-32 font-bold">Recommended for you</h1>
        <div className="flex justify-between mx-16 -mt-10">
          {/* ********Card-1***** */}
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
          {/* ********Card-2***** */}
          <div className="bg-white shadow-lg scale-75 shadow-white-500/50 text-2xl w-fit my-10 rounded-3xl">
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
          {/* ********Card-3***** */}
          <div className="bg-white shadow-lg shadow-white-500/50 text-2xl w-fit scale-75 my-10 rounded-3xl">
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
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
