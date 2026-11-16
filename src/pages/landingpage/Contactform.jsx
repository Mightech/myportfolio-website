import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import "../landingpage/getintouch.css"
import { LuSend } from "react-icons/lu";

const Contactform = () => {

    const [state, handleSubmit] = useForm("meagalrd");
      if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }
  return (
   <form className='send-a-message-inputs' action ="https://formspree.io/f/meagalrd" method = "POST">
                            <div className='inputs-holders'>
                               <label> Your Name</label>
                            <input type="text" id='name' name='name' placeholder='Enter your name' className='in'/>

                                                 <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
                            </div>
                             <div className='inputs-holders'>
                               <label>Email Address</label>
                            <input type="email"  name="email" id='email'  placeholder='Enter your email' className='in'/>
                            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                            </div>
                            
                         <div className='inputs-holders'>
                               <label>Subject</label>
                            <input type="text" id='subject' name='subject'  placeholder='Project Inquiry'className='in'/>
                                                 <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
                            </div>
                            
                            <div className='inputs-holderss'>
                               <label>Message</label>
                            <textarea type="text"   id="message"
        name="message" placeholder='Tell me about your project'className='inp'/>
                             <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                            </div>

                             <div className='send-a-message-btn-holder'>
                            <button className='send-a-message-btn'type="submit" disabled={state.submitting}>
                                <p><LuSend /></p>
                                <p>Send Message</p>
                            </button>
                        </div>
                            
                        </form>
  )
}

export default Contactform
