import React, { Component } from 'react';
import Form from '../Form/Form'
import Reservation from '../Reservation/Reservation'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: []
    }
  }

  addResy = (newResy) => {
    this.setState({ allReservations: [...this.state.allReservations, newResy] })
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...newResy}), 
    })
      .then(response => response.json())
      .catch(err => {console.log(err)})
  }

  removeResy = (idNum) => {
    fetch(`http://localhost:3001/api/v1/reservations/${idNum}`, {
      method: 'DELETE' 
    })
      .then(response => response.json())
      .then(data => this.fetchData())
      .catch(err => {console.log(err)})
 
  }

  fetchData = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations => {
        this.setState({ allReservations: reservations })
      })
  }

  componentDidMount() {
    this.fetchData()
  }
  
  render() {
    console.log(this.state.allReservations)

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addResy={this.addResy}/>
        </div>
        <div className='resy-container'>
          <Reservation allReservations={this.state.allReservations} removeResy={this.removeResy}/>
        </div>
      </div>
    )
  }
}

export default App;
