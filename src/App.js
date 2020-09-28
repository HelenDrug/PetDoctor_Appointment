import React, { Component } from "react";
import "./App.css";
import AddAppointmentForm from "./components/AddAppointmentForm/AddAppointmentForm";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import NavBar from "./components/NavBar/NavBar";
import Authentification from "./components/Authentification/Authentification";
import Header from "./components/Header/Header";
import { without } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: "false",
      showAboutText: "false",
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.toggleAboutText = this.toggleAboutText.bind(this);
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
    tempApts.unshift(apt);
    this.setState({
      myAppointments: tempApts,
    });
  }

  deleteAppointment(apt) {
    let tempApts = [...this.state.myAppointments];
    tempApts = without(tempApts, apt);
    this.setState({ myAppointments: tempApts });
  }

  toggleForm() {
    this.setState({ formDisplay: !this.state.formDisplay });
  }

  toggleAboutText(showtext) {
    this.setState({ showAboutText: showtext });
  }

  render() {
    return (
      <div className="App text-gray-700 font-mono grid md:grid-cols-5">
        <NavBar showAboutText={this.toggleAboutText} />
        <main className="px-16 py-6 bg-gray-100 md:col-span-4" id="top">
          <Authentification />
          <Header />
          {this.state.showAboutText === "true" ? (
            <div className="block">TEST</div>
          ) : (
            <div className="hidden">hidden</div>
          )}

          <AppointmentList
            appointments={this.state.myAppointments}
            deleteAppointment={this.deleteAppointment}
          />
          <AddAppointmentForm
            formDisplay={this.state.formDisplay}
            toggleForm={this.toggleForm}
            addAppointment={this.addAppointment}
          />
          <a
            id="topButton"
            href="#top"
            className="flex rounded-full justify-center mb-3 h-10 w-10 bg-gray-400 float-right hover:bg-orange-500 "
          >
            <svg
              class="w-8 h-8 pt-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              ></path>
            </svg>
          </a>
        </main>
      </div>
    );
  }
}

export default App;
