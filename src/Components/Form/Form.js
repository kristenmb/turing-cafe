import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  saveReservation = (event) => {
    event.preventDefault();
    const newResy = {
      ...this.state,
      number: parseInt(this.state.number),
      id: Date.now()
    }
    console.log(newResy)
    this.props.addResy(newResy);
    
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: "", date: "", time: "", number: "" })
  }

  render() {
    return (
    <form className="reservation-form">
      <input
        className="name-input"
        type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
      />
      <input
        className="date-input"
        type="text"
        placeholder="Date(mm/dd)"
        name="date"
        value={this.state.date}
        onChange={this.handleChange}
      />
      <input
        className="time-input"
        type="text"
        placeholder="Time"
        name="time"
        value={this.state.time}
        onChange={this.handleChange}
      />
      <input
        className="number-input"
        type="number"
        placeholder="Number of guests"
        name="number"
        value={this.state.number}
        onChange={this.handleChange}
      />
      <button onClick={this.saveReservation}>Make A Reservation</button>
    </form>
    )
  }
}

export default Form