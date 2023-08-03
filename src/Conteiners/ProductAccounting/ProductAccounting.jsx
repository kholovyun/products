import React, { useState } from 'react'
import ProductTable from '../../Components/ProductsTable/ProductTable'
import AddProductForm from '../../Components/AddProductForm/AddProductForm'
import './ProductAccounting.css'

function ProductAccounting() {
    const [products, setProducts] = useState([
        {
            productName: 'Sofa',
            productPrice: 299,
            quantity: 32 
        },
        {
            productName: 'Bed',
            productPrice: 823,
            quantity: 93 
        },
        {
            productName: 'Chair',
            productPrice: 155,
            quantity: 3000 
        }
    ])
    const [sortPrice, setSortPrice] = useState(false)
    const [sortQuant, setSortQuan] = useState(false)
    const [sortTitle, setSortTitle] = useState(false)
    const removeOneProduct = (index) => {
        let copyProducts = [ ...products]
        copyProducts[index].quantity -= 1
        setProducts(copyProducts)
    }
 
    const addProduct = (newTitle, price, quantity) => {
        if(newTitle ===''){
            alert('wrong input')
            return
        } else if (
            price < 0 || quantity < 0
        ){
            return alert('wrong input')
        }
        let copyProducts = [ ...products]
        let titles = copyProducts.map(product => product.productName)
        let checker = titles.filter(title => title === newTitle)
        if(checker.length === 0){
            if(newTitle === '' || price <= 0 || quantity <= 0){
                alert("Wrong input")
                return
            } else
            if(newTitle === '' && price === '' && quantity === ''){
                alert("Wrong input")
                return
            } else
            if(newTitle === '' || price === '' || quantity === ''){       
                return
            }
            let newProduct = {
                productName: newTitle,
                productPrice: price,
                quantity: quantity 
            }   
            copyProducts.push(newProduct)
        } else {
            copyProducts.forEach(product => {
                if(product.productName === newTitle){
                    product.productPrice = price? price : product.productPrice
                    product.quantity = quantity? parseInt(quantity) + product.quantity: product.quantity
                }
            })
        } 
        setProducts(copyProducts)       
    }
    const sortProductsPrice = (arr) => {
        let newArr = [...arr]
        newArr.sort((a, b) => {
            if(sortPrice? a.productPrice > b.productPrice : a.productPrice < b.productPrice) 
            {return -1}
            if(sortPrice? a.productPrice < b.productPrice : a.productPrice > b.productPrice)
            {return 1}
            return 0

        })
        setSortPrice(!sortPrice)
        setProducts(newArr)
    }
    const sortProductsQuan = (arr) => {
        let newArr = [...arr]
        newArr.sort((a, b) => {
            if(sortQuant? a.quantity > b.quantity : a.quantity < b.quantity) 
            {return -1}
            if(sortQuant? a.quantity < b.quantity : a.quantity > b.quantity)
            {return 1}
            return 0
        })
        setSortQuan(!sortQuant)
        setProducts(newArr)
    }
    const sortProductsTitle = (arr) => {
        let newArr = [...arr]
        newArr.sort((a, b) => {
            if(sortTitle? a.productName.length > b.productName.length  : a.productName.length  < b.productName.length ) 
            {return -1}
            if(sortTitle? a.productName.length  < b.productName.length  : a.productName.length  > b.productName.length )
            {return 1}
            return 0
        })
        setSortTitle(!sortTitle)
        setProducts(newArr)
    }
    return (
        <div className='product__container'>
            <ProductTable
                key = {Math.random()}
                products = {products}
                event = {removeOneProduct}
                sortPrice = {(e) => sortProductsPrice(products)}
                sortQuantity = {(e) => sortProductsQuan(products)}
                sortTitle = {(e) => sortProductsTitle(products)}
            />
            <AddProductForm 
                event = {addProduct}
            />
        </div>
    )
}

export default ProductAccounting
