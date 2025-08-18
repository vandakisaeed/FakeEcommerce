import { useState } from "react"
import { useOutletContext } from "react-router"


export const Home = () => {
 // const products = Array.isArray(useOutletContext()) ? useOutletContext() : []
  const { products = [], setIncart, incart = [],setCounter,handlebutton} = useOutletContext() || {}

  return (
    <>
      <h1>Home</h1>
      <div className="flex flex-col">
              {products.map(product => (
        <div className=" card bg-base-100 w-96 shadow-sm" key={product.id}>
          <figure>
            <img
              src={product.image}
              alt={product.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <h2 className="card-title">{product.price}</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => handlebutton(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
      </div>

    </>
  )
}