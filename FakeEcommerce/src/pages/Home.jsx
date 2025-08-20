import { useState } from "react"
import { useOutletContext } from "react-router"


export const Home = () => {
 // const products = Array.isArray(useOutletContext()) ? useOutletContext() : []
  const { products = [], setIncart, incart = [],setCounter,handlebutton} = useOutletContext() || {}

  return (
    <>
      <h1>Home</h1>
      <div className="flex flex-col">
              {products.map(product => {

                const item = incart.find(i => i.product.id === product.id);
                const count = item ? item.count : 0;

         return (
 
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
            
           {/*  <button className="btn btn-primary" onClick={() => handlebutton(product)}>
                  Add to Cart
            </button> */}


             {count === 0 ? (
                    <button className="btn btn-primary" onClick={() => handlebutton(product,"increase")}>
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <button className="btn btn-secondary" onClick={() => handlebutton(product,"decrease")}>-</button>
                      <span>{count}</span>
                      <button className="btn btn-secondary" onClick={() => handlebutton(product, "increase")}>+</button>
                    </div>
                  )}
            </div>
          </div>
        </div>
      )})}
      </div>

    </>
  )
}