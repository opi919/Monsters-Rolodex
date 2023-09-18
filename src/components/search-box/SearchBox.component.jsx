import React, { Component } from "react"
import "./SearchBox.css"

export default function SearchBox({ className, placeHolder, onChangeHandler }) {
  return <input type="search" className={`search-box ${className}`} placeholder={placeHolder} onChange={onChangeHandler} />
}
