import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useAlert } from "react-alert";

import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { clearEntries } from "../../redux/entry/entry.actions.js";
import { clearFloatingAddButton } from "../../redux/floating-add-button/floating-add-button.actions.js";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderDiv,
  HeaderNavigationItems,
  LogoutIcon,
  LogoutIconText,
  Title,
} from "./header.styles";

const Header = ({ currentUser, history, dispatch, signOutStart }) => {
  const alert = useAlert();

  function userHasLoggedOut() {
    return [
      clearFloatingAddButton(),
      clearEntries(),
      signOutStart(),
      alert.success("You Have Successfully Signed Out!"),
      history.push("/"),
    ];
  }

  function logoutConfirmBox() {
    window.confirm("Are You Sure You Want To Log Out?")
      ? userHasLoggedOut()
      : alert.info("Cancelled");
  }

  return (
    <HeaderDiv>
      {currentUser && (
        <HeaderNavigationItems>
          <ul>
            <li>
              <LogoutIcon onClick={() => logoutConfirmBox()} />
              <LogoutIconText>Logout</LogoutIconText>
            </li>
          </ul>
        </HeaderNavigationItems>
      )}

      <Title>San's Shopping List</Title>
    </HeaderDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  clearFloatingAddButton: () => dispatch(clearFloatingAddButton()),
  clearEntries: () => dispatch(clearEntries()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
