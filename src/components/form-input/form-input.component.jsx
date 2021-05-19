import {
  GroupContainer,
  FormInputContainer,
} from "./form-input.styles";

const FormInput = ({ handleChange, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
  </GroupContainer>
);

export default FormInput;
