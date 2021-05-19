import { Link } from "react-router-dom";
import { ErrorDiv } from "../styles/div/div.styles";
const FetchError = ({ error }) => {
  return (
    <ErrorDiv>
      <h1> &#128533;</h1>
      <h2>sorry, there has been an Error</h2>
      {error !== "" && <p>{error}</p>}
      <p>some things to try:</p>
      <ul>
        <li>Check Your Internet connection.</li>
        <li>reload the page and try again.</li>
        <li>
          you could also try clearing your browser cache, then reloading the
          page and trying again.
        </li>
      </ul>

      <p>
        please <Link to="/contact">Contact Me</Link> if the error persists.
      </p>
    </ErrorDiv>
  );
};

export default FetchError;
