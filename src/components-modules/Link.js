import React from 'react'
import './Link.css'

const Link = ({ imgHeight, action, logo, block, text, children, ...rest }) =>
  <div className={block ? 's-link-block-border' : 's-link-block'} {...rest}>
    <a onClick={action} className="s-link-highlighted" >{text || children}</a>
    {logo ? <img className="s-link-img-resize" style={{height: imgHeight + "vh"}} src={logo} alt="logo link" /> : ''}
  </div>

export default Link
