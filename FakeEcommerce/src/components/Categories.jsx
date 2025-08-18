import { useState, useEffect } from "react"
import { useOutletContext } from "react-router"
import { Link } from "react-router"

export const Categories = ({categories}) => {
  
  // const [categories, setCategories] = useState([])
  
  //   useEffect(() => {
  //     const fetchdatacat = async () => {
  //     const response = await fetch('https://fakestoreapi.com/products/categories')
  //     const categories = await response.json()
  //     setCategories(categories)
  //   }
  //   fetchdatacat()
  // }, [])

  return (
    <div className="flex-2">
      {categories.map(category => (
        <Link
          className="btn btn-ghost text-xl"
          to={`/${category}`}
          key={category}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}