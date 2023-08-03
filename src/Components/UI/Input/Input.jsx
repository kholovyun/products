import React from 'react'

export default function Input(props) {
  return (
    <input
        value={props.value} 
        onChange={props.onChange} 
        ref={props.refName} 
        placeholder={props.holderText} 
        className='addForm__input'
        type={props.type}
    />
  )
}
