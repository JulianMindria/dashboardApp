import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from '../../helper/useApi'
import { Link } from 'react-router-dom'


function Formsignup() {
  const [form, setForm] = useState({})

  const api = useApi() 
  
  const navigate = useNavigate()

  const handleInput = (e) => {
    const data = {...form}
    data[e.target.name] = e.target.value
    setForm(data)
  }

  const register = () => {
    api({
      method: 'POST',
      url: '/user',
      data: form
    }).then(res=>{
      setTimeout(() => {
        navigate('/signin')
      }, 3000);
    }).catch(err=>{
      const axiosErr = err.response.data
      if (axiosErr.message !== undefined) {
          err(axiosErr.message, 'warning')
      } else if (axiosErr.error !== undefined) {
          err(axiosErr.error, 'error')
      }
    })
  }

  return (
    <div className="h-screen w-full flex items-start">
  <section className="relative md:w-1/2 w-full h-full flex flex-col font-inter">
    <div className="relative flex flex-col gap-y-8 w-full h-full px-16 justify-center">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-5xl">Sign Up</h1>
        <h2 className="text-xl text-gray-400">Fill your additional details</h2>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col font-mulish">
          <label htmlFor="username" className="text-gray-600 py-2">
            Username
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="username"
            placeholder="Write your username"
            required=""
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label htmlFor="phone" className="text-gray-600 py-2">
            Phone Number
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="tel"
            name="phone"
            placeholder="Write your phone number"
            required=""
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label htmlFor="Email" className="text-gray-600 py-2">
            Email
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="text"
            name="email"
            placeholder="Write your email"
            required=""
            onChange={handleInput}
          />
        </div>
        <div className="flex flex-col font-mulish">
          <label htmlFor="Password" className="text-gray-600 py-2">
            Password
          </label>
          <input
            className="rounded-lg h-16 border border-gray-200 px-5"
            type="password"
            name="password"
            placeholder="Password"
            required=""
            onChange={handleInput}
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={register}
        className="bg-primary h-16 rounded-lg text-white font-bold"
      >
        Sign Up
      </button>
      <div className="flex flex-col gap-y-2 text-center">
        <p className="text-gray-400">
          Already have account ?{" "}
          <Link className="text-primary underline" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </section>
</div>

  )
}

export default Formsignup