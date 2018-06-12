import React from 'react'
import './Link.css'

const Link = ({ action, logo, block, text, children, ...rest }) =>
  <div className={block ? 's-link-block-border' : 's-link-block'} {...rest}>
    <a onClick={action} className="s-link-highlighted" >{text || children}</a>
    {logo ?<img className={block ? "s-link-img-resize-block" :
     "s-link-img-resize-no-block"}
     src={logo} alt="logo link" /> : ''}
  </div>

export default Link
