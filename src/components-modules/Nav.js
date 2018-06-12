import React from 'react'
import Button from '../components-modules/Button'

import btnBurger from '../icon/btn_burger.svg'
import btnBack from '../icon/btn_back.svg'
import './Button.css'
import './Nav.css'

const Nav = ({ actionBurger, actionBack, children, ...rest }) =>
  <div {...rest}>
    {children}
    <Button action={actionBurger} icon={btnBurger} imgHeight="6" />
    <h1>Siouplaît!</h1>
    <Button action={actionBack} icon={btnBack} imgHeight="6" />
  </div>

export default Nav
