import React from "react";
import Dog from "./dog-with-first-aid-kit-bag.svg";

export default function NavBar() {
  return (
    <div className="md:col-span-1 md:flex md:justify-end">
      <nav className="text-right">
        <div className="flex justify-between items-center lg:justify-end border-b-2 border-gray-200">
          <img src={Dog} />
          <h1 className="font-bold uppercase p-3  text-green-800 sm:text-green-600 lg:text-green-800 md:text-green-700">
            <a href="#">Pet Doctor</a>
          </h1>
          <div className="px-4 cursor-pointer md:hidden" id="burger">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
        <ul className="text-xs mt-6 hidden md:block" id="menu">
          <li className="py-2 mx-2">
            <a
              href="#"
              className="px-4 flex justify-center btn border-orange-600 shadow-md hover:bg-orange-200 "
            >
              <span className="mt-1">Home</span>
              <svg
                class="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </a>
          </li>
          <li className="py-2 mx-2">
            <a
              href="#"
              className="px-4 flex justify-center btn border-orange-600 shadow-md hover:bg-orange-200"
            >
              <span className="mt-1">About</span>
              <svg
                class="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="py-2 mx-2">
            <a
              href="#"
              className="px-4 flex justify-center btn border-orange-600 shadow-md hover:bg-orange-200 "
            >
              <span className="mt-1">Add appointment</span>
              <svg
                class="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="py-2 mx-2">
            <a
              href="#"
              className="px-3 flex justify-center btn border-orange-600 shadow-md hover:bg-orange-200 "
            >
              <span className="mt-1">Contact</span>
              <svg
                class="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
