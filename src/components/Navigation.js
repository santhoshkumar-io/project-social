import React from "react";
import DashBoardIcon from "./Icon/DashBoard";
import LeaderBoardIcon from "./Icon/LeaderBoard";
import ViewListIcon from "./Icon/ViewListIcon";
import MoneyBillIcon from "./Icon/MoneyBillIcon";
import BagIcon from "./Icon/BagIcon";
import CalendarIcon from "./Icon/CalendarIcon";
import CommentIcon from "./Icon/CommentIcon";
import PhoneIcon from "./Icon/PhoneIcon";
import UpArrowIcon from "./Icon/UpArrowIcon";
import WaveIcon from "./Icon/WaveIcon";
import { NAV } from "./Const/NavConst";
export default function Navigation() {
  return (
    <div className="bg-primary-200 h-fit w-72 m-7  rounded-3xl text-navText pb-10 relative shadow-2xl ">
      <img src="./images/Logo.png" alt="Logo" className="m-auto py-7" />
      <ul className="flex flex-col">
        <li className="list-none">
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <DashBoardIcon className="mr-5" /> {NAV.navBar[0]}
          </a>
        </li>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <LeaderBoardIcon className="mr-5" /> {NAV.navBar[1]}
          </a>
        </li>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <ViewListIcon className="mr-5" /> {NAV.navBar[2]}
          </a>
        </li>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <MoneyBillIcon className="mr-5" /> {NAV.navBar[3]}
          </a>
        </li>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <BagIcon className="mr-5" /> {NAV.navBar[4]}
          </a>
        </li>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <CalendarIcon className="mr-5" /> {NAV.navBar[5]}
          </a>
        </li>
        <h6 className="pl-7 w-fit uppercase text-xs">{NAV.label}</h6>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <CommentIcon className="mr-5" /> {NAV.navBar[6]}
          </a>
        </li>
        <li>
          <a href="./" className="pl-7 flex  flex-row py-2 my-3">
            <PhoneIcon className="mr-5" /> {NAV.navBar[7]}
          </a>
        </li>
      </ul>
      <div className="h-48 w-44 mx-auto relative mt-20  z-10">
        <button className="bg-white rounded-2xl px-4 py-3  absolute -top-5 right-16">
          <UpArrowIcon />
        </button>
        <p className="mx-auto w-40 pt-12  pb-8 text-white">
          {NAV.upgradeText[0]}
          <span>{NAV.upgradeText[1]}</span>
          {NAV.upgradeText[2]}
        </p>
        <button className="bg-white text-primary-300 rounded-2xl py-2.5 px-14">
          {NAV.bText}
        </button>
      </div>
      <WaveIcon className="absolute bottom-0 right-0" />
    </div>
  );
}
