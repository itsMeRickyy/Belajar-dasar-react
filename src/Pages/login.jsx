import AuthLayout from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  return (
    <>
      <AuthLayout title="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default LoginPage;
