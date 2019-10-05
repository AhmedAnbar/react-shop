import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, icon,  ...otherProps}) => {
  return (
    <button 
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
      {...otherProps}
    >
      {icon ? 
      <i className={icon}></i>
      :
      null
      }
      {children}
    </button>
  )
}

export default CustomButton