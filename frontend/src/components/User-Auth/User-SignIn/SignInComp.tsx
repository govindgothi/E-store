// import { RxCross2 } from "react-icons/rx";
import Globally from "../../../assets/Globally.png"
import Input from "../Input";
import { signInInput } from "../../../interface-type";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
type modal={
  signInData:signInInput
  setSignInData:React.Dispatch<React.SetStateAction<signInInput>>
}
const SignInComp:React.FC<modal> = ({signInData,setSignInData}) => {
 

  const handleChangeLoginInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
   const { name, value } = e.target
   setSignInData((prev) => ({ ...prev, [name]: value }));
  }
  
  return(
    <div className=' w-[22rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg z-50  bg-white'>
      <div className="m-3 w-7 h-7 pl-1.5 p-1 bg-amber-300"><Link to='/'><FaArrowLeftLong /></Link></div>
      <div className="flex justify-center items-center "><div className="h-26 w-56"><img src={Globally} alt="" className="h-full"/></div></div>
      <div>
      <Input 
         type="username"
         name="userName"
         value={signInData.username}
         onChange={handleChangeLoginInput}
        />
        <Input 
         type="email"
         name="email"
         value={signInData.email}
         onChange={handleChangeLoginInput}
        />
         <Input 
         type="password"
         name="password"
         value={signInData.password}
         onChange={handleChangeLoginInput}
        />
      </div>
      <button className="w-[90%] py-1 mt-8 bg-green-500 rounded-lg mx-4 text-xl">SignIn</button>
      <p className="w-[60%] mx-auto mt-2 mb-6">Create new account? <Link to='/SignInComp' className="text-blue-700">Login</Link></p>
    </div>
  )
}

export default SignInComp

