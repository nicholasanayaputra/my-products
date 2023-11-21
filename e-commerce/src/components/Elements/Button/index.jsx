const Button = (props) => {
  const {
    children,
    classname = "bg-amber-600",
    onClick = () => {},
    type,
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
