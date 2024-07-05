import React from 'react'
import { useForm } from 'react-hook-form'
import "../App.css"
const Login = () => {
    const {register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.Password === data.Password) {
                console.log(userData.name + "You are successfully Logged in")
            } else {
                console.log("Email or Password is incorrect it is not matching with our records")
            }
            } else{
                console.log("Email is not registered")
            }
        }
  return (
    <>
    <p className="title">Login Form</p>
    <form className='App' onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email", {required: true})}/>
      {errors.email && <span style={{color: "red"}}>Email Is Mandatory!</span>}
      <input type="password" {...register("Password")}/>
      <input type={"submit"} style={{backgroundColor: "red"}} />
    </form>
    </>
  )
}

export default Login
