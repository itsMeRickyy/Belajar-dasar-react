import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm label="Fullname" type="text" placeholder="Insert your fullname" name="fullname" />
        <InputForm label="Password" type="password" placeholder="******" name="password" />
        <InputForm label="Confirm Password" type="password" placeholder="******" name="confirmPassword" />
        <Button variant="w-full bg-blue-600 rounded-full text-white py-2">Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
