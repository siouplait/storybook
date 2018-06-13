import React from 'react'
import './Itemblock.css'

const Itemblock = ({ src, children }) =>
  <div className="thumbnail">
    <img className="img-thumbnail" src={src} alt="item image" style={{ height: "14vh"}}/>
    <p className="detail-thumbnail">{children}</p>
  </div>

export default Itemblock