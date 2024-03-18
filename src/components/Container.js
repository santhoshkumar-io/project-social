import React from "react";
import CupIcon from "./Icon/CupIcon";
import PlusIcon from "./Icon/PlusIcon";
import GreenUpArrowIcon from "./Icon/GreenUpArrowIcon";
import PlayIcon from "./Icon/PlayIcon";
import ScheduleIcon from "./Icon/ScheduleIcon";
import TwitterIcon from "./Icon/TwitterIcon";
import PinertestIcon from "./Icon/PinterestIcon";
import LinkedInIcon from "./Icon/LinkedInIcon";
import WaveIcon2 from "./Icon/WaveIcon2";
import Header from "./Header";
import { MAIN } from "./Const/MainCost";
import LineChart from "./LineChart";
import ProgressBar from "./ProgressChart";
export default function Container() {
  return (
    <>
      <div className=" ml-10">
        <Header />
        <div className="flex flex-row justify-around">
          <div className="flex flex-col bg-cupBack rounded-2xl mr-6">
            <div className="w-64 h-40 bg-cup rounded-2xl m-5 flex justify-center">
              <CupIcon />
            </div>
            <div className="flex flex-row mt-14 m-5 pb-4">
              <div className="flex flex-col mr-24">
                <h2 className="font-bold  capitalize">{MAIN.subHeading}</h2>
                <p className="text-xs text-left text-gray-300">
                  {MAIN.cupText}
                </p>
              </div>
              <button className="bg-primary-200 py-3.5 px-3.5 rounded-xl shadow-shade">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="mx-4">
            <div className="w-72 h-44 bg-lineBack rounded-2xl flex flex-col relative p-4 mx-6">
              <LineChart height={200} width={200} />
              <div className="flex flex-row justify-between ">
                <div>
                  <h3 className="font-bold">{MAIN.visitors.visitors}</h3>
                  <p className="text-xs text-gray-300">
                    {MAIN.visitors.visitorsLabel}
                  </p>
                </div>
                <div>
                  <h3 className="flex flex-row font-bold text-green">
                    <div className="flex justify-center items-center">
                      <GreenUpArrowIcon />
                    </div>

                    {MAIN.visitors.lasYear}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {MAIN.visitors.lastYearLabel}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-rows justify-between mt-10 mx-6">
              <div className="flex flex-col bg-lineBack rounded-2xl px-7 pb-6 pt-4">
                <div className="rounded-full  w-12 h-12 bg-white flex justify-center items-center mx-auto shadow-shade mb-4 ">
                  <PlayIcon />
                </div>
                <h3>{MAIN.visitors.plays}</h3>
                <p className="text-gray-300 text-xs">
                  {MAIN.visitors.playsLabel}
                </p>
              </div>
              <div className="flex flex-col bg-primary-200 rounded-2xl px-7 pb-6 pt-4 shadow-shade">
                <div className=" w-12 h-12  flex justify-center items-center mx-auto mb-4">
                  <ScheduleIcon />
                </div>
                <h3 className="text-white">{MAIN.visitors.posts}</h3>
                <p className="text-white text-xs">{MAIN.visitors.postsLabel}</p>
              </div>
            </div>
          </div>
          <div className="ml-6 relative">
            <img
              src="./images/Climate.png"
              alt="Climate"
              className="h-96 w-80 "
            />
            <div className="absolute top-10 left-10 text-white">
              <h3 className="w-2/3 font-semibold text-3xl text-left">
                {MAIN.climate.label}
              </h3>
              <p className="text-left my-1.5">{MAIN.climate.text}</p>
              <h1 className="text-left text-5xl">{MAIN.climate.degree}</h1>
            </div>
            <div className="p-4 rounded-xl w-fit bg-white absolute bottom-6 rounded-tr-none right-5">
              <button className="p-3.5 rounded-xl bg-primary-200 shadow-shade ">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-left text-2xl mt-14 mb-7">
          {MAIN.subHeading}
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col mr-6">
            <div className="flex flex-row   mb-10 text-gray-300 ">
              <p className="text-xs py-3 px-7 rounded-3xl bg-gray-100 border-gray-200 border mr-2">
                {MAIN.updates.label1}
              </p>
              <p className="text-xs  items-center flex ml-16">
                {MAIN.updates.label2}
              </p>
            </div>
            <div className="flex flex-row my-2.5">
              <div className="w-12 h-12  flex justify-center items-center  bg-twitter p-2.5 rounded-xl">
                <TwitterIcon />
              </div>
              <div className="flex flex-col ml-4 mr-6">
                <h3 className="text-left ">{MAIN.updates.tasks[0].label}</h3>
                <p className="text-xs text-gray-300">{MAIN.updates.text}</p>
              </div>

              <h3 className="w-12 items-center text-small flex ml-20 text-right font-bold text-green">
                {MAIN.updates.tasks[0].percent}
              </h3>
            </div>
            <div className="flex flex-row my-2.5">
              <div className="w-12 h-12  flex justify-center items-center  bg-pinterest-200 p-2.5 rounded-xl">
                <PinertestIcon />
              </div>
              <div className="flex flex-col ml-4 mr-6">
                <h3 className="text-left ">{MAIN.updates.tasks[1].label}</h3>
                <p className="text-xs text-gray-300">{MAIN.updates.text}</p>
              </div>

              <h3 className="w-12 items-center text-small flex ml-20 text-right font-bold text-pinterest-100 justify-end">
                {MAIN.updates.tasks[1].percent}
              </h3>
            </div>
            <div className="flex flex-row my-2.5">
              <div className="w-12 h-12 flex justify-center items-center  bg-linkedIn-200 p-2.5 rounded-xl">
                <LinkedInIcon />
              </div>
              <div className="flex flex-col ml-4 mr-6">
                <h3 className="text-left ">{MAIN.updates.tasks[2].label}</h3>
                <p className="text-xs text-gray-300">{MAIN.updates.text}</p>
              </div>

              <h3 className="w-12 text-small items-center flex ml-20 text-right font-bold text-linkedIn-100">
                {MAIN.updates.tasks[2].percent}
              </h3>
            </div>
          </div>
          <div className="relative mx-16 mt-4 ">
            <ProgressBar />
            <div className="absolute top-16 left-16">
              <h1 className="text-primary-200 text-6xl font-base">
                {MAIN.progress}
              </h1>
              <p className="text-gray-300">{MAIN.progessText}</p>
            </div>
            <div className="w-44 h-44 absolute top-8 left-8 rounded-full  shadow-progressShade"></div>
          </div>
          <div className="w-80 h-72 ml-12 text-white bg-gradient-to-tl from-gradTwo rounded-2xl to-gradOne relative shadow-2xl">
            <div className="mx-auto  my-16">
              <p>{MAIN.postReach.text}</p>
              <h1 className="font-bold my-4 text-6xl">
                {MAIN.postReach.reach}
              </h1>
              <p>{MAIN.postReach.label}</p>
            </div>
            <p className="absolute bottom-5 right-10">{MAIN.postReach.year}</p>
            <WaveIcon2 className="absolute bottom-0 right-0 " />
          </div>
        </div>
      </div>
    </>
  );
}
