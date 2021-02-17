import React from 'react'
import './Reservation.css'

const Reservation = ({ allReservations, removeResy }) => {
  const cancelRes = (event) => {
    removeResy(event.target.id)
  }
  
  const reservationCards = allReservations.map(resy => {
    return (
      <article key={resy.id} className="single-resy">
        <h2 className="resy-name">{resy.name}</h2>
        <p className="resy-date">{resy.date}</p>
        <p className="resy-time">{resy.time}</p>
        <p className="resy-number">Number of Guests: {resy.number}</p>
        <button className="resy-btn" id={resy.id} onClick={cancelRes}>Cancel</button>
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