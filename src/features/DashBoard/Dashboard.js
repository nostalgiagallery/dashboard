import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Dashboard({ children }) {
  const [isMySpaceActive, setIsMySpaceActive] = useState(true);
  const [isDisplay, setisDisplay] = useState(true);
  const location = useLocation();

  const handleMySpaceClick = () => {
    setIsMySpaceActive(!isMySpaceActive);
  };
  const handleAsideClick = () => {
    setisDisplay(!isDisplay);
  };

  return (
    <section className="h-screen flex">
      {isDisplay ? (
        <aside
          className={`p-5 lg:w-96 h-screen w-96 h-screen bg-gray-800 space-y-2 transition-transform duration-300 transform ${
            isDisplay ? "active translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="ml-4 w-full flex justify-end text-white ">
            {isDisplay ? (
              <div className="bg-slate-900/75 rounded-lg p-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 "
                  onClick={handleAsideClick}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                onClick={handleAsideClick}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>

          <>
            <div className="w-full h-16 flex items-center justify-center bg-slate-900/75 text-white font-semibold rounded-lg gap-3">
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
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <div> Jitendra Admin</div>
            </div>
            <NavLink
              to="/"
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-semibold rounded-lg transition ease-in-out duration-200  ${
                location.pathname === "/"
                  ? "bg-yellow-500 text-white"
                  : "text-slate-400 hover:bg-slate-700"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </NavLink>
            <div className="relative">
              <div
                onClick={handleMySpaceClick}
                className="w-full flex items-center justify-between gap-3 px-3 py-2 text-sm text-slate-400 font-semibold rounded-lg transition ease-in-out duration-200 hover:bg-slate-700"
              >
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  My Space
                </div>
                <div>
                  {!isMySpaceActive ? (
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
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
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
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {isMySpaceActive && (
                <div className="flex flex-col text-start ">
                  <NavLink
                    to="/leave"
                    className={`${
                      location.pathname === "/leave"
                        ? "bg-yellow-500 text-white"
                        : "text-slate-400 hover:bg-slate-700 "
                    } ml-20 px-2 py-2 text-sm  font-semibold rounded-lg transition ease-in-out duration-200 `}
                  >
                    Leave
                  </NavLink>
                  <NavLink
                    to="/attendance"
                    className={`${
                      location.pathname === "/attendance"
                        ? "bg-yellow-500 text-white"
                        : "text-slate-400 hover:bg-slate-700 "
                    } ml-20 px-2 py-2 text-sm  font-semibold rounded-lg transition ease-in-out duration-200 `}
                  >
                    Attendance
                  </NavLink>
                  <NavLink
                    to="/performance"
                    className={`${
                      location.pathname === "/performance"
                        ? "bg-yellow-500 text-white"
                        : "text-slate-400 hover:bg-slate-700 "
                    } ml-20 px-2 py-2 text-sm  font-semibold rounded-lg transition ease-in-out duration-200  `}
                  >
                    Performance
                  </NavLink>
                  <NavLink
                    to="/expense-travel"
                    className={`${
                      location.pathname === "/expense-travel"
                        ? "bg-yellow-500 text-white"
                        : "text-slate-400 hover:bg-slate-700 "
                    } ml-20 px-2 py-2 text-sm  font-semibold rounded-lg transition ease-in-out duration-200  `}
                  >
                    Expense & Travel
                  </NavLink>
                  <NavLink
                    to="/helpdesk"
                    className={`${
                      location.pathname === "/helpdesk"
                        ? "bg-yellow-500 text-white"
                        : "text-slate-400 hover:bg-slate-700 "
                    } ml-20 px-2 py-2 text-sm  font-semibold rounded-lg transition ease-in-out duration-200  `}
                  >
                    Help Desk
                  </NavLink>
                </div>
              )}
            </div>
          </>
        </aside>
      ) : (
        <div className=" lg:w-10 h-screen bg-slate-800 sticky  space-y-2 text-white">
          <div className="bg-slate-900/75 rounded-lg p-2 mt-4 text-center ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              onClick={handleAsideClick}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-scroll">
        <div className="h-1/6 flex justify-center gap-10 w-full bg-slate-800 p-5">
          <div className="relative w-2/6">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 bg-slate-700/75 "
            />
          </div>
          <div className="relative inline-block text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <div className="relative inline-block text-white">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className=" h-5/6 w-full bg-slate-800 ">{children}</div>
      </div>
    </section>
  );
}
