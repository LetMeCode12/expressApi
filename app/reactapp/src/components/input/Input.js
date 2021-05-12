import { FormGroup, Label, Input } from "reactstrap";
import ErrorMesage from "../errorMessage/ErrorMesage";

const MyInput = (props) => {
  const {
    form: { touched, errors },
    field,
    label,
    ...rest
  } = props;

  const onError = () => {
    return touched[field.name] && errors[field.name];
  };

  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input invalid={onError()} title={field.name} {...field} {...rest} />
      {onError() && <ErrorMesage>{errors[field.name]}</ErrorMesage>}
    </FormGroup>
  );
};

export default MyInput;
