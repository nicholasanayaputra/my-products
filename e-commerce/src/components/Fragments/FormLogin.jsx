import Button from "../Elements/Button";
import InputForm from "../Elements/input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "./products";
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
        />

        <Button classname="bg-amber-600 w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
