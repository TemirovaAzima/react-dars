import React from 'react'
const ProductInfo=()=>{
    const laptop={
        name:"msi",
        price: 1200,
        isAvailable: 'Savdoda'
    }
    return (
        <div>

            <ul>
                <li>{laptop.name}</li>
                <li>{laptop.price}</li>
                <li>{laptop.isAvailable}</li>
            </ul>
        </div>
    )
}
export default ProductInfo;