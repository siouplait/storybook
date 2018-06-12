import React from 'react'
import './Button.css'

const Button = ({ action, imgHeight, classIcon, icon, text, children, className }) =>
  <button onClick={action} className={text || children ? `${className} s-btn` : `${className} s-btn-icon`}>
    {text || children}
    {
      icon ? <img 
      src={icon} 
      style={{ height: imgHeight + "vh"}} 
      className={classIcon ? classIcon : ""} 
      alt="icon" /> : ''
    }
  </button>

export default Button
