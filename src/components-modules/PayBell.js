import React from 'react'
import './PayBell.css'
import Bell from '../icon/Bell_component.png'

const PayBell = ({ children, ...rest }) =>
    <div className="s-bottom-right-box">
        <img style={{ height: "7em" }} src={Bell} alt="BellIcon"/>
    </div>

export default PayBell