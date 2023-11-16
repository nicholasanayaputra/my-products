import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const loginPage = () => {
  return (
    <>
      <AuthLayout title="login" type="login">
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default loginPage;
