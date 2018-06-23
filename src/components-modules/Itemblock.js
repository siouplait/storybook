import React from 'react'
import './Itemblock.css'

import img1 from '../img/LogoPoulet.png'

const Itemblock = ({ children }) =>
  <div className="s-thumbnail">
    <img className="s-img-thumbnail" src={img1} alt="item image"/>
    <p className="s-detail-thumbnail">{children}</p>
  </div>

export default Itemblock