import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../../redux/user/user.selectors.js";
import { selectHideFloatingAddButton } from "../../../redux/floating-add-button/floating-add-button.selectors.js";

import FloatingAddButton from "../../../components/floating-add-button/floating-add-button.component";
import Table from "../../../components/tables/table/table.component";

import { Container } from "../../../components/styles/container/container.styles";

const TableViewPage = ({ currentUser, showFloatingAddButton }) => {
  return (
    <Container>
      {currentUser && showFloatingAddButton === true ? (
        <Link to="/add-entry">
          <FloatingAddButton />
        </Link>
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
