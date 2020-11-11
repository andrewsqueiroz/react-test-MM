import React from 'react';

import style from './style.css'

import Title from '../../components/title/Title'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import Divider from '../../components/divider/Divider'

import ContactForm from './Form'

function Contact() {
  return (
    <div className="container margB80">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <Title regular='Contact' bold='us' /> 
          <Divider />
          <div>
            <p>
              We are here to help you and find answers to your questions on our 
              Support section. If you can't find the answer to your question or 
              have any feedback, reach out to us by completing the form.
              All fields are marndatory unless otherwise stated
            </p>
          </div>
          <Divider />
          <div>
            <p><strong>Adress:</strong> 123 Palo Alto, Palo Alto, CA 94300</p>
            <p><strong>Phone:</strong> +1 234-567-8910</p>
            <p><strong>E-mail:</strong> contact@yourdomain.net</p>
          </div>
          <SocialMedia />
        </div>

        <div className="col-md-6 col-lg-8">
          <ContactForm />
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
