import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import { withNotes } from '@storybook/addon-notes'

// css
import './stories.css'
import '../src/index.css'
import '../src/class-generic.css'

// components
import Button from '../src/components-modules/Button'
import Input from '../src/components-modules/Input'
import Link from '../src/components-modules/Link'
import Nav from '../src/components-modules/Nav'
import PageTemplate from '../src/components-modules/PageTemplate'
import Spotsblock from '../src/components-modules/Spotsblock'

// icon/logo
import btnBurger from '../src/icon/btn_burger.svg'
import btnBack from '../src/icon/btn_back.svg'
import btnSearch from '../src/icon/btn_search.svg'
import btnAdding from '../src/icon/btn_adding.svg'
import btnRemove from '../src/icon/btn_remove.svg'
import logoMain from '../src/icon/logo_main2.png'
import logoQr from '../src/icon/logo_qr.png'
import logoNfcn from '../src/icon/logo_nfcn.png'
import logoHeart from '../src/icon/logo_heart.svg'

// welcome
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

// BUTTON stories
storiesOf('Button', module)
  .add('Btn principal', () =>
    <Button text="Hello button" />)

  .add('Btn facebook', () =>
    <Button text="Facebook Connect" className="s-facebook" />)

  .add('Btn black', () =>
    <Button text="PASSER COMMANDE" className="s-black" />)

  .add('Btn burger', () =>
    <Button icon={btnBurger} imgHeight="10" />)

  .add('Btn back', () =>
    <Button icon={btnBack} imgHeight="7" />)

  .add('Btn black share', () =>
    <Button 
    text="PARTAGER"
    icon={btnBack}
    imgHeight = "7"
    classIcon="s-icon-symetric"
    className="s-black" />)

  .add('Btn search', () =>
    <Button icon={btnSearch} imgHeight="7" />)

  .add('Btn adding', () =>
    <Button icon={btnAdding} imgHeight="7"/>)

  .add('Btn remove', () =>
    <Button icon={btnRemove} imgHeight="7" />)

// INPUT stories
storiesOf('Input', module)
  .add('Input standard', () =>
    <Input placeholder="Standard input" />)

  .add('Input search', () =>
    <Input
      icon={btnSearch}
      imgHeight="5.5"
      placeholder="Standard input" 
    />)

// LINK stories
storiesOf('Link', module)
  .add('link highlighted', () =>
    <Link>Commander sans <br/> compte</Link>)

  .add('link highlighted with icon', () =>
    <Link text="MES SPOTS" logo={logoHeart} imgHeight="4.5"/>)

  .add('link highlighted with white block', () =>
    <Link text="Commander sans compte" block logo={btnSearch} imgHeight="5" />)

// NAVBAR stories
storiesOf('Nav', module)
  .add('Nav menu without btn back and title', () =>
    <Nav className="s-nav-menu s-nav-noback s-no-title" />)

  .add('Nav menu without btn back', () =>
    <Nav className="s-nav-menu s-nav-noback"/>)

  .add('Nav menu with btn back', () =>
    <Nav className="s-nav-menu" />)

// PAGE stories
storiesOf('Page', module)
  .add('Page 1', () =>
    <PageTemplate className="s-bg-orange">
      <img 
        className="s-mt-5"
        src={logoMain}
        alt="button burger"
        style={{ height: 14 + 'em'}}
      />
      <Button text="PASSER COMMANDE" className="s-mt-4 s-black" />
    </PageTemplate>
  )
  .add('Page 2', () =>
    <PageTemplate className="s-bg-orange">
      <img 
        className="s-mt-2" 
        src={logoMain} 
        alt="logo principal"
        style={{ height: 8 + 'em' }}
      />
      <Button text="Facebook Connect" className="s-mt-2 s-facebook" />
      <Button text="S'inscrire" className="s-mt-2" />
      <Link text="Commander sans \n compte" className="s-mt-2" />
    </PageTemplate>
  )
  .add('Page 3', () =>
    <PageTemplate className="s-bg-orange">
      <Nav className="s-nav-menu s-nav-noback s-no-title" />
      <img className="s-mt-1" src={logoMain} alt="logo 100 x 100" height="100"
        width="100" />
      <img className="s-mt-1" src={logoQr} alt="logo QR" height="80" width="90"/>
      <Button className="s-btn s-mt-05" onClick={action('clicked')}>
        Scanner le QR Code
      </Button>
      <img className="s-mt-2" src={logoNfcn} alt="logo QR" height="80" width="90" />
      <Button className="s-btn" onClick={action('clicked')}>
        Androïd : NFC
      </Button>
      <Link block logo={btnSearch}>
        Rechercher un spot
      </Link>
    </PageTemplate>
  )
  .add('Page 4', () =>
    <PageTemplate className="s-bg-orange">
      <Nav full className="s-nav-menu s-nav-noback"/>
      <div className="s-fixed-b">
        <img className="" src={logoNfcn} alt="logo QR" height="80" width="80" />
        <p className="s-px-2">
          Posez votre <span className="s-bold-light">téléphone</span> sur les <span className="s-bold-light">jolis ronds connectés</span>,
          et découvrez directement le <span className="s-bold-light">menu du spot où vous êtes</span>
        </p>
        <p><img src={logoMain} alt="logo 100 x 100" height="75"
          width="75" /></p>
        <Button className="s-btn-icon s-my-2" onClick={action('clicked')}>
          <img src={btnBack} alt="button back 60 x 60" height="60px"
            width="60px" />
        </Button>
      </div>
    </PageTemplate>
  )
  .add('Page 5', () =>
    <PageTemplate className="s-bg-white">
      <Nav className="s-nav-menu s-nav-noback" />

    </PageTemplate>
  )
  .add('Page Menu card', () =>
    <PageTemplate className="s-bg-white">
      <Nav className="s-nav-menu" />
      <div style={{ marginTop: '4em' }}>
        <h1>NOM DU SPOT</h1>
        <p>CATEGORY NAME</p>
      </div>
      <InputLogo className="s-block-input-logo" style={{ marginTop: '1em' }}>
        <Input className="s-input" placeholder="Search" />
        <Button className="s-btn-icon" onClick={action('clicked')}>
          <img src={btnSearch} alt="button burger 30 x 30" height="20px" width="20px" />
        </Button>
      </InputLogo>
      <div>
        <Spotsblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
                </Spotsblock>
        <Spotsblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
                </Spotsblock>
        <Spotsblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
                </Spotsblock>
        <Spotsblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
                </Spotsblock>
      </div>
    </PageTemplate>
  )

export default Button
