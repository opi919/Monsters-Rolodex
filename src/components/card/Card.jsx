import React, { Component } from "react"

export default function Card({monster}) {
  const { id, name, email } = monster

  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
