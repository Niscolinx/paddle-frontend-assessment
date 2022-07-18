import React from 'react'

function ContactUs() {
    return (
        <div className='contactUs'>
            <div className='contactUs__left'></div>
            <div className='contactUs__right'>
                <div className='contactUs__ellipse'></div>
                <form className='contactUs__form'>
                    <h1>
                        Hey, we are still in the works, but you can send us a
                        message!
                    </h1>

                    <label htmlFor='first_name'>First Name</label>
                    <input type='text' id='first_name' name='first_name' />
                </form>
            </div>
        </div>
    )
}

export default ContactUs
