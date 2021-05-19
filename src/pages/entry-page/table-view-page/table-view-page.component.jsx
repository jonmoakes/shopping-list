import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../../redux/user/user.selectors.js";
import { selectHideFloatingAddButton } from "../../../redux/floating-add-button/floating-add-button.selectors.js";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import Table from "../../../components/tables/table/table.component";

import { Container } from "../../../components/styles/container/container.styles";
import { Div } from "../../../components/styles/div/div.styles";
import { Heading } from "../../../components/styles/heading/heading.styles";
import { Span } from "../../../components/styles/span/span.styles";

const TableViewPage = ({ currentUser, showFloatingAddButton }) => {
  return (
    <Container>
      {currentUser && showFloatingAddButton === true ? (
        <Link to="/add-entry">
          <FloatingAddButton />
        </Link>
      ) : null}

      {showFloatingAddButton === true ? (
        <Div>
          <Heading style={{ marginBottom: "-20px" }}>Shopping List</Heading>
          <br />
          <Span>&#128722;</Span>
        </Div>
      ) : null}

      <div>
        <Table />
      </div>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showFloatingAddButton: selectHideFloatingAddButton,
});

export default connect(mapStateToProps)(TableViewPage);
