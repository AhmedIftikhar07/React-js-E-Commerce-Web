import React, { useState } from 'react'
import { logo } from '../assests'
import { ArrowRight} from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { motion } from 'framer-motion'
import { FadeLoader } from 'react-spinners'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../redux/AmazonSlice'

const Signin = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const [showPassword, setShowPassword] = useState(false);

  // states
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [Erremail, setErrEmail] = useState('') 
  const [Errpassword, setErrPassword] = useState('')
  const [loading, setloading] = useState(false)
  const [succMess, setSuccMess] = useState('')
  const [firebaseErr, setFirebaseErr] = useState('')


  // handler functions
  const HandleEmail = (e)=>{
    setEmail(e.target.value)
    setErrEmail('')
    setFirebaseErr('')
  }
  const HandlePassword = (e)=>{
    setPassword(e.target.value)
    setErrPassword('')
    setFirebaseErr('')
  }


    // handle login
  const HandleLogin = (e)=>{
    e.preventDefault()
    if(!email){
      setErrEmail("Enter your Email")
    }
    if(!password){
      setErrPassword("Enter your Password")
    }
    if(email && password){
      setloading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user
        dispatch(setUserInfo({
          _id:user.uid,
          userName:user.displayName,
          email:user.email,
          image:user.photoURL,
        }))
        console.log(user);
        setloading(false)
        setSuccMess("Successfully Logged in")
        setTimeout(() => {
          navigate('/')
        }, 2000);
      })
      .catch((error)=>{
        if(error.code === "auth/invalid-login-credentials"){
          setFirebaseErr("Invalid email or passsword")
          setloading(false)
        }else{
          setFirebaseErr("Invalid email or passsword")
          setloading(false)
        }
       
        
      })
      setEmail('')
      setPassword('')
    }
  }



  return (
    <div className='w-full'>
      <div className='bg-gray-100 flex items-center justify-center pt-20 pb-44'>
        <form className='w-[350px] mx-auto flex flex-col items-center p-3'>
          <img className='bg-gray-800 w-24 pt-3 -mb-2 z-10 pb-1 px-3 rounded-sm' src={logo} alt="logo" />
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4 '>Sign In</h2>
            <div className='flex flex-col gap-3'>
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
              <div className='flex flex-col gap-2 relative'>
                <p className='text-sm font-medium'>Password</p>
                <input
                value={password}
                onChange={HandlePassword}
                  className='w-full lowercase focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-200  py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none'
                  // type={showPassword ? 'text' : 'password'}
                  type='password'
                />
                    {
                  Errpassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='text-red-600 font-extrabold italic font-titleFont text-base'
                    >!</span> {Errpassword}</p>
                  )
                }
                <span
                  // onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer absolute top-8 right-1 text-gray-500  transform opacity-50">
                  {/* {showPassword ? <RemoveRedEye /> : <RemoveRedEyeTwoTone/>} */}
                </span>
              </div>

              {
                  firebaseErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='text-red-600 font-extrabold italic font-titleFont text-base'
                    >!</span> {firebaseErr}</p>
                  )
                }

              <button onClick={HandleLogin} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
            </div>
                
            {
                loading && (
                  <div className='flex items-center justify-center text-center py-2'>
                    <FadeLoader color='#f0c14b'/>
                  </div>
                )
              }
              {
                succMess && (
                  <motion.div 
                  initial={{y: 10 , opacity: 0}}
                  animate={{y: 0 , opacity: 1}}
                  transition={{delay: 0.5 , duration: 0.5}}
                   className='mt-2 flex items-center justify-center text-center py-2 text-green-600 border-[1px] border-green-600 px-2'>
                    <p>{succMess}</p>
                  </motion.div>
                )
              }
           
            <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to Amazon's <span className='text-blue-600 cursor-pointer'>Conditions of Use</span> and <span className='text-blue-600 cursor-pointer'>Privacy Notice</span></p>
            <p className='text-xs text-gray-600 mt-4 cursor-pointer group'><ArrowRight /> <span className='text-blue-600 group-hover:text-orange-600 group-hover:underline duration-100'>Need help?</span></p>

          </div>
          <p className='w-full text-xs text-gray-600 mt-4 flex items-center '>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex '></span>
            <span className='w-1/3 text-center'>New to Amazon?</span>
            <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex '></span>
          </p>
          <Link to={'/registration'} className='text-center w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#e6e6e6] to-[#c9c9c9] hover:bg-gradient-to-b border border-zinc-400 active:border-zinc-500  active:shadow-sm mt-4'>Create Amazon Account</Link>
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

export default Signin
