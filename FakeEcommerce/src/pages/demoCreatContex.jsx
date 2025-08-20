import {createContext, use,useReducer} from 'react'
import { useOutletContext } from "react-router"
import { useDemoContext } from './Mainwork'
import { useEffect } from "react";






// Reducer function
const handleProduct = (state, action) => {
  switch (action.type) {
    case "Men's clothing":
      return action.payload.filter(
        p => p.category && p.category.toLowerCase() === "men's clothing"
      )
    case "Women's clothing":
      return action.payload.filter(
        p => p.category && p.category.toLowerCase() === "women's clothing"
      )
    case "Electronics":
      return action.payload.filter(
        p => p.category && p.category.toLowerCase() === "electronics"
      )
    case "Jewelery":
      return action.payload.filter(
        p => p.category && p.category.toLowerCase() === "jewelery"
      )
    case "Home":
      return action.payload // all products
    default:
      return state
  }
}

export const Categories = ({ categories, dispatch, products }) => {
    
  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-4">
      <button
        className="btn btn-ghost text-xl"
        onClick={() => dispatch({ type: "Home", payload: products })}
      >
        All
      </button>
      {categories.map(category => (
        <button
          className="btn btn-ghost text-xl"
          key={category}
          onClick={() =>
            dispatch({
              type: category.charAt(0).toUpperCase() + category.slice(1),
              payload: products,
            })
          }
        >
          {category}
        </button>
      ))}
    </div>
  )
}

// export const Body = () => {
//   const { products ,categories,incart, handlebutton} = useDemoContext() || {}

//   // Use reducer with initial state = all products
//   const [filteredProducts, dispatch] = useReducer(handleProduct, products)

//   return (
//     <>
//       {/* Filter buttons */}
//       {/* <div className="flex gap-2 mb-4">
//         <button onClick={() => dispatch({ type: "Home", payload: products })}>All</button>
//         <button onClick={() => dispatch({ type: "Men", payload: products })}>Men</button>
//         <button onClick={() => dispatch({ type: "Women", payload: products })}>Women</button>
//         <button onClick={() => dispatch({ type: "Electronics", payload: products })}>Electronics</button>
//         <button onClick={() => dispatch({ type: "Jewelery", payload: products })}>Jewelery</button>
//       </div> */}
//       <Categories categories={categories}dispatch={dispatch} products={products}/>

//       <div className="flex flex-col">
//         {filteredProducts.map(product => {
//           const item = incart.find(i => i.product.id === product.id)
//           const count = item ? item.count : 0

//           return (
//             <div className="card bg-base-100 w-96 shadow-sm mb-4" key={product.id}>
//               <figure>
//                 <img src={product.image} alt={product.title} />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">{product.title}</h2>
//                 <p>{product.description}</p>
//                 <h2 className="card-title">${product.price}</h2>
//                 <div className="card-actions justify-end">
//                   {count === 0 ? (
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handlebutton(product, "increase")}
//                     >
//                       Add to Cart
//                     </button>
//                   ) : (
//                     <div className="flex gap-2 items-center">
//                       <button
//                         className="btn btn-secondary"
//                         onClick={() => handlebutton(product, "decrease")}
//                       >
//                         -
//                       </button>
//                       <span>{count}</span>
//                       <button
//                         className="btn btn-secondary"
//                         onClick={() => handlebutton(product, "increase")}
//                       >
//                         +
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }



export const Body = () => {
  const { products, categories, incart, handlebutton } = useDemoContext() || {}

  // Use reducer with initial state = all products
  const [filteredProducts, dispatch] = useReducer(handleProduct, products || [])

  useEffect(() => {
    if (products?.length > 0) {
      dispatch({ type: "Home", payload: products });
    }
  }, [products]);

  return (
    <div className="p-6">
      {/* Category filter buttons */}
      <Categories categories={categories} dispatch={dispatch} products={products} />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => {
          const item = incart.find((i) => i.product.id === product.id)
          const count = item ? item.count : 0

          return (
            <div
              className="card bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden"
              key={product.id}
            >
              {/* Product Image */}
              <figure className="h-52 flex justify-center items-center bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-48 object-contain"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body p-4 flex flex-col justify-between">
                <h2 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
                <h2 className="text-xl font-bold text-green-600 mt-2">
                  ${product.price}
                </h2>

                {/* Cart buttons */}
                <div className="card-actions mt-4">
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

