import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-amber-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-amber-600 font-bold mb-2 text-3xl ">{title}</h1>
        <p className="font-medium text-amber-580 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account?  "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-amber-700">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-amber-700">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
