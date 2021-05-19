import { useState } from "react";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { emailSignInStart } from "../../redux/user/user.actions";

import Loader from "../loader/loader.component";

import { Div } from "../../components/styles/div/div.styles";
import { Form } from "./log-in.styles";
import { Heading } from "../../components/styles/heading/heading.styles";

const LogIn = ({ history, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { email, password } = userCredentials;
  const alert = useAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert.info("Logging You In!");
    setIsLoading(true);
    setIsDisabled(true);
    await emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Div>
      {isLoading ? <Loader /> : null}
      <Heading>Log In</Heading>

      <Form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email || ""}
          placeholder="Please Enter Your Email"
          required
        />

        <FormInput
          style={{ marginBottom: "-10px" }}
          name="password"
          type="password"
          value={password || ""}
          handleChange={handleChange}
          placeholder="Please Enter Your Password"
          required
        />
        {isDisabled === false ? (
          <CustomButton type="submit">Log In</CustomButton>
        ) : (
          <CustomButton type="button" disabled>
            Logging In...
          </CustomButton>
        )}
      </Form>
    </Div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(LogIn);
