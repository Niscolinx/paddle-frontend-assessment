import React from 'react'
import Dots from '../components/Dots'

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
                <div className='about__section2--1'>
                    <div className='about__section2--1__title'>
                        <div className='title-1'>
                            <span className='title-1__number'>01</span>
                            <span className='title-1__dash'></span>
                        </div>
                        <div className='title__2'>WHY US?</div>
                    </div>
                    <p className='about__section2--1__text'>
                        We pride ourselves in our ability to innovate and create
                        world-class tools that provide reliable and efficient
                        touchpoints between advertisers and affiliates.
                    </p>
                    <Dots/>
                </div>
                <div className='about__section2--2'></div>
            </section>
        </div>
    )
}

export default about
