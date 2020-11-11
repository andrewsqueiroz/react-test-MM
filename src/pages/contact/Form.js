import React from 'react';

function ContactForm() {
  return (
    <div className='containerForm'>
      <div>
        <input type='text' placeholder='Your Name' />

        <input type='text' placeholder='Your Email' />

        <input type='text' placeholder='Subject' />

        <textarea type='text' placeholder='Your Message' /> 

        <button className='primaryButton' >Submit</button>
      </div>
    </div>
  );
}

export default ContactForm;
