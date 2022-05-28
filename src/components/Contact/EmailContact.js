import React, { useState } from 'react'
import Title from '../Title'
import { ContactFormWrapper } from '../../css'
import { emailStrings } from './ContactStrings'
import validator from 'validator'
import { gql, useMutation } from '@apollo/client'

export const REGISTER_VISITOR_INTEREST = gql`
  mutation addVisitorDetails(
    $name: String!
    $email: String!
    $message: String
  ) {
    addVisitorDetails(name: $name, email: $email, message: $message) {
      code
      success
      message
    }
  }
`

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isValid, setIsValid] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value

    setIsValid(validator.isEmail(email))
    setEmail(email)
  }

  const [addVisitorDetails] = useMutation(REGISTER_VISITOR_INTEREST, {
    variables: { name: name, email: email, message: message },
    onCompleted: (data) => {
      console.log(`onCompleted: ${data}`)
      setName('')
      setEmail('')
      setMessage('')
    },
    onError: (error) => {
      console.log(`onError: ${error}`)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${name}, ${email}, ${message}`)
    addVisitorDetails(name, email, message)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="formControl"
          placeholder={emailStrings.namePlaceholder}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="Email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="formControl"
          placeholder={emailStrings.emailPlaceholder}
          onChange={(e) => validateEmail(e)}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="10"
          className="formControl"
          placeholder={emailStrings.messagePlaceholder}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      {name && isValid === true ? (
        <div>
          <input
            type="submit"
            value={emailStrings.submitText}
            className="submit"
          />
        </div>
      ) : (
        <p>{emailStrings.notValidPlaceholder}</p>
      )}
    </form>
  )
}

const EmailContact = () => {
  return (
    <section>
      <Title title="Contact us" subtitle="now" />
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </section>
  )
}

export default EmailContact
