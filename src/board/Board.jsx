import { useState } from 'react'
import Ace from '../ace/Ace'
import Card from '../card/Card'
import './board.css'
import { useDrop } from 'react-dnd'
import { BsSuitHeart, BsSuitSpade, BsSuitDiamond, BsSuitClub } from "react-icons/bs";


export const Board = () => {
    const [firstList, setFirstList] = useState([])
    const [secondList, setSecondList] = useState([])
    const [thirdList, setThirdList] = useState([])
    const [fourthList, setFourthList] = useState([])
    const [listOfCards, setListOfCards] = useState([
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
    ]);


    const [{isOver}, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => putCardInFirstArray(item.id, item.suit),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const [{isOverSecond}, dropSecond] = useDrop(() => ({
        accept: "card",
        drop: (item) => putCardInSecondArray(item.id, item.suit),
        collect: (monitor) => ({
            isOverSecond: !!monitor.isOver(),
        })
    }))

    const [{isOverThird}, dropThird] = useDrop(() => ({
        accept: "card",
        drop: (item) => putCardInThirdArray(item.id, item.suit),
        collect: (monitor) => ({
            isOverThird: !!monitor.isOver(),
        })
    }))

    const [{isOverFourth}, dropFourth] = useDrop(() => ({
        accept: "card",
        drop: (item) => putCardInFourthArray(item.id, item.suit),
        collect: (monitor) => ({
            isOverFourth: !!monitor.isOver(),
        })
    }))


    const putCardInFirstArray = (id, suit) => {
            if(suit === 'hearts') {
                const newArray = listOfCards.filter(item => id === item.id)
                setFirstList(firstList => [...firstList, newArray[0]])
                
                const index = listOfCards.findIndex((obj) => obj.id === id)
                listOfCards.splice(index, 1) 

            } else {
                return;
            }
                   
    }

    const putCardInSecondArray = (id, suit) => {
        if(suit === "spades") {
            const newArray = listOfCards.filter(item => id === item.id)
            setSecondList(secondList => [...secondList, newArray[0]])
            const index = listOfCards.findIndex((obj) => obj.id === id) 
            listOfCards.splice(index, 1) 
        } else {
            return;
        }
     
    }
   
    const putCardInThirdArray = (id, suit) => {
        if(suit === 'diamonds') {
            const newArray = listOfCards.filter(item => id === item.id)
            setThirdList(thirdList => [...thirdList, newArray[0]])
            const index = listOfCards.findIndex((obj) => obj.id === id) 
            listOfCards.splice(index, 1)  
        } else {
            return;
        }
    
      
    }
  
    const putCardInFourthArray = (id, suit) => {
        if(suit === "clubs") {
            const newArray = listOfCards.filter(item => id === item.id)
            setFourthList(fourthList => [...fourthList, newArray[0]])
            const index = listOfCards.findIndex((obj) => obj.id === id) 
            listOfCards.splice(index, 1)  
        } else {
            return;
        }
       
    }







  return (
    <div className='board'>
        <div className='drop-area'>
            <div className='drop-card' ref={drop}>
                <BsSuitHeart className="icon"/>
                {firstList.map((item) => {
                    return <Card suit={item.suit} id={item.id}/>
                })}
            </div>
            <div className='drop-card' ref={dropSecond}>
                <BsSuitSpade className="icon"/>
                {secondList.map((item) => {
                    return <Card suit={item.suit} id={item.id} />
                })}
            </div>
            <div className='drop-card' ref={dropThird}>
                <BsSuitDiamond className='icon'/>
                {thirdList.map((item) => {
                    return <Card suit={item.suit} id={item.id} />
                })}
            </div>
            <div className='drop-card' ref={dropFourth}>
                <BsSuitClub className='icon'/>
                {fourthList.map((item) => {
                    return <Card suit={item.suit} id={item.id} />
                })}
            </div>
        </div>
      
        <div className='card-box'>
            {listOfCards.map((item) => (
                <span key={item.id}>
                <Card suit={item.suit} id={item.id} />
                </span>
            ))}
        </div>
    </div>
  )
}
