import { Outlet, Routes,Route } from "react-router"
import { useEffect ,useState} from "react"
import { useOutletContext } from "react-router"
import {Nav} from '../components/Nav'
import {Footer} from '../components/Footer'
import { Categories } from '../components/Categories'
import {createContext, use,useReducer} from 'react'
import { Body } from "./demoCreatContex"



export const  Dcontext= createContext()

export const useDemoContext=()=>{
    const context= use (Dcontext)
    if (!context){
        throw new Error('useDemoContext must be used within a DemoContextProvider')
    }
    return context
}

export const Creatcontext = ({ children, value }) => {
  return (
    <Dcontext.Provider value={value}>
      {children}
    </Dcontext.Provider>
  )
}


export const Mainwork = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [incart, setIncart] = useState([])
  const [counter, setCounter] = useState(0)
  const [sumPrice, setSumPrice] = useState(0)

  const handlebutton=(product,type)=>{
    setIncart(prev => {
    const existing = prev.find(item => item.product.id === product.id);

    if (existing) {
      if (type === "increase") {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else if (type === "decrease") {
        if (existing.count > 1) {
          return prev.map(item =>
            item.product.id === product.id
              ? { ...item, count: item.count - 1 }
              : item
          );
        } else {
          // remove if count goes to 0
          return prev.filter(item => item.product.id !== product.id);
        }
      }
    }

    // if not in cart and type is increase → add new product
    if (type === "increase") {
      return [...prev, { product, count: 1 }];
    }

    return prev;
  });
    // adjust counter and sumPrice properly
    if (type === "increase") {
      setCounter((prev) => prev + 1)
      setSumPrice((prev) => Number((prev + product.price).toFixed(2)))
    } else if (type === "decrease") {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0))
      setSumPrice((prev) =>
        prev > product.price ? Number((prev - product.price).toFixed(2)) : 0
      )
    }
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
    <Creatcontext value={{ products, categories, incart, setIncart ,counter, setCounter , handlebutton}}>
    <Nav counter= {counter} price= {sumPrice}/>
    {/* <Categories categories={categories}/> */}
    <Outlet context={{ products, categories, incart, setIncart ,counter, setCounter , sumPrice,handlebutton}} />
    <Footer/>
    </Creatcontext>
    </>

  )
}


