import React from 'react'
import './PageTemplate.css'

const PageTemplate = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      {children.map(e => {
        return e.props.full ? e : <div className="s-box">{e}</div> 
      })
      }
    </div>
  )
}

export default PageTemplate
