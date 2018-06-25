import React from 'react'

import Button from '../components-modules/Button'
import Link from '../components-modules/Link'

import logoHeart from "../icon/logo_heart.svg"
import logoThumb from "../icon/like_thumb.png"

import './SlideMenu.css'

const SlideMenu = () =>
  <div className="s-block-slide-menu">
    
    <div className="s-menu-landscape">
      <img className="s-mt-5" src={logoHeart} style={{ width: '4em', borderRadius: '100px', backgroundColor: 'silver' }} />
      <p>Say my name</p>
    </div>
    
    <Link text="MES SPOTS" logo={logoHeart} imgHeight="1.3em" style={{filter: 'invert(100%)', color:'black'}}/>
    
    <div>
      <ul className="s-link-menu">
        <li><a href="">Historique des commandes</a></li>
        <li><a href="">Moyens de paiement</a></li>
        <li><a href="">Aide</a></li>
        <li><a href="">Paramètres</a></li>
        <li><a href="">Mentions légales</a></li>
      </ul>
    </div>

    <div className="s-menu-landscape s-fixed-b s-mb-2">
      <p>Pas Siouplait dans ce spot ? <br /> on arrive !</p>
      <Button icon={logoThumb} iconHeight="3em" />
      <p><span className="s-menu-year" >©</span> Siouplaît - <span className="s-menu-year">2018</span></p>
    </div>
    
  </div>

export default SlideMenu