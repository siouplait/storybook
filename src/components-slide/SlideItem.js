import React from 'react'

import Button from '../components-modules/Button'
import Link from '../components-modules/Link'
import Itemblock from '../components-modules/Itemblock'

import btnAdding from "../icon/btn_adding.svg"
import btnRemove from "../icon/btn_remove.svg"

import './SlideItem.css'

const SlideItem = ({ src, dataItem }) =>
  <div className="s-block-slide-item">

    <div className="s-thumbnail s-thumbnail-slide">
      <img className="s-img-thumbnail" src={src} style={{width: '9em'}} alt="item image" />
      <p>{dataItem}</p>
    </div>

    <div className="s-com-item">
      <textarea name="" id="" cols="25" rows="6">
        Un commentaire à ajouter ? vous avez 140 caractères
      </textarea>
    <Link className="s-mt-2" text="MODIFIER" />
    <p>= Cadre note</p>
    </div>

    <div className="s-item-count s-mt-5">
      <Button icon={btnRemove} iconHeight="3em" />
      <p>N°</p>
      <Button icon={btnAdding} iconHeight="3em" />
    </div>
  </div>

export default SlideItem