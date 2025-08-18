import { Route,Routes,Link, Outlet } from 'react-router'
import {Home} from './pages/Home'
import {Cart} from './pages/Cart'
// import {Nav} from './components/Nav'
// import {Footer} from './components/Footer'
// import { Categories } from './components/Categories'
import{Electronics} from './pages/Electronics'
import{Jewelery} from './pages/Jewelery'
import{Mens} from './pages/Mens'
import{Womens} from './pages/Womens'
import{Mainwork} from './pages/Mainwork'

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Mainwork />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="Electronics" element={<Electronics />} />
          <Route path="Jewelery" element={<Jewelery />} />
          <Route path="Men's clothing" element={<Mens />} />
          <Route path="Women's clothing" element={<Womens />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
