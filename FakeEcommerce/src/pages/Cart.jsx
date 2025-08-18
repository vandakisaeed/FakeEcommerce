import { useOutletContext } from "react-router"


export const Cart = () => {
  const { incart = [] , counter} = useOutletContext() || {}

  return (
    <>
      <h1>Cart shop</h1>
      <div className="flex">
        <h2>{counter} : Items</h2>
        {incart.map(product => (
          <div className="card bg-base-100 w-96 shadow-sm" key={product.id}>
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <h2 className="card-title">{product.price}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}