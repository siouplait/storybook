import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

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
import Itemblock from '../src/components-modules/Itemblock'
import Headertext from '../src/components-modules/Headertext'


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
    <Button icon={btnBurger} iconHeight="10" />)

  .add('Btn back', () =>
    <Button icon={btnBack} iconHeight="7" />)

  .add('Btn black share', () =>
    <Button 
    text="PARTAGER"
    icon={btnBack}
    iconHeight = "7"
    classIcon="s-icon-symetric"
    className="s-black" />)

  .add('Btn search', () =>
    <Button icon={btnSearch} iconHeight="7" />)

  .add('Btn adding', () =>
    <Button icon={btnAdding} iconHeight="7"/>)

  .add('Btn remove', () =>
    <Button icon={btnRemove} iconHeight="7" />)
  
  .add('Btn and logo', () =>
    <Button text="salut" logo={logoMain} logoHeight="25" />)

// INPUT stories
storiesOf('Input', module)
  .add('Input standard', () =>
    <Input placeholder="Standard input" />)

  .add('Input search', () =>
    <Input
      icon={btnSearch}
      iconHeight="5"
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
      <Button text="PASSER COMMANDE" position="s-mt-4" className="s-black" />
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
      <Button text="Facebook Connect" position="s-mt-2" className="s-facebook" />
      <Button text="S'inscrire" position="s-mt-2" />
      <Link className="s-fixed-b s-mb-3">
        Commander sans<br/> compte
      </Link>
    </PageTemplate>
  )
  .add('Page 3', () =>
    <PageTemplate className="s-bg-orange">
      <Nav full className="s-nav-menu s-nav-noback s-no-title" />
      <img className="s-fixed-t s-mt-1 s-mb-2" src={logoMain} alt="logo" style={{ height: "23vh" }} />
      <Button style={{ marginTop: "7em" }} text="Scanner le QR Code" logo={logoQr} logoHeight="15" />
      <Button style={{ marginTop: "1em" }} text="Androïd : NFC" logo={logoNfcn} logoHeight="15" />
      <Link full block className="s-mt-2" text="Commander sans compte" logo={btnSearch} imgHeight="5" />
    </PageTemplate>
  )
  .add('Page 4', () =>
    <PageTemplate className="s-bg-orange">
      <Nav full className="s-nav-menu s-nav-noback"/>
      <img className="s-mt-4" src={logoNfcn} alt="logo QR" style={{ height: "14vh" }} />
      <p className="s-px-2">
        Posez votre <span className="s-text-bold">téléphone</span> sur les <span className="s-text-bold">jolis ronds connectés</span>,
        et découvrez directement le <span className="s-text-bold">menu du spot où vous êtes</span>
      </p>
      <p><img src={logoMain} alt="logo" style={{ height: "20vh" }} /></p>
      <Button className="s-my-2" icon={btnBack} iconHeight="14" />
    </PageTemplate>
  )
  .add('Page 5', () =>
    <PageTemplate className="s-bg-white">
      <Nav full className="s-nav-menu s-nav-noback" />
      <p>salut</p>
    </PageTemplate>
  )
  .add('Page Menu card', () =>
    <PageTemplate className="s-bg-white">
      <Nav full className="s-nav-menu" />
      <Headertext title="NOM DU SITE" subtitle="CATEGORY NAME"/>
      <Input
        icon={btnSearch}
        iconHeight="5"
        placeholder="Standard input"
      />

      <div full className="s-d-flex" style={{backgroundColor: "aqua"}}>

        <Itemblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/350x150">
          Name item Name item Name item PRIX
        </Itemblock>
       
      </div>
    </PageTemplate>
  )

export default Button
