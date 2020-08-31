import React, { Component } from "react";
import "./App.css";
import AddAppointment from "./addAppointment";
import ListAppointment from "./listAppointment";
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
      <main className="App page bg-white" id="petraitings">
        <header>Pet Doctor Appointments</header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointment
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addAppointment={this.addAppointment}
                />
                <ListAppointment
                  appointments={this.state.myAppointments}
                  deleteAppointment={this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
