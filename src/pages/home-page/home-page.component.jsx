import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";

import { Container } from "../../components/styles/container/container.styles";
import { Heading } from "../../components/styles/heading/heading.styles";
const HomePage = () => (
  <Container>
    <div>
      <Heading>Welcome!</Heading>
      <Link to="/login">
        <CustomButton>Enter</CustomButton>
      </Link>
    </div>
  </Container>
);

export default HomePage;
