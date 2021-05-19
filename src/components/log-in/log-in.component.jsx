import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth } from "../../firebase/firebase.utils.js";
import { Div } from "../../components/styles/div/div.styles";

import { Form } from "./log-in.styles";
import { Heading } from "../../components/styles/heading/heading.styles";

const LogIn = ({ history }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const alert = useAlert();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });
      alert.success("Success! Logging You In! :)");
      history.push("/table");
    } catch (error) {
      alert.error("Username And / Or Password Incorrect. Please Try Again");
      setCredentials({ email: "", password: "" });
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Div>
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
        <CustomButton type="submit">Log In</CustomButton>
      </Form>
    </Div>
  );
};

export default withRouter(LogIn);
