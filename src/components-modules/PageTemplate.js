import React from 'react'
import './PageTemplate.css'

const PageTemplate = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      {children.map((e, i) => {
        return e.props.full ? e : <div key={`s-box-${i}`} className="s-box">{e}</div> 
      })
      }
    </div>
  )
}

export default PageTemplate
