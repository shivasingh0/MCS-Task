import React from "react";

function Card() {
  return (
    <div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md relative lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            {/* --------card-header--------- */}
            <div>
              <h1 className="text-base font-semibold text-gray-600">
                Commencement of business
              </h1>
              <p>
                Invested shareholders must confirm payment and office address{" "}
              </p>
            </div>
            {/* --------card-footer--------- */}
            <div className="flex">
              <div>
                <h1>Due date</h1>
                <p>Within 180 days</p>
              </div>
              <div>
                <h1>Penalty Fees</h1>
                <p>
                  <span>₹50,000</span>for the company
                </p>
                <p>
                  <span>₹1,000 /</span>day for directors
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
