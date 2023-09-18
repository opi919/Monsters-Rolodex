import { Component } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import CardList from "./components/card-list/CardList.component"
import SearchBox from "./components/search-box/SearchBox.component"
import { useState, useEffect } from "react"

const App = () => {
  const [searchText, setSearchText] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filterMonsters, setFilterMonsters] = useState(monsters)

  const onChangeHandler = (e) => {
    setSearchText(e.target.value.toLocaleLowerCase())
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((newMonsters) => setMonsters(newMonsters))
  }, [])

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchText)
    })

    setFilterMonsters(filteredMonsters)
  }, [monsters, searchText])

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodox</h1>
      <SearchBox className="monsters-search-box" placeHolder="search monsters" onChangeHandler={onChangeHandler} />
      <CardList monsters={filterMonsters} />
    </div>
  )
}

export default App
