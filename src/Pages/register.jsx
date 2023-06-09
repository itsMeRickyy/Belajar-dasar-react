import AuthLayout from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Register" type="register">
        <FormRegister />
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
