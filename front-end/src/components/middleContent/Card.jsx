import React from "react";

function Card() {
  return (
    <div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-lg relative lg:flex-shrink-0">
        {/* --------------------Card - 1----------------------------- */}
        <div className=" w-96 rounded-3xl bg-white py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
          <div className="mx-auto max-w-xs px-8">
            {/* --------card-header--------- */}
            <div>
              <h1 className="font-bold text-2xl text-black">
                Commencement of business
              </h1>
              <p className="text-xl">
                Invested shareholders must confirm payment and office address{" "}
              </p>
            </div>
            {/* --------card-footer--------- */}
            <div className="flex w-80 -mx-8 bg-gray-100 rounded-2xl">
              <div className="text-xl">
                <h1 className="text-blue-500 text-2xl font-bold">Due date</h1>
                <p>Within 180 days</p>
              </div>
              <div className="text-xl">
                <h1 className="text-red-400 text-2xl font-bold">
                  Penalty Fees
                </h1>
                <p>
                  <span>
                    <b>
                      <u>₹50,000</u>
                    </b>
                  </span>{" "}
                  for the company
                </p>
                <p>
                  <span>
                    <b>
                      <u>₹1,000</u>
                    </b>{" "}
                    /
                  </span>
                  day for directors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
