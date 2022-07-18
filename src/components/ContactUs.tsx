import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function ContactUs() {
    return (
        <div className='contactUs'>
          <div className="contactUs__action">

            <BsArrowRight className='contactUs__action--arrow'/>
          </div>
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
                            First name
                        </label>
                        <input
                            type='text'
                            id='first_name'
                            name='first_name'
                            className='contactUs__form--input'
                            placeholder='Enter your first name'
                        />
                    </div>
                    <div className='contactUs__form--content'>
                        <label
                            htmlFor='first_name'
                            className='contactUs__form--label'
                        >
                            Last name
                        </label>
                        <input
                            type='text'
                            id='first_name'
                            name='first_name'
                            className='contactUs__form--input'
                            placeholder='Enter your Last Name'
                        />
                    </div>
                    <div className='contactUs__form--content'>
                        <label
                            htmlFor='first_name'
                            className='contactUs__form--label'
                        >
                            Email address
                        </label>
                        <input
                            type='text'
                            id='first_name'
                            name='first_name'
                            className='contactUs__form--input'
                            placeholder='Enter your Email Address'
                        />
                    </div>
                    <div className='contactUs__form--content'>
                        <label
                            htmlFor='first_name'
                            className='contactUs__form--label'
                        >
                            Tell us what you need help with:
                        </label>
                        <textarea
                            rows={6}
                            id='first_name'
                            name='first_name'
                            className='contactUs__form--textarea'
                            placeholder={`Enter a topic, like " channel problem... "`}
                        />
                    </div>
                    <button className='contactUs__form--btn'>Send Now</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
