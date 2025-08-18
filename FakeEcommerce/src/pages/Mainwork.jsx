import { Outlet, Routes,Route } from "react-router"
import { useEffect ,useState} from "react"
import { useOutletContext } from "react-router"
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'
import { Categories } from '../components/Categories'
export const Mainwork = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [incart, setIncart] = useState([])
  const [counter, setCounter] = useState(0)
  const [sumPrice, setSumPrice] = useState(0)

  const handlebutton=(product)=>{
         setIncart(prev => [...prev, product])
         setCounter(prev => prev + 1)
         setSumPrice(prev =>prev+ product.price)

}    
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      setProducts(products)
    }
    fetchdata()

    const fetchdatacat = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const categories = await response.json()
      setCategories(categories)
    }
    fetchdatacat()
  }, [])

  return (
    <>
    <Nav counter= {counter} price= {sumPrice}/>
    <Categories categories={categories}/>
    <Outlet context={{ products, categories, incart, setIncart ,counter, setCounter , handlebutton}} />
    <Footer/>
    </>

  )
}