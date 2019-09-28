import React from 'react'
import './PhotoButton.css'

export default function PhotoButton (props) {
     return <img className={'img-button' + (props.selected ? ' selected': '') } onClick={props.action} src={props.src} alt={props.alt}/>
}
