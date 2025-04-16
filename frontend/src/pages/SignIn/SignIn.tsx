// import React from 'react'

import { useState } from "react"
import SignInComp from "../../components/User-Auth/User-SignIn/SignInComp"
import { signInInput } from "../../interface-type"



const SignIn = () => {
    const [signInData,setSignInData] = useState<signInInput>({
        username:'',
        email:'',
        password:'',
        otp:0,
    })
  return (
    <div className="w-screen h-screen bg-amber-200">
      <SignInComp signInData={signInData} setSignInData={setSignInData}></SignInComp>
    </div>
  )
}

export default SignIn
