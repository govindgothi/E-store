import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import App from "./App";
import AddOrder from "./pages/AddProduct";
import Home from "./pages/Home";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import About from "./pages/About/About";
// import Carousel from "./pages/Carousel";
// import Admin from "./admin/Home/Admin";
// import CreateOrder from "./admin/CreateOrder/CreateOrder";
// import SignInComp from "./components/User-Auth/User-SignIn/SignInComp";
// import LoginComp from "./components/User-Auth/User-Login/LoginComp";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='' element={<Home/>} />
        {/* <Route path='/admin' element={<Admin />}>
          <Route path='order' element={<CreateOrder />} />  
        </Route>
        <Route path='SignIn' element={<SignInComp />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='About' element={<About />} />
        <Route path='Carousel' element={<Carousel />} />  */}
        {/* <Route path='Login' element={<LoginComp />} /> */}
        </Route>
    )
)

export  default router