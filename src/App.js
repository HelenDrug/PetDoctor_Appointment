import React, { Component } from "react";
import "./App.css";
import AddAppointment from "./components/addAppointment";
import ListAppointment from "./components/listAppointment";
import { without, findIndex } from "lodash";

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
      <div className="App text-gray-700">
        <div>
          <nav>
            <div>
              <h1 className="font-bold uppercase p-4 border-b-2 border-gray-200">
                <a href="#">Pet Doctor</a>
              </h1>
            </div>
            <ul>
              <li>
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Add appointment</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Remove appointment</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main className="px-16 py-6">
          <div>
            <a href="#">Log In</a>
            <a href="#">Sign Up</a>
          </div>
          <header>
            <h2 className="text-gray-900 text-5xl font-semibold ">
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
