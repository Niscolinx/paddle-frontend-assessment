import Link from 'next/link'
import React from 'react'

const Header = ({isComingSoon}: {isComingSoon: boolean}) => {
    return (
        <header
            className='header'
            style={isComingSoon ? { display: 'none' } : { display: 'flex' }}
        >
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
                <li className='header__lists--item header__lists--item-active'>
                    Contact Us
                </li>
            </ul>
        </header>
    )
}

export default Header
