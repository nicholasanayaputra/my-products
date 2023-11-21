import Button from "../Elements/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          label="Full Name"
          type="text"
          placeholder="insert your name here..."
          name="fullname"
        />
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
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="******"
          name="confirmPassword"
        />
        <Button classname="bg-amber-600 w-full">Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
