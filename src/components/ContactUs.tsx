import React from 'react'

function ContactUs() {
    return (
        <div className='contactUs'>
            <div className='contactUs__left'></div>
            <div className='contactUs__right'>
                <div className='contactUs__ellipse'></div>
                <form className='contactUs__form'>
                    <h1 className='contactUs__form--header'>
                        <span>Hey, we are still in the works,</span>{' '}
                        <span>but you can send us a message!</span>
                    </h1>

                    <div className='contactUs__form--content'>
                        <label
                            htmlFor='first_name'
                            className='contactUs__form--label'
                        >
                            First Name
                        </label>
                        <input
                            type='text'
                            id='first_name'
                            name='first_name'
                            className='contactUs__form--input'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
