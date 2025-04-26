import React from 'react'
const Cart = ({title,category,description,img}) => {
  return (
    <div>
          <h1>{category}</h1>
          <img src={img} alt="img1" />
          <p>{description}</p>
    </div>
  )
}

export default Cart
