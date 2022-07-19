import Link from 'next/link'
import React from 'react'

type HeaderProps = {
    isComingSoon: boolean
    isBlog: boolean
}

const Header = ({ isComingSoon, isBlog }: HeaderProps) => {
    const useStyle: React.CSSProperties = {
        display: isComingSoon ? 'none' : 'flex',
        background: isBlog ? 'white' : '',
        padding: isBlog ? '4rem 6rem' : '2.5rem 6rem'
    }

    const useLinkStyles: React.CSSProperties = isBlog
        ? {
              color: 'black',
          }
        : { color: 'white' }

    const useLinkStyles__active: React.CSSProperties = isBlog
        ? {
              background: 'white',
              color: 'black',
          }
        : { background: '', color: '' }

    return (
        <header className='header' style={useStyle}>
            <div className='header__logo' style={{width: isBlog ? '120px' : '197px'}}>
                <Link href='/'>
                    <img
                        src={`${isBlog ? 'logo-color.svg' : 'logo-white.png'}`}
                        alt=''
                    />
                </Link>
            </div>

            <ul className='header__lists'>
                <li className='header__lists--item'>
                    <Link href='/about'>
                        <a style={useLinkStyles}>About Us</a>
                    </Link>
                </li>
                <li className='header__lists--item'>
                    <Link href='/blog'>
                        <a style={useLinkStyles}>Blog</a>
                    </Link>
                </li>
                <li
                    className='header__lists--item header__lists--item-active'
                    style={useLinkStyles__active}
                >
                    Contact Us
                </li>
            </ul>
        </header>
    )
}

export default Header
