import React from 'react'

type CardTextProps = {
  title: string
  text: string
}


function CardText({title, text}: CardTextProps) {
  return (
    <div className='cardText'>
      <h1 className='cardText__title'>{title}</h1>
      <p className='cardText__text'>{text}</p>
    </div>
  )
}

export default CardText