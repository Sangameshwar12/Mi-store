import React from 'react'
import ProductReviewsCard from "./ProductReviewsCard.js"
import "../styles/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        
        {productReviews.map((item, index) => (
            <ProductReviewsCard image = {item.image} price = {item.price} name = {item.name} review = {item.review} index = {index} key = {item.image} />
        ))}

    </div>
  )
}

export default ProductReviews