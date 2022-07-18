import Link from 'next/link'
import React from 'react'

type HeaderProps = {
    toShow?: () => void
}

const Header = ({ toShow }: HeaderProps) => {
    return (
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
        </header>
    )
}

export default Header
