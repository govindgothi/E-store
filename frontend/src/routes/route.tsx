import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "../pages/Home/Home";
import App from "../App";
import SignIn from "../pages/SignIn/SignIn";
import Product from "../pages/Product/Product";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/SignIn' element={<SignIn />} />
        
        </Route>
    )
)

export  default router