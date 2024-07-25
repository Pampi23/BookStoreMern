import React from 'react'
import Navbar from './Navbar'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

const Contact = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  
  return (<>
  <Navbar/>
  <div>
  <div className='flex h-screen items-center justify-center '>
      <div id="my_modal_3 w-72" >
  <div className="modal-box w-[50vw] flex flex-col items-center "  >
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/">   <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
   
    </form>
    <h3 className="font-bold text-2xl">Contact Us!</h3>
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
      <br/>
      <div className='mt-4 space-y-2 w-72 self-center'>
      <span>EnterQuery</span>
      <br />
      <textarea   className='w-96 px-3 border rounded-md outline-none h-52 p-2'  ></textarea>
      <br />
     
      
      

    </div>

    </div>

    <div className='mt-6 space-x-44 flex' >
      <button className='text-white bg-black py-3 px-5 rounded-lg w' >
        Contact
      </button>
  
    </div>  

  </div>
</div>
    </div>
  </div>
    </>
  )
}

export default Contact