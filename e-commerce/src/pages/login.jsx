import AuthLayout from "../components/Layouts/AuthLayout"
import FormLogin from "../components/Fragments/FormLogin"
import { Link } from "react-router-dom"

const loginPage = () => {
  return (
    <>
    <AuthLayout title="login">
    <FormLogin />
    <p className="text-sm mt-5 text-center">
      Dont have an account? <Link to="/register" className="font-bold text-blue-600">Register</Link>
    </p>
    </AuthLayout>
    </>
  )
}

export default loginPage