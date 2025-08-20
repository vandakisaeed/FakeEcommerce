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
import{ChooseLanguage} from './usecontext/ChooseLanguage'
import { Body } from './pages/demoCreatContex'
function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Mainwork />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Body />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="Electronics" element={<Electronics />} />
          <Route path="Jewelery" element={<Jewelery />} />
          <Route path="Men's clothing" element={<Mens />} />
          <Route path="Women's clothing" element={<Womens />} />
          <Route path="usecontext" element={<ChooseLanguage />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
