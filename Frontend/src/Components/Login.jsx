import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
   <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login!</h3>
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email" placeholder='enter your email' className='w-96 px-3 border rounded-md outline-none h-10 p-2' {...register("email", { required: true })}/>
      <br />
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
      

    </div>
    <div className='mt-4 space-y-2'>
      <span>Password</span>
      <br />
      <input type="password" placeholder='enter your password' className='w-96 px-3 border rounded-md outline-none h-10 p-2' {...register("password", { required: true })} />
      <br />
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
      

    </div>
    <div className='mt-6 space-x-44' >
      <button className='text-white bg-pink-500 py-2 px-4 rounded-lg w' >Login</button>
      <span>Not Registered ? <button className='text-white bg-black py-2 px-4 rounded-lg'>
        <Link to="/signup"> Sign up</Link></button></span>
    </div>  
  </div>
</dialog>
   </div>
    
  )
}
