import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button className='formBtn' disabled = {props.isDisabled} onClick={props.event}>{props.btnText}</button>
  )
}
