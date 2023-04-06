import { GiClubs, GiDiamonds, GiSpades, GiHearts } from "react-icons/gi";
import './ace.css'

const Ace = ({suit}) => {
  const renderFirstSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="ace-first-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="ace-first-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="ace-first-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="ace-first-symbol red"/>
    }
}

  const renderSecondSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="ace-second-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="ace-second-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="ace-second-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="ace-second-symbol red"/>
    }
  }

  const renderMiddleSymbol = (suit) => {
    if(suit === 'spades') {
        return <GiSpades className="ace-middle-symbol"/>
    } else if (suit === 'hearts') {
        return <GiHearts className="ace-middle-symbol red"/>
    } else if (suit === 'clubs') {
      return <GiClubs className="ace-middle-symbol"/>
    } else if (suit === 'diamonds') {
      return <GiDiamonds className="ace-middle-symbol red"/>
    }
  }

  return (
    <div className="ace-frame">
    <p className={(suit === 'spades' || suit === 'clubs') ? 'ace-first-letter' : 'ace-first-letter red'}>A</p>
    <p className={(suit === 'spades' || suit === 'clubs') ? 'ace-second-letter' : 'ace-second-letter red'}>A</p>

     {renderFirstSymbol(suit)}
     {renderSecondSymbol(suit)}

     {renderMiddleSymbol(suit)}
    </div>
  )
}

export default Ace