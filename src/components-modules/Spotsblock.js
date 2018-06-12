import React from 'react'
import './Spotsblock.css'

const Spotsblock = ({ src, children }) =>
  <div className="thumbnail">
    <img className="img-thumbnail" src={src} alt="item image" />
    <p className="detail-thumbnail">{children}</p>
  </div>

export default Spotsblock