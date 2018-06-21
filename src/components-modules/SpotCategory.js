import React from 'react'
import Categoryblock from './Categoryblock'

const SpotCategory = ({ items = [] }) =>
  <div className="s-mt-1 s-d-flex-column">
    {items.map((item, index) =>
      <Categoryblock key={index} src="http://via.placeholder.com/601x295">
      </Categoryblock>)}
  </div>
export default SpotCategory
