const Button = (props) => {
  const { children, variant = "" } = props;
  return (
    <>
      <button className={`${variant} px-5  rounded-full text-white py-2`}>{children}</button>
    </>
  );
};

export default Button;
