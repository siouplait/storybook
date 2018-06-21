import React from 'react'
import './Categoryblock.css'

const Categoryblock = ({ src, children }) =>
  <div className="thumbnailcategory">
    <img className="img-thumbnail" src={src} alt="item image" style={{ height: "28vw"}}/>
    {children && <p className="detail-thumbnail">{children}</p>}
  </div>

export default Categoryblock