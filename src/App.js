import logo from './logo.svg'
import './App.css'
import { Component } from 'react'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'
/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
class App extends Component {
    constructor() {
        super()
        this.state = {
            monsters: [],
            searchBox: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users }
                    },
                    () => {}
                )
            )
    }
    onSearchChange = (event) => {
        const searchBox = event.target.value.toLowerCase()
        this.setState(() => {
            return { searchBox }
        })
    }
    render() {
        const { monsters, searchBox } = this.state
        const { onSearchChange } = this
        const filteredMonsters = monsters.filter((monsters) =>
            monsters.name.toLowerCase().includes(searchBox.toLowerCase())
        )
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
}

export default App
