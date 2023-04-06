import { useState } from 'react'
import Ace from '../ace/Ace'
import Card from '../card/Card'
import './board.css'

export const CardList = [
    {
        id: 1,
        suit: "clubs"


    },
    {
        id: 2,
        suit: "spades"

    },
    {
        id: 3,
        suit: "hearts"
    },
    {
        id: 4,
        suit: "diamonds"
    }
]

export const Board = () => {
    const [heartAce, setHeartAce] = useState([])
    const [spadeAce, setSpadece] = useState([])
    const [clubAce, setClubAce] = useState([])
    const [diamondAce, setDiamondAce] = useState([])



  return (
    <div className='board'>
        <div className='drop-area'>

        </div>
      
        <div className='card-box'>
            {CardList.map((item) => (
                <Card suit={item.suit} id={item.id} />
            ))}
        </div>
    </div>
  )
}
