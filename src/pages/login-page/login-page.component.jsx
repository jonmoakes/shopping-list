import LogIn from "../../components/log-in/log-in.component";

import { Div } from "../../components/styles/div/div.styles";
import { Heading } from "../../components/styles/heading/heading.styles";
import { Span } from "../../components/styles/span/span.styles";

const LoginPage = () => (
  <div style={{ marginTop: "50px" }}>
    <Div>
      <Heading style={{ marginBottom: "-20px" }}>
        Shopping List
        <br />
        <Span>&#128722;</Span>
      </Heading>
    </Div>
    <LogIn />
  </div>
);

export default LoginPage;
