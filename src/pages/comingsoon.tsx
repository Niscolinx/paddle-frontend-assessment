import React, { MouseEventHandler, useState } from 'react'
import ContactUs from '../components/ContactUs'
import Link from 'next/link'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

export type Display = React.CSSProperties

function comingSoon() {
    const [display, setDisplay] = useState<Display>({
        visibility: 'hidden',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const toShow = () => {
        setDisplay({ visibility: 'visible' })
    }

    const toClose = () => {
        setDisplay({ visibility: 'hidden' })
    }

    return (
        <>
            <div className='comingSoon'>
                <header className='header'>
                    <div className='header__logo'>
                        <Link href='/'>
                            <img src='logo-white.png' alt='' />
                        </Link>
                    </div>

                    <ul className='header__lists'>
                        <li className='header__lists--item'>
                            <Link href='/about'> About Us</Link>
                        </li>
                        <li className='header__lists--item'>
                            <Link href='/blog'> Blog</Link>
                        </li>
                        <li
                            className='header__lists--item header__lists--item-active'
                            onClick={toShow}
                        >
                            Contact Us
                        </li>
                    </ul>
                </header>{' '}
                <div className='comingSoon__ellipse'>
                    <div className='comingSoon__ellipse--1'></div>
                    <div className='comingSoon__ellipse--2'></div>
                    <div className='comingSoon__ellipse--3'></div>
                </div>
                <div className='comingSoon__rapper'>
                    <h1 className='comingSoon__header'>
                        Something awesome is coming soon
                    </h1>
                    <p className='comingSoon__text'>
                        Your all-in-one affiliate marketing tracking software{' '}
                        <span>track</span>, <span>automate</span> and{' '}
                        <span>optimize</span> your campaigns.
                    </p>
                    <div className='comingSoon__timer'>
                        <div className='comingSoon__timer--item'>
                            <span className='span-1'>7</span>
                            <span className='span-2'>Days</span>
                        </div>
                        <div className='comingSoon__timer--item'>
                            <span className='span-1'>24</span>
                            <span className='span-2'>Hours</span>
                        </div>
                        <div className='comingSoon__timer--item'>
                            <span className='span-1'>54</span>
                            <span className='span-2'>Minutes</span>
                        </div>
                        <div className='comingSoon__timer--item'>
                            <span className='span-1'>11</span>
                            <span className='span-2'>Second</span>
                        </div>
                    </div>
                    <form className='comingSoon__form' onSubmit={handleSubmit}>
                        <div className='comingSoon__form--1'>
                            <input
                                type='text'
                                placeholder='First Name..'
                                className='comingSoon__form--input'
                            />
                            <input
                                type='text'
                                placeholder='Last Name..'
                                className='comingSoon__form--input'
                            />
                        </div>
                        <div className='comingSoon__form--2'>
                            <input
                                type='text'
                                placeholder='Enter your email address...'
                                className='comingSoon__form--input-email'
                            />
                            <button
                                type='submit'
                                className='comingSoon__form--btn'
                            >
                                Join Our waiting List
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <ContactUs toClose={toClose} display={display} />

            <footer className='footer footer__glassmorphism'>
                <ul className='footer__links'>
                    <li className='footer__links--item footer__links--item-active'>
                        <Link href='/'>
                            <BsYoutube />
                        </Link>
                    </li>
                    <li className='footer__links--item'>
                        <Link href='/'>
                            <AiFillFacebook />
                        </Link>
                    </li>
                    <li className='footer__links--item'>
                        <Link href='/'>
                            <AiFillLinkedin />
                        </Link>
                    </li>
                    <li className='footer__links--item'>
                        <Link href='/'>
                            <AiFillInstagram />
                        </Link>
                    </li>
                    <li className='footer__links--item'>
                        <Link href='/'>
                            <FaTwitterSquare />
                        </Link>
                    </li>
                </ul>

                <div className='footer__contracts'>
                    <Link href='/'>Terms of services</Link>
                    <Link href='/'>Privacy Policy</Link>
                </div>
                <div className='footer__copyright'>
                    <p>
                        Copyright 2021 @ Peddle Technologies. All Rights
                        Reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default comingSoon
