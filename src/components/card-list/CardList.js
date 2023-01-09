import './card-list.styles.css'
import Card from '../card/Card'
import React from 'react'

const CardList = ({ filteredMonsters }) => (
    <div className="card-list">
        {filteredMonsters.map((monster) => (
            <Card monster={monster} key={monster.id} />
        ))}
    </div>
)

export default CardList
