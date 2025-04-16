import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "../pages/Home/Home";
import App from "../App";
import SignIn from "../pages/SignIn/SignIn";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        
        </Route>
    )
)

export  default router