import React from 'react'
import './Itemblock.css'

const Itemblock = ({ src, children }) =>
  <div className="s-thumbnail">
    <img className="s-img-thumbnail" src={src} alt="item image" style={{ height: "28vw"}}/>
    <p className="s-detail-thumbnail">{children}</p>
  </div>

export default Itemblock