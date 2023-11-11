/* eslint-disable no-unused-vars */
import React from "react"
import Button from "./components/Elements/Button"

const App = () => {
  return (
    <div className="flex justify-center bg-blue-700 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">Login</Button>
        <Button variant="bg-slate-700">Logout</Button>
        <Button></Button>
      </div>
    </div>
  )
}

export default App