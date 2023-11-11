/* eslint-disable no-unused-vars */
import React from "react"
import Button from "./components/Elements/Button"
import InputForm from "./components/Elements/input/Index"

const App = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 font-bold mb-2 text-3xl ">Login</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
        <form action="">
          <InputForm label="Email" type="email" placeholder="example@mail.com" name="email"/>
          <InputForm label="Password" type="password" placeholder="******" name="password"/>

          <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
      </div>
    </div>
  )
}

export default App