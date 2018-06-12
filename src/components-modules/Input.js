import React from 'react'
import Button from './Button'

import './Input.css'

const Input = ({ icon, imgHeight, ...rest }) =>
  <div className={icon ? "s-block-input-logo" : ""}>
    <input {...rest}/>
    <Button icon={icon} imgHeight="5.5" />
  </div>

export default Input