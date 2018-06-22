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
import LogoSpot from '../src/components-modules/LogoSpot'


// icon/logo
import btnBurger from '../src/icon/btn_burger.svg'
import btnBack from '../src/icon/btn_back.svg'
import btnSearch from '../src/icon/btn_search.svg'
import btnAdding from '../src/icon/btn_adding.svg'
import btnRemove from '../src/icon/btn_remove.svg'
import logoHeart from '../src/icon/logo_heart.svg'
import logoMain from '../src/icon/logo_main2.png'
import logoQr from '../src/icon/logo_qr.png'
import logoNfcn from '../src/icon/logo_nfcn.png'
import logoSioup from '../src/icon/logo_sioup.png'

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
        className="s-mt-3"
        src={logoMain}
        alt="button burger"
        style={{ height: '12em' }}
      />
      <Button text="PASSER COMMANDE" position="s-mt-3" className="s-black" />
    </PageTemplate>
  )
  .add('Page 2', () =>
    <PageTemplate className="s-bg-orange">
      <img 
        className="s-mb-3 s-mt-2"
        src={logoMain} 
        alt="logo principal"
        style={{ height: 8 + 'em' }}
      />
      <div className="s-block-landscape s-mb-4">
        <Button text="Facebook Connect" position="s-mb-2" className="s-facebook" />
        <Button text="S'inscrire" position="" />
      </div>
      <Link className="s-fixed-b s-mb-1">
        Commander sans<br/> compte
      </Link>
    </PageTemplate>
  )
  .add('Page 3', () =>
    <PageTemplate nav="s-nav-noback s-no-title" className="s-bg-orange">
      <img 
        className="s-fixed-t s-mt-1"
        src={logoMain}
        alt="logo"
        style={{ height: "7em" }}
      />
      <div className="s-block-landscape s-mt-5 s-mb-3" >
        <Button position="s-mt-3" text="Scanner le QR Code" logo={logoQr} logoHeight="15" />
        <Button text="Androïd : NFC" logo={logoNfcn} logoHeight="15" />
      </div>
      <Link block className="s-fixed-b" text="Commander sans compte" logo={btnSearch} imgHeight="5" />
    </PageTemplate>
  )
  .add('Page 3.1', () =>
  <PageTemplate nav className="s-bg-orange">
    <p className="s-px-2 s-mt-5">
      <span className="s-text-bold">Siouplaît</span> souhaite accéder à votre appareil photo
    </p>
    <div className="s-block-landscape s-mt-5" sylte={{position : "bottom"}}>
      <img
        src={logoMain}
        alt="logo"
        style={{ height: "4em" }}
      />
      <Button icon={btnBack} iconHeight="4" className="s-mt-5" />
    </div>
  </PageTemplate>
)
  .add('Page 4', () =>
    <PageTemplate nav className="s-bg-orange">
      <img
        className="s-mt-3"
        src={logoNfcn}
        alt="logo QR"
        style={{ height: "5em" }}
      />
      <p className="s-px-2">
        Posez votre <span className="s-text-bold">téléphone</span> sur les <span className="s-text-bold">jolis ronds connectés</span>,
        et découvrez directement le <span className="s-text-bold">menu du spot où vous êtes</span>
      </p>
      <div className="s-block-landscape s-mt-3">
        <img
          src={logoMain}
          alt="logo"
          style={{ height: "4em" }}
        />
        <Button icon={btnBack} iconHeight="4" />
      </div>
    </PageTemplate>
  )
  .add('Page 5', () =>
    <PageTemplate nav className="s-bg-white">
      <p>Template test</p>
      <p>test</p>
    </PageTemplate>
  )
  .add('Page Spots', () =>
    <PageTemplate nav className="s-bg-white">
      <Input
        icon={btnSearch}
        iconHeight="1.3"
        placeholder="Rechercher un spot"
        style={{margin:"4vw"}}
      />
      <Link text="MES SPOTS" logo={logoHeart} imgHeight="4.5" />
       <div className="s-mt-1 s-d-flex">
        <LogoSpot src="../src/icon/munchies.png" />
        <LogoSpot src="../src/icon/cheesers.png" />
        <LogoSpot src="../src/icon/munchies.png" />
      </div>
      <Button icon={btnBack} iconHeight="5" class="s-btn-icon" style={{backgroundColor:"#FFB72D", width:"100%", alignItem:"center", height:"28vw", paddingTop:"3vw",marginTop:"9vw"}} />
    </PageTemplate>
  )
  .add('Page Menu card', () =>
    <PageTemplate className="s-bg-white">
      <Nav full className="s-nav-menu" />
      <Headertext title="NOM DU SITE" subtitle="CATEGORY NAME"/>
      <Input
        icon={btnSearch}
        iconHeight="1.3"
        placeholder="Search"
      />

      <div className="s-mt-1 s-d-flex">

        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
        <Itemblock src="http://via.placeholder.com/150x150">
          Name item Name item Name item PRIX
        </Itemblock>
       
      </div>
    </PageTemplate>
  )
  .add('Logout Page', () =>
    <PageTemplate className="s-bg-orange-2">
      <h1 className=" merci s-mt-1 s-mb-0"> #EtMerci! </h1>
      <p className="s-mt-0 s-ml-05 s-mr-05"> Le "Name of the place" prépare votre commande.
        <br/>Vous recevrez une notification quand celle-ci sera prête.
      </p>
      <img src={logoMain} alt="button burger 140 x 140" height="150"
        width="150" />
      <Button className="s-btn s-black s-mt-1" onClick={action('clicked')}>
        PARTAGER <img className="s-icon-symetric" src={btnBack} alt="button share 30 x 30" height="30px"
        width="30px" />
      </Button>
      <img style={{ transform: 'rotate(-11deg)'}} src={logoSioup} alt="button burger 140 x 140" className="s-mt-2" height='50' />
      <p className="s-mt-2 s-ml-05 s-mr-05 s-mb-3"> MAIS C'EST NOUS QUI VOUS REMERCIONS </p>
    </PageTemplate>
  )


export default Button
