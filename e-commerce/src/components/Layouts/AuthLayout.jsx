const AuthLayout = (props) => {
    const {children, title} = props
  return (
    <div className="w-full max-w-xs">
    <h1 className="text-blue-600 font-bold mb-2 text-3xl ">{title}</h1>
    <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>
    {children}
  </div>
  )
}

export default AuthLayout