import React, { Component } from "react";
import "./App.css";
import AddAppointment from "./components/addAppointment";
import ListAppointment from "./components/listAppointment";
import { without } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: "false",
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }

  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const appointments = result.map((item) => {
          return item;
        });
        this.setState({
          myAppointments: appointments,
        });
      });
  }

  addAppointment(apt) {
    let tempApts = this.state.myAppointments;
    console.log(apt);
    tempApts.unshift(apt);
    this.setState({
      myAppointments: tempApts,
    });
  }

  deleteAppointment(appointment) {
    let tempAppointments = [...this.state.myAppointments];
    tempAppointments = without(tempAppointments, appointment);
    this.setState({ myAppointments: tempAppointments });
  }

  toggleForm() {
    this.setState({ formDisplay: !this.state.formDisplay });
  }

  render() {
    return (
      <div className="App text-gray-700 font-mono grid md:grid-cols-5">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center lg:justify-end">
              <h1 className="font-bold uppercase p-4 border-b-2 border-gray-200 text-green-800 sm:text-green-600 lg:text-green-800 md:text-green-700">
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
              <li className="py-2">
                <a href="#" className="px-4 flex justify-end">
                  <span>Home</span>
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
              <li className="py-2">
                <a href="#" className="px-4 flex justify-end">
                  <span>About</span>
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
              <li className="py-2">
                <a href="#" className="px-4 flex justify-end">
                  <span>Add appointment</span>
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
              <li className="py-2">
                <a href="#" className="px-4 flex justify-end">
                  <span>Remove appointment</span>
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main className="px-16 py-6 bg-gray-100 md:col-span-4">
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
          <header>
            <h2 className="text-5xl font-semibold text-orange-600 mt-8 ">
              Pet Doctor Appointments
            </h2>
          </header>
          <div className="mt-16">
            <ListAppointment
              appointments={this.state.myAppointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
          <div>
            <AddAppointment
              formDisplay={this.state.formDisplay}
              toggleForm={this.toggleForm}
              addAppointment={this.addAppointment}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
