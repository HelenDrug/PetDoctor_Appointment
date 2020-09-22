import React, { Component } from "react";
import "./App.css";
import AddAppointment from "./components/addAppointment";
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
        <NavBar />
        <main className="px-16 py-6 bg-gray-100 md:col-span-4">
          <Authentification />
          <Header />
          <AppointmentList
            appointments={this.state.myAppointments}
            deleteAppointment={this.deleteAppointment}
          />
          <AddAppointment
            formDisplay={this.state.formDisplay}
            toggleForm={this.toggleForm}
            addAppointment={this.addAppointment}
          />
        </main>
      </div>
    );
  }
}

export default App;
