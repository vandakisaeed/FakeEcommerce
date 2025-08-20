import { useOutletContext } from "react-router"


// export const Cart = () => {
//   const { incart = [] , counter} = useOutletContext() || {}

//   return (
//     <>
//       <h1>Cart shop</h1>
//       <div className="flex">
//         <h2>{counter} : Items</h2>
//         {incart.map(({ product, count }) => (
//           <div className="card bg-base-100 w-96 shadow-sm" key={product.id}>
//             <figure>
//               <img src={product.image} alt={product.title} />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{product.title}</h2>
//               <p>{product.description}</p>
//               <h2 className="card-title">{product.price}</h2>
//               <h2 className="card-title">Quantity: {count}</h2>
//             </div>
//           </div>
//         ))}
//           <div className="card-actions justify-end">
//                 <button className="btn btn-primary">Buy Now</button>
//           </div>
//       </div>
//     </>
//   )
// }


export const Cart = () => {
  const { incart = [], counter,sumPrice,handlebutton } = useOutletContext() || {}

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Cart Shop</h1>

{/* Cart Summary */}
<div className="w-full max-w-md mx-auto mb-6 bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
  <h2 className="text-2xl font-bold text-gray-800 text-center">
    🛒 Cart Summary
  </h2>

  <div className="flex justify-between text-lg font-medium text-gray-700">
    <span>Items in Cart:</span>
    <span className="font-semibold text-gray-900">{counter}</span>
  </div>

  <div className="flex justify-between text-lg font-medium text-gray-700">
    <span>Total Price:</span>
    <span className="font-semibold text-green-600">${sumPrice.toFixed(2)}</span>
  </div>

  <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">
    Buy Now
  </button>
</div>


      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {incart.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty 🛍️</p>
        ) : (
          incart.map(({ product, count }) => (
            
            <div
              key={product.id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition p-4 rounded-2xl"
            >
              <figure className="h-48 flex justify-center items-center bg-gray-50 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-40 object-contain"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <h2 className="text-lg font-bold text-green-600">
                    ${product.price}
                  </h2>
                  <span className="badge badge-secondary text-sm">
                    Qty: {count}
                  </span>


                </div>
                  {count === 0 ? (
                    <button
                      className="btn btn-primary w-full"
                      onClick={() => handlebutton(product, "increase")}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex gap-3 items-center w-full justify-between">
                      <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => handlebutton(product, "decrease")}
                      >
                        -
                      </button>
                      <span className="font-medium">{count}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handlebutton(product, "increase")}
                      >
                        +
                      </button>
                    </div>
                  )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}