"use client"
import React from "react"

const AddToCart = () => {
  return (
    <main>
      <h1>Add To Cart</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("Clicked add to cart")
          alert("Added to cart")
        }}
      >
        ADD to cart
      </button>
    </main>
  )
}

export default AddToCart
