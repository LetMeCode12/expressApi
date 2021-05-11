
const ErrorMesage = (props) => {
  const { children } = props;

  return <div className="text-danger">{children}</div>;
};

export default ErrorMesage;
