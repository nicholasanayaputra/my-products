import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 font-bold mb-2 text-3xl ">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account?  "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
