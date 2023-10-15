import React from "react";
import Card from "./Card";

function MiddleContent() {
  return (
    <div>
      <div className="flex">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MiddleContent;
