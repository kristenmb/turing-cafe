import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
    <form className="reservation-form">
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
      />
      <input
        type="text"
        placeholder="Date(mm/dd)"
        name="date"
        value={this.state.date}
        onChange={this.handleChange}
      />
      <input
        type="text"
        placeholder="Time"
        name="time"
        value={this.state.time}
        onChange={this.handleChange}
      />
      <input
        type="text"
        placeholder="Number of guests"
        name="numGuests"
        value={this.state.numGuests}
        onChange={this.handleChange}
      />
      <button onClick={this.submitReservation}>Make A Reservation</button>
    </form>
    )
  }
}

export default Form