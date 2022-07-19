import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter()
    const [isComingSoon, setIsComingSoon] = useState(true)
    const [isBlog, setIsBlog] = useState(false)

    useEffect(() => {
        if (router.asPath === '/comingsoon') {
            setIsComingSoon(true)
        } else {
            setIsComingSoon(false)
        }

        if(router.asPath === '/blog'){
            setIsBlog(true)
        }
        else{
            setIsBlog(false)
        }
    }, [router])

    return (
        <>
            <Header isComingSoon={isComingSoon} isBlog={isBlog}/>
            <div className='main'>{children}</div>

            <Footer isComingSoon={isComingSoon} />
        </>
    )
}

export default Layout
