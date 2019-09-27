import React from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase-util'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            handelChange={this.handleChange}
            required />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            handelChange={this.handleChange}
            required />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn