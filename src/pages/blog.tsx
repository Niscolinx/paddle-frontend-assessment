import React from 'react'
import CardText from '../components/CardText'
import { IoIosSearch } from 'react-icons/io'
import Card from '../components/Card'
import { BsArrowRight } from 'react-icons/bs'

function blog() {
    return (
        <div className='blog'>
            <div className='blog__banner'>
                <div className='blog__banner--left'></div>
                <div className='blog__banner--text'>
                    <p className='text__subTitle'>
                        <span className='span-1'></span>
                        <span className='span-2'>blog</span>
                    </p>
                    <p className='text__title'>Articles and News</p>
                </div>
                <div className='blog__banner--left-sub'></div>
                <div className='blog__banner--right'></div>
            </div>

            <div className='blog__main'>
                <div className='blog__main--1'>
                    <CardText
                        title='Latest From The Blog'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                    />
                    <div className='main__searchBox'>
                        <input type='text' placeholder='Search here' />
                        <IoIosSearch className='main__searchBox--icon' />
                    </div>
                </div>

                <div className='blog__main--2'>
                    <div className='cards'>
                        <Card
                            src='/person1.jpeg'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum'
                        />
                        <Card
                            src='/person1.jpeg'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum'
                        />
                        <Card
                            src='/person1.jpeg'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum'
                        />
                        <Card
                            src='/person1.jpeg'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum'
                        />
                        <Card
                            src='/person1.jpeg'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum'
                        />
                        <Card
                            src='/person1.jpeg'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum'
                        />
                    </div>
                </div>

                <div className='blog__main--3'>
                    <CardText
                        title='Recent Articles'
                        text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
                    />
                </div>

                <div className='blog__main--4'>
                    <div className='cards'>
                        <Card
                            src='/'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='2. Unless specified otherwise, all Data requested by Metricks is mandatory and failure to provide this Data may make it impossible for Metricks to'
                        />
                        <Card
                            src='/'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='2. Unless specified otherwise, all Data requested by Metricks is mandatory and failure to provide this Data may make it impossible for Metricks to'
                        />
                        <Card
                            src='/'
                            date='SEPTEMBER 6, 2021 . FEATURED ARTICLE'
                            title='12 Popup Use Cases To Increase Conversions'
                            description='2. Unless specified otherwise, all Data requested by Metricks is mandatory and failure to provide this Data may make it impossible for Metricks to'
                        />
                    </div>
                    <button className='blog__main--4-btn'>Load More</button>
                </div>
            </div>
            <section className='about__section3'>
                <div className='section3-1'>
                    <h2 className='section3-1__header'>Got a Question?</h2>
                    <p className='section3-1__text'>
                        See how Metricks can help your business grow with best
                        Affiliate Marketing Tracking Software.
                    </p>
                    <div className='section3-1__btn'>
                        <button>Contact Us</button>
                        <BsArrowRight className='section3-1__btn--arrow' />
                    </div>
                </div>
                <div className='section3-2'></div>
            </section>
        </div>
    )
}

export default blog
