import React from "react"

export default function Authentification(){
    return(
        <div className="flex justify-center md:justify-end">
            <a
              href="#"
              className="btn bg-transparent md:border-2 text-green-700 hover:text-green-900 font-semibold  md:border-green-700 hover:border-green-900"
            >
              <svg
                className="w-6 h-6 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              Log In
            </a>
            <a
              href="#"
              className="btn ml-3 md:border-2 bg-transparent text-green-700 hover:text-green-900 font-semibold  md:border-green-700 hover:border-green-900"
            >
              <svg
                class="w-6 h-6 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              Sign Up
            </a>
          </div>
    )
}