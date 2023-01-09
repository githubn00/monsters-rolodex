import './App.css'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'

const App = () => {
    console.log('render')
    const [searchField, setSearchField] = useState('') // [value, setValue]
    const [monsters, setMonsters] = useState([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)
    console.log(searchField)

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase()
        setSearchField(searchFieldString)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users))
    }, [])

    useEffect(() => {
        const filteredMonsters = monsters.filter((monsters) =>
            monsters.name.toLowerCase().includes(searchField.toLowerCase())
        )
        setFilteredMonsters(filteredMonsters)
    }, [monsters, searchField])

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onSearchHandler={onSearchChange}
                className1="monsters-search-box"
                placeholder1="search monsters"
            />
            <CardList filteredMonsters={filteredMonsters} />
        </div>
    )
}

export default App
