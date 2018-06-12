import React from 'react'
import Button from './Button'

import './Input.css'

const Input = ({ action, icon, imgHeight, ...rest }) =>
  <div className="s-block-input-logo">
    <input className="s-input" {...rest}/>
    {icon ? <Button action={action} icon={icon} imgHeight="5.5" /> : ''}
  </div>

export default Input