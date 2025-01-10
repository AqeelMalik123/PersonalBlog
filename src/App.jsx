

import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from './slices/authSlice'
import Footer from './component/footer/footer'
function App() {
  const [loading,setLoading] = useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
if(userData){
  dispatch(login(userData))
}else{
  dispatch(logout())
}
    }).finally(()=>{setLoading(false)})
    dispatch(authService)
  })
 console.log(import.meta.env.VITE_APP_APPWRITE_URL)
  return (
    <>
     <Headers/>
     <Footer/>
    </>
  )
}

export default App
