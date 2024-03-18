import React from "react";
import SettingIcon from "./Icon/SettingIcon";
import BellIcon from "./Icon/BellIcon";
import { MAIN } from "./Const/MainCost";
export default function Headers() {
  return (
    <>
      <div className="flex flex-row h-fit w-auto justify-between my-14 ">
        <div className="flex flex-col">
          <h6 className="text-left text-xs text-gray-300">{MAIN.headPara}</h6>
          <h1 className="text-3xl font-semibold">{MAIN.headText}</h1>
        </div>
        <div className="flex flex-row">
          <button className="flex justify-center items-center mx-4">
            <BellIcon />
          </button>
          <button className="flex justify-center items-center mx-4">
            <SettingIcon />
          </button>
          <button className="flex  justify-center items-center mx-4 ">
            <img
              src="./images/profile.png"
              className="rounded-full w-10 h-10 shadow-shade"
              alt="Profile"
            />
          </button>
        </div>
      </div>
    </>
  );
}
