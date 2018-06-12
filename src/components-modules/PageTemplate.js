import React from 'react'
import './PageTemplate.css'

const PageTemplate = ({ children, ...rest }) => {
  console.log({children})
  return (
    <div {...rest}>
      {children.map(e => <div className="s-box">{e}</div>)}
    </div>
  )
}

export default PageTemplate
