import React from 'react'
const Cart = ({title,category,description,img}) => {
  return (
    <div className='cart-container'>
      <div className="container-box">
          <h1>{category}</h1>
          <img src={img} alt="img1" />
          <p>{description}</p>
      </div>
    </div>
  )
}

export default Cart
