import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const initValidInputs = {
  name: false,
  email: false,
  subject: false,
  message: false,
}

function ContactForm() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [formMsg, setFormMsg] = React.useState('');
  const [typeMsg, setTypeMsg] = React.useState('');
  
  const [validForm, setValidForm] = React.useState(initValidInputs);

  const submit = () => {
    debugger
    setFormMsg('')
    if (validateForm()) {
      let objetoMsg = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      }
      console.log(objetoMsg)
      /////// aqui ficaria a chamada da api passando o obj 'objetoMsg'
      // condição de sucesso
      setFormMsg('Message sent successfully')
      limparCampos()
      // condição de falha
      // setFormMsg('Error sending message')

    } else {
      setFormMsg('All fields are mandatory')
    }
  }

  const limparCampos = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setValidForm(initValidInputs)
  };

  const validInput = (value, target) => {
    setFormMsg('')
    switch (target) {
      case 'name':
        if (!value) {
            setValidForm(prevState => ({ ...prevState, name: true }))
            return true
        }
        setValidForm(prevState => ({ ...prevState, name: false }))
        return false
      case 'email':
        if (!email) {
            setValidForm(prevState => ({ ...prevState, email: true }))
            return true
        } else {
          if (email.length < 5) {
            setValidForm(prevState => ({ ...prevState, email: true }))
            return true
          }
          if (!email.includes("@") || !email.includes(".com")) {
            setValidForm(prevState => ({ ...prevState, email: true }))
              return true
          }
        }
        setValidForm(prevState => ({ ...prevState, email: false }))
        return false
      case 'subject':
        if (!subject) {
            setValidForm(prevState => ({ ...prevState, subject: true }))
            return true
        }
        setValidForm(prevState => ({ ...prevState, subject: false }))
        return false
      case 'message':
        if (!message) {
            setValidForm(prevState => ({ ...prevState, message: true }))
            return true
        }
        setValidForm(prevState => ({ ...prevState, message: false }))
        return false
      default:
        return false
    }
  };

  const validateForm = () => {
    let error = false;
    validInput(name, 'name')
    validInput(email, 'email')
    validInput(subject, 'subject')
    validInput(message, 'message')
    if (validForm.name || !name) {
      error = true;
    }
    if (validForm.email || !email) {
      error = true;
    }
    if (validForm.subject || !subject) {
      error = true;
    }
    if (validForm.message || !message) {
      error = true;
    }
    if (error) {
      setTypeMsg('error')
      return false
    }
    setTypeMsg('success')
    return true
  }

  return (
    <div className='containerForm'>
      <div>
        <FormControl>
          <TextField id="form-name" label="Your Name" size="small" 
            value={name} onChange={(e) => setName(e.target.value)} 
            onBlur={() => validInput(name, 'name')}
            error={validForm.name}
            helperText={validForm.name ? `The field is required` : null}
          />
        </FormControl>

        <FormControl>
          <TextField id="form-email" label="Your Email" size="small" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validInput(email, 'email')}
            error={validForm.email}
            helperText={validForm.email ? `The e-mail address is invalid` : null}
          />
        </FormControl>

        <FormControl>
          <TextField id="form-subject" label="Subject" size="small" 
            value={subject} onChange={(e) => setSubject(e.target.value)} 
            onBlur={() => validInput(subject, 'subject')}
            error={validForm.subject}
            helperText={validForm.subject ? `The field is required` : null}
          />
        </FormControl>

        <FormControl>
          <TextField id="form-mensagem" label="Your Message" size="small" multiline 
            rows="5" value={message} onChange={(e) => setMessage(e.target.value)} 
            onBlur={() => validInput(message, 'message')}
            error={validForm.message}
            helperText={validForm.message ? `The field is required` : null}
          />
        </FormControl>

        <div className='formAction'>
          <Button variant="outlined" color="secondary" onClick={() => submit()}>
            Submit
          </Button>
          {formMsg ? 
            <p className={typeMsg === 'error' ? typeMsg : typeMsg === 'success' ? typeMsg : ''}>
              {formMsg}
            </p> 
            : ''
          }
        </div>
        
      </div>
    </div>
  );
}

export default ContactForm;
