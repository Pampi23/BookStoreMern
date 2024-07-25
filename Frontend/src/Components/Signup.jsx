import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className='flex h-screen items-center justify-center '>
      <div id="my_modal_3" >
  <div className="modal-box" >
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">   <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
   
    </form>
    <h3 className="font-bold text-lg">Signup!</h3>
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text" placeholder='enter your full name' className='w-96 px-3 border rounded-md outline-none h-10 p-2'  {...register("name", { required: true })} />
      <br />
      {errors.name && <span>This field is required</span>}
      

    </div>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='enter your email' className='w-96 px-3 border rounded-md outline-none h-10 p-2'  {...register("email", { required: true })} />
      <br />
      {errors.email && <span>This field is required</span>}
      

    </div>
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='enter your password' className='w-96 px-3 border rounded-md outline-none h-10 p-2'  {...register("passwrod", { required: true })} />
      <br />
      {errors.password && <span>This field is required</span>}
      
      

    </div>
    <div className='mt-6 space-x-44 flex' >
      <button className='text-white bg-pink-500 py-2 px-4 rounded-lg w' >Signup</button>
      <span>Not Registered ? <button className='text-white bg-black py-2 px-4 rounded-lg'>
        <Link to="/"> Login</Link></button></span>
    </div>  

  </div>
</div>
    </div>
  )
}

export default Signup