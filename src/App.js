
import './App.css';
import Footer from './components/Footer/Footer';
// import Banner from './components/Home/Banner';
import Header from './components/header/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home';
import { ProductsData } from './api/Api';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import Cart from './pages/Cart';

const Layout = ()=>{
  return(
    <>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
<>

      <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>} loader={ProductsData}></Route>
        <Route path='/cart'  element={<Cart/>}></Route>
      </Route>
      <Route >
        <Route path='/signin'  element={<Signin/>}></Route>
        <Route path='/registration'  element={<Registration/>}></Route>
      </Route>
</>
    
  ))

  return (
    <>
      <div className='font-bodyFont bg-gray-100'>
        <RouterProvider router={router}>

        </RouterProvider>
      </div>
    </>
  )
}

export default App;

