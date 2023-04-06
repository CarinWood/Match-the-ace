import React from 'react'
import Ace from '../ace/Ace'
import { useDrag } from 'react-dnd'
import './card.css'

const Card = ({suit, id}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "card",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

  return (
    <div key={id} className={isDragging ? 'hide': ''} ref={drag}>
    <Ace suit={suit} />
    </div>
  )
}

export default Card