import React from 'react'
import Dots from '../components/Dots'
import {BsArrowRight} from 'react-icons/bs'

const about = () => {
    return (
        <div className='about'>
            <header className='about__header'>
                <div className='about__header--1'></div>
                <div className='about__header--1-box'></div>
                <div className='about__header--2'>
                    <p className='about__header--2__subTitle'>
                        <span className='span-1'></span>
                        <span className='span-2'>ABOUT US</span>
                    </p>
                    <p className='about__header--2__title'>
                        <span>Built for SaaS</span> <span>and E-commerce</span>
                    </p>
                </div>
                <div className='about__header--3'>
                    Our tools are easy to set up and use with a user friendly
                    dashboard that enables you to set up, launch, automate and
                    manage multi-affiliate campaigns in 5 minutes.
                </div>
                <div className='about__header--ellipse'></div>
            </header>

            <section className='about__section1'>
                <p className='about__section1--content'>
                    Metricks was developed because just like you, we needed a
                    product that could give us <span>good value</span>
                </p>
            </section>

            <section className='about__section2'>
                <div className='section2-1'>
                    <div className='section2-1__rapper'>
                        <div className='section2-1__title'>
                            <div className='title__1'>
                                <span className='title__1--number'>01</span>
                                <span className='title__1--dash'></span>
                            </div>
                            <h3 className='title__2'>WHY US?</h3>
                        </div>
                        <p className='section2-1__text'>
                            We pride ourselves in our ability to innovate and
                            create world-class tools that provide reliable and
                            efficient touchpoints between advertisers and
                            affiliates.
                        </p>
                    </div>
                    <Dots />
                </div>
                <div className='section2-2'>
                    <div className='section2-2__container'>
                        <div className='section2-2__title'>
                            <div className='title__1'>
                                <span className='title__1--number'>02</span>
                                <span className='title__1--dash'></span>
                            </div>
                            <h3 className='title__2'>GROWING WITH YOU</h3>
                        </div>

                        <p className='section2-2__text'>
                            Leveraging the best technology, we have developed an
                            all-in-one affiliate marketing tracking software, a
                            genius tool to help you track, automate and optimize
                            your influencer campaigns, all from one dashboard.
                        </p>
                        <p className='section2-2__text'>
                            Our team of experts are constantly brainstorming,
                            testing and developing new solutions with only one
                            thing in mind - your business growth. Your success
                            is our success and by giving you the tools you need
                            to scale, we grow as well.
                        </p>
                    </div>
                    <div className='section2-2__subContainer'></div>
                </div>
            </section>
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

export default about
