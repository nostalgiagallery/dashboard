import React, { useEffect, useState } from "react";

const Content = ({route}) => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeButton, setActiveButton] = useState("Attendance Log");
    const [activeButtonsec, setActiveButtonsec] = useState("30 Days");
    const [activeButtonThird, setActiveButtonThird] = useState("one");
  
    const tableData = [
      {
        date: "Dec 04, Mon",
        attendanceVisual: "Present",
        effectiveHours: "9hr 15m",
        grossHours: "9hr 15m",
        extraHours: "0hr 15m",
        arrivalLogs: "on-time",
      },
      {
          date: "Dec 06, Tue",
          attendanceVisual: "Absent",
          effectiveHours: "5hr 15m",
          grossHours: "5hr 15m",
          extraHours: "0hr 15m",
          arrivalLogs: "delay",
        }, {
          date: "Dec 18, Mon",
          attendanceVisual: "Present",
          effectiveHours: "9hr 15m",
          grossHours: "9hr 15m",
          extraHours: "0hr 15m",
          arrivalLogs: "on-time",
        },
    ];
  
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
  
    const handleButtonClickSec = (buttonName) => {
      setActiveButtonsec(buttonName);
    };
  
    const handleButtonClickThird = (buttonName) => {
      setActiveButtonThird(buttonName);
    };
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const formatDate = (date) => {
      const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      return date.toLocaleDateString(undefined, options);
    };
  
    const formatTime = (date) => {
      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      return date.toLocaleTimeString(undefined, options);
    };

  return (
    <div className="bg-slate-800 text-white font-medium p-2">
    <h1 className="text-start p-4">
      My-Space/<span className="text-yellow-500">{route}</span>
    </h1>

    <div class="bg-slate-600  max-w-[95%] shadow-lg shadow-gray-500 p-4 py-5 px-3  m-5 rounded-lg">
      <div class="flex justify-between p-2 ">
        <h2 class="text-white">Advance Status</h2>
        <h2 class="text-white">Timings</h2>
        <h2 class="text-white">Actions</h2>
      </div>
      <div className="mt-5 flex justify-between ">
        <button
          type="button"
          class="inline-flex justify-center  rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none "
        >
          Last Week
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <div className="flex gap-1">
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium text-gray-600   text-gray-200">
            M
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium text-gray-600   text-gray-200">
            T
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium text-gray-600   text-yellow-400">
            W
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium text-gray-600   text-gray-200">
            T
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium text-gray-600   text-gray-200">
            F
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium text-gray-600   text-green-500">
            S
          </span>
          <span className="inline-flex items-center rounded-full bg-gray-700 px-2 py-2 font-medium    text-red-500">
            S
          </span>
        </div>
        <div className="flex gap-1 invisible">hii</div>
      </div>
      <div className="mt-5 flex justify-between">
        <div class="bg-slate-800 flex gap-2  rounded-lg shadow-lg  py-5 px-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className="flex flex-col -mt-2">
            <h2 className="font-bold">Avg hrs/ Day</h2>
            <h2 className="font-semibold">(6hrs 48)</h2>
          </div>

          <img
            className="inline-block h-10 w-10 rounded-full  ring-white"
            src="https://www.clipartmax.com/png/middle/159-1590855_a-mockup-illustrating-a-conic-gradient-emulating-a-three-colored-pie-chart.png"
            alt=""
          />

          <div className="flex flex-col -mt-2">
            <h2 className="font-bold">On Time Arrival</h2>
            <h2 className="font-normal">95%</h2>
          </div>
        </div>
        <div class="ml-10 bg-slate-800 flex gap-2  rounded-lg shadow-lg py-5 px-3">
          <div className="flex flex-col -mt-2">
            <h2 className="font-bold">
              Today <span className="text-sm">(09.00AM-06.00AM)</span>
            </h2>
            <h2 className="text-sm">Duration 9hrs 0m Break On</h2>
          </div>
        </div>
        <div class="flex gap-1  rounded-lg">
          <div class="bg-slate-800 rounded-lg shadow-lg p-1 w-42">
            <h2 className="font-semibold text-2xl w-full">
              {formatTime(currentTime)}
            </h2>
            <h2 className="font-normal text-sm">
              {formatDate(currentTime)}
            </h2>
          </div>
          <div className="flex flex-col gap-2 p-1">
            <button className="bg-yellow-500  font-bold py-1 px-2 rounded">
              Leave Request
            </button>
            <button className="bg-yellow-500  font-bold py-1 px-2 rounded">
              Work From Home
            </button>
          </div>
        </div>
      </div>
    </div>

    <h1 className="text-start p-4">Log & Requests</h1>

    <div class="flex gap-2 p-4">
      <button
        className={`${
          activeButton === "Attendance Log"
            ? "bg-yellow-500"
            : "bg-gray-500 hover:bg-gray-700"
        } text-white font-bold py-2 px-4 rounded`}
        onClick={() => handleButtonClick("Attendance Log")}
      >
        Attendance Log
      </button>
      <button
        className={`${
          activeButton === "Attendance Request"
            ? "bg-yellow-500"
            : "bg-gray-500 hover:bg-gray-700"
        } text-white font-bold py-2 px-4 rounded`}
        onClick={() => handleButtonClick("Attendance Request")}
      >
        Attendance Request
      </button>
    </div>
    <div class="bg-slate-600  max-w-[95%] shadow-lg shadow-gray-500 p-4 py-5 px-3  m-5 rounded-lg ">
      <div class="flex justify-evenly p-2 ">
        <h2 class="text-white w-[15%]">December ,2023</h2>
        <h2 class="text-white w-[70%] -mt-2">
          <button
            className={`${
              activeButtonsec === "30 Days"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-1`}
            onClick={() => handleButtonClickSec("30 Days")}
          >
            30 Days
          </button>
          <button
            className={`${
              activeButtonsec === "Nov"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-4 `}
            onClick={() => handleButtonClickSec("Nov")}
          >
            Nov
          </button>
          <button
            className={`${
              activeButtonsec === "Oct"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-4 `}
            onClick={() => handleButtonClickSec("Oct")}
          >
            Oct
          </button>
          <button
            className={`${
              activeButtonsec === "Sep"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-4 `}
            onClick={() => handleButtonClickSec("Sep")}
          >
            Sep
          </button>
          <button
            className={`${
              activeButtonsec === "Aug"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-4 `}
            onClick={() => handleButtonClickSec("Aug")}
          >
            Aug
          </button>
          <button
            className={`${
              activeButtonsec === "Jul"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-4`}
            onClick={() => handleButtonClickSec("Jul")}
          >
            Jul
          </button>
          <button
            className={`${
              activeButtonsec === "Jun"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-4`}
            onClick={() => handleButtonClickSec("Jun")}
          >
            Jun
          </button>
        </h2>
        <h2 class="text-white w-[15%] flex -mt-2">
          {" "}
          <button
            className={`${
              activeButtonThird === "one"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-3`}
            onClick={() => handleButtonClickThird("one")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <button
            className={`${
              activeButtonThird === "two"
                ? "bg-yellow-500"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold w-1/7 py-2 px-3`}
            onClick={() => handleButtonClickThird("two")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </button>
        </h2>
      </div>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead className="bg-slate-600 border-t-2 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Attendance Visual
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Effective Hours
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Gross Hours
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Extra Hours
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Arrival
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0 ? "bg-slate-600" : "bg-slate-400"
              }
            >
              <td className="px-6 py-4 whitespace-nowrap">{row.date}</td>
              <td className="px-6 py-4 whitespace-nowrap ml-3">
                {row.attendanceVisual === "Present" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-15 h-10"
                    viewBox="0 0 200 100"
                  >
                    <rect
                      x="10"
                      y="45"
                      width="100"
                      height="10"
                      fill="green"
                    />
                    <circle cx="120" cy="50" r="15" fill="green" />
                    <line
                      x1="135"
                      y1="50"
                      x2="180"
                      y2="50"
                      stroke="green"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-15 h-10"
                    viewBox="0 0 200 100"
                  >
                    <rect
                      x="10"
                      y="45"
                      width="100"
                      height="10"
                      fill="red"
                    />
                    <circle cx="120" cy="50" r="15" fill="red" />
                    <line
                      x1="135"
                      y1="50"
                      x2="180"
                      y2="50"
                      stroke="red"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                  </svg>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  className="inline-block h-5 w-5 rounded-full  ring-white"
                  src="https://www.clipartmax.com/png/middle/159-1590855_a-mockup-illustrating-a-conic-gradient-emulating-a-three-colored-pie-chart.png"
                  alt=""
                />{" "}
                {row.effectiveHours}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.grossHours}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {row.extraHours}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex">
                {row.arrivalLogs === "on-time" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                )}
                {row.arrivalLogs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Content