import React, { Fragment } from 'react'
import './ProductTable.css'
import '../UI/Button/Button'
import Button from '../UI/Button/Button'

export default function ProductTable(props) {
  return (
    <>
    <h1>Product List</h1>
    <table>
        <thead>
            <tr>
                <th>Title <Button
                                 btnText = {<i className="fa-solid fa-arrow-down-short-wide"></i>}
                                 event = {props.sortTitle}                              
                            />
                </th>
                <th>Price <Button
                                btnText = {<i className="fa-solid fa-arrow-down-short-wide"></i>}
                                event = {props.sortPrice}
                                
                            />
                </th>
                <th>InStock <Button
                                 btnText = {<i className="fa-solid fa-arrow-down-short-wide"></i>}
                                 event = {props.sortQuantity}
                                 
                            />
                </th>
            </tr>
        </thead>
        
        {props.products.length !== 0?
            props.products.map((product, index) => {
                return (
                    <Fragment key = {Math.random() * Math.random()/Math.floor(Math.random() * 10000000)}>
                        <tbody>
                            <tr>
                                <td>{product.productName}</td>
                                <td>{product.productPrice}</td>
                                <td>{product.quantity === 0? 'N/A' : product.quantity} <Button 
                                                        key = {Math.random()}
                                                        isDisabled = {product.quantity === 0? true : false} 
                                                        event = {() => props.event(index)} 
                                                        btnText = {'-'}/>
                                </td>
                            </tr>
                        </tbody>                 
                    </Fragment>  
                )            
            })
            :
            <tbody>
                <tr>
                    <td style={{'backgroundColor': 'red'}}>
                        No products here
                    </td>
                </tr>
            </tbody>
        }
    </table>
    </>
    
  )
}
