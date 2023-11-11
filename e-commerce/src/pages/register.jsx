import AuthLayout from "../components/Layouts/AuthLayout"
import FormRegister from "../components/Fragments/FormRegister"

const RegisterPage = () => {
  return (
    <>
    <AuthLayout title="register">
    <FormRegister />
    </AuthLayout>
    </>
  )
}

export default RegisterPage