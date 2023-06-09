import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";

const FormLogin = () => {
  return (
    <>
      <form action="">
        <InputForm label="Email" type="email" placeholder="Enter your email" name="email" />
        <InputForm label="Password" type="password" placeholder="******" name="password" />
        <div></div>
        <Button variant="w-full bg-blue-600 rounded-full text-white py-2">Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
