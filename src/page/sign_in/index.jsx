/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import useApi from '../../helper/useApi'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/reducer/user'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function signin() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [form, setForm] = useState()
    const api = useApi()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth} = useSelector((s)=>s.user)

    const handleInput = (e) => {
        const data = {...form}
        data[e.target.name] = e.target.value
        setForm(data)
      }

    useEffect(() => {
      if (isAuth) {
        navigate('/home')
      }
    }, [isAuth])
    
      const goLogin = () => {
        api({
          method: 'POST',
          url: '/auth',
          data: form
        })
        .then(({data})=>{
          const token = data.token
          dispatch(login(token))
          setTimeout(() => {
            navigate('/home')
          }, 3000);
        })
        .catch(err=>{
          const axiosErr = err.response.data
          if (axiosErr.message !== undefined) {
              console.log(axiosErr.message, 'warning')
          } else if (axiosErr.error !== undefined) {
              console.log(axiosErr.error, 'error')
          }
        })
      }

  return (
    <>
        <div>
  <div className="h-screen w-full flex items-start">
    <section className="relative md:w-1/2 w-full h-full flex flex-col font-inter">
      <div className="relative flex flex-col gap-y-8 w-full h-full px-10 justify-center">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold text-5xl">Sign In</h1>
          <h2 className="text-xl text-gray-400">
            Sign in with your data that you entered during your registration
          </h2>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col font-mulish">
            <label htmlFor="username" className="text-gray-600 py-2">
              Username
            </label>
            <input
              className="rounded-lg h-16 border border-gray-200 px-5"
              type="text"
              name="username"
              onChange={handleInput}
              placeholder="Write your username"
              required=""
            />
          </div>
          <div className="flex flex-col font-mulish">
            <label htmlFor="Password" className="text-gray-600 py-2">
              Password
            </label>
            <input
              className="rounded-lg h-16 border border-gray-200 px-5"
              type="password"
              name='password'
              onChange={handleInput}
              placeholder="Password"
              required=""
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary h-16 rounded-lg text-white font-bold"
          onClick={goLogin}
        >
          Sign In
        </button>
        <div className="flex flex-col gap-y-2 text-center">
          <p className="text-gray-400">
            forgot your password?{" "}
            <a className="text-primary underline" href="#">
              Reset now
            </a>
          </p>
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link className="text-primary underline" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  </div>
</div>

    </>
  )
}

export default signin