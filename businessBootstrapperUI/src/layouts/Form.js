import React from 'react'
import { render } from 'react-dom'
import Styles from '../assets/Styles/Styles'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const FormLayout = () => (
  <Styles>
    <h1>Create your businesses</h1>
    
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <Field
              name="Name"
              component="input"
              type="text"
              placeholder=""
            />
          </div>  
          <div>
            <label>business</label>
            <div>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="1"
                />{' '}
                URL Shortener
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="2"
                />{' '}
                ECommerce
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="3"
                />{' '}
                Messenger
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="4"
                />{' '}
                Social Media 
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="5"
                />{' '}
                Streaming 
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="6"
                />{' '}
                Cloud File System 
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="7"
                />{' '}
                Wallet
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="8"
                />{' '}
                Payment Gateway      
                </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="9"
                />{' '}
                Code Sharing
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="10"
                />{' '}
                VoIP Calling
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="11"
                />{' '}
                Food Ordering
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="12"
                />{' '}
                Appointment Booking
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="13"
                />{' '}
                Hotel Booking
              </label>
              <label>
                <Field
                  name="business"
                  component="input"
                  type="checkbox"
                  value="14"
                />{' '}
                Git Versioning Control
              </label>
            </div>
          </div>
         
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
)


  export default FormLayout;