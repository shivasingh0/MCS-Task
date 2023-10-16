import React from 'react'
import BackgroundImage from "../../assets/GradientBackground.png";
import Vector from "../../assets/Vector.png";
import Group from "../../assets/Group.png";

export function FirstBackgroundImage() {
  return (
    <div>
      <img className="w-full absolute -my-28" src={BackgroundImage} alt="" />
    </div>
  )
}

export function SecondBackgroundImage() {
    return (
        <div>
        <img className="-my-80 absolute w-full" src={Vector} alt="" />
        </div>
      )
}

export function ThirdBackgroundImage() {
  return (
    <div>
      <img  className=" absolute w-full" src={Group} alt="" />
    </div>
  )
}