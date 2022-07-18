import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactUs from '../Containers/ContactUs'

function comingSoon() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>
        <div className='comingSoon'>
        <Header/>
            <div className='comingSoon__ellipse'>
                <div className='comingSoon__ellipse--1'></div>
                <div className='comingSoon__ellipse--2'></div>
                <div className='comingSoon__ellipse--3'></div>
            </div>

           
        </div>
        <Footer/>
        </>
    )
}

export default comingSoon
