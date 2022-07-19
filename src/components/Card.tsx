import Image from 'next/image'
import React from 'react'

type CardProps = {
    src: string,
    date: string,
    title: string,
    description: string
}

function Card({src, date, title, description}: CardProps) {
    return (
        <div className='card'>{
            src !== '/' ?
            <Image
                src={src}
                alt=''
                width={'487px'}
                height={'322px'}
            /> : ''
        }
            <div className='card__details'>
                <p className='card__date'>
                    {date}
                </p>
                <h2 className='card__title'>
                    {title}
                </h2>
                <p className='card__description'>
                    {description}
                </p>

                <div className='card__btn'>
                    <span className='card__btn--dash'></span>
                    <button className='card__btn--main'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
