import React from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase-util'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    } catch(error) {
      console.log(error)
    }

  }

  handleChange = event => {
    const {value, name} = event.target

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
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
            <CustomButton type='submit' icon='fa fa-sign-in'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn icon='fa fa-google'>Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn