import React from 'react'
import Button from './Button'

import './Input.css'

const Input = ({ icon, imgHeight, ...rest }) =>
  <div className="s-block-input-logo">
    <input className="s-input" {...rest}/>
    {icon ? <Button icon={icon} imgHeight="5.5" /> : ''}
  </div>

export default Input