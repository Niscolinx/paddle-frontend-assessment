import React, { MouseEventHandler } from 'react'
// import { ComingSoonContext } from '../pages/comingsoon'

function Header({
    toShow,
}: {
    toShow: () => void
}) {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src='logo-white.png' alt='' />
            </div>

            <ul className='header__lists'>
                <li className='header__lists--item'>Abous Us</li>
                <li className='header__lists--item'>Blog</li>
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
