import React, { useRef } from 'react'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import './AddProductForm.css'

function AddProductForm(props) {
    const productTitle = useRef(null)
    const productPrice = useRef(null)
    const productQuantity = useRef(null)
    return (
        <div>
            <h1>Add form</h1>
            <form className='add__form'>
                <Input
                    holderText = {'Product title'}
                    refName = {productTitle}
                    />
                <Input
                    holderText = {'Price'}
                    refName = {productPrice}
                    type = {'number'}
                    />
                <Input
                    holderText = {'Quantity'}
                    refName = {productQuantity}
                    type = {'number'}
                    />
                <Button
                    btnText = {'Add'}
                    event = {(e) => {
                        e.preventDefault()
                        props.event(productTitle.current.value, productPrice.current.value, productQuantity.current.value)
                    }
                       
                    }
                    />
            </form>
        </div>
    )
}

export default AddProductForm
