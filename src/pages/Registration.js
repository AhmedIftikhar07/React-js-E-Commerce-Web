import React, { useState } from 'react'
import { logo } from '../assests'
import { ArrowRight } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Registration = () => {

  const [clientName, setClientName] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')


  // error messages
  const [ErrclientName, setErrClientName] = useState('')
  const [Erremail, setErrEmail] = useState('') 
  const [Errpassword, setErrPassword] = useState('')
  const [ErrcPassword, setErrCPassword] = useState('')



  // handle functions 
  const HandleName = (e)=>{
    setClientName(e.target.value)
    setErrClientName('')
  }

  const HandleEmail = (e)=>{
    setEmail(e.target.value)
    setErrEmail('')
  }
  const HandlePassword = (e)=>{
    setPassword(e.target.value)
    setErrPassword('')
  }
  const HandleCPassword = (e)=>{
    setCPassword(e.target.value)
    setErrCPassword('')
  }



  // email vaidation start 

  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  }

// submit button fonction

  const handleRegistration = (e)=>{
    e.preventDefault()
    if(!clientName){
      setErrClientName("Enter your Name")
    }
    if(!email){
      setErrEmail("Enter your Email")
    }else{
      if(!emailValidation(email)){
        setErrEmail("Invalid Email")
      }
    }
    if(!password){
      setErrPassword("Enter your Password")
    }else{
      if(password.length < 6){
        setErrPassword('Password must be at least 6 characters')
      }
    }
    if(!cPassword){
      setErrCPassword("Enter your Confirm Password")
    }else{
      if(cPassword !== password){
        setErrCPassword('Password not matched')
      }
    }

    if(clientName && email && emailValidation(email) && password && password.length >=6 && cPassword && cPassword === password){
      console.log(clientName,email,password,cPassword);
      setClientName('')
      setEmail('')
      setPassword('')
      setCPassword('')
    }
   
  }
  return (
    <div className='w-full '>
      <div className='bg-gray-100 flex items-center justify-center pt-20 pb-14'>
        <form className='w-[350px] mx-auto flex flex-col items-center p-3'>
          <img className='bg-gray-800 w-24 pt-3 -mb-2 z-10 pb-1 px-3 rounded-sm' src={logo} alt="logo" />
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4 '>Create Account</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input
                value={clientName}
                onChange={HandleName}
                  className='w-full focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-200  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none'
                  type="text"
                />
                {
                  ErrclientName && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='text-red-600 font-extrabold italic font-titleFont text-base'
                    >!</span> {ErrclientName}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or Phone Number</p>
                <input
                value={email}
                onChange={HandleEmail}
                  className='w-full lowercase focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-200  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none'
                  type="email"
                />
                  {
                  Erremail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='text-red-600 font-extrabold italic font-titleFont text-base'
                    >!</span> {Erremail}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Password</p>
                <input
                value={password}
                onChange={HandlePassword}
                  className='w-full  focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-200  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none'
                  type="password"
                />
                 {
                  Errpassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='text-red-600 font-extrabold italic font-titleFont text-base'
                    >!</span> {Errpassword}</p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Confirm Password</p>
                <input
                value={cPassword}               
                onChange={HandleCPassword}
                  className='w-full  focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-200  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none'
                  type="password"
                />
                 {
                  ErrcPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='text-red-600 font-extrabold italic font-titleFont text-base'
                    >!</span> {ErrcPassword}</p>
                  )
                }
                <p className='text-xs text-gray-500'>Password must be at least 6 characters.</p>
              </div>
              <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
            </div>
            <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to Amazon's <span className='text-blue-600 cursor-pointer'>Conditions of Use</span> and <span className='text-blue-600 cursor-pointer'>Privacy Notice</span></p>
            <p className='text-xs text-gray-600 mt-4 cursor-pointer group'>Already have an account? <Link to={'/signin'}><span className='text-blue-600 group-hover:text-orange-600 group-hover:underline duration-100'>Sign In </span> <ArrowRight /> </Link></p>
            <p className='text-xs text-gray-600 -mt-1 cursor-pointer group'>Buying for work?  <span className='text-blue-600 text-xs  group-hover:text-orange-600 group-hover:underline duration-100'>Create a free business account </span><ArrowRight /></p>
          </div>
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center  py-10'>
        <div className='flex items-center gap-6'>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer duration-150'>Conditions of Use</p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer duration-150'>Privacy Notice</p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer duration-150'>Privacy Notice</p>
        </div>
        <p className='text-xs text-gray-600'> &copy; 1996-2023, ReactBd.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default Registration
