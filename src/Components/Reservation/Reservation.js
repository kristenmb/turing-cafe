import React from 'react'
import './Reservation.css'

const Reservation = ({ allReservations }) => {
  const reservationCards = allReservations.map(resy => {
    return (
      <article key={resy.id} className="single-resy">
        <h2>{resy.name}</h2>
        <p>{resy.date}</p>
        <p>{resy.time}</p>
        <p>Number of Guests: {resy.number}</p>
        <button className="resy-btn" id={resy.id}>Cancel</button>
      </article>
    )
  })

  return (
    <>
      {reservationCards}
    </>
  )
}

export default Reservation