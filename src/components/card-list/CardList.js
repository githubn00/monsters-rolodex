import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/Card'

class CardList extends Component {
    render() {
        const { filteredMonsters } = this.props
        return (
            <div className="card-list">
                {filteredMonsters.map((monster) => (
                    <Card monster={monster} key={monster.id} />
                ))}
            </div>
        )
    }
}

export default CardList
