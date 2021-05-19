import { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useAlert } from "react-alert";

import { auth } from "../../firebase/firebase.utils.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { clearEntries } from "../../redux/entry/entry.actions.js";
import { clearFloatingAddButton } from "../../redux/floating-add-button/floating-add-button.actions.js";

import {
  HeaderDiv,
  HeaderNavigationItems,
  LogoutIcon,
  LogoutIconText,
} from "./header.styles";

const Header = ({ currentUser, history, dispatch }) => {
  const alert = useAlert();

  const [loggedOut, setLoggedOut] = useState(false);

  function userHasLoggedOut() {
    return [
      dispatch(clearEntries()),
      dispatch(clearFloatingAddButton()),
      auth.signOut(),
      alert.success("You Have Signed Out!"),
      setLoggedOut(true),
    ];
  }
  function logoutConfirmBox() {
    window.confirm("Are You Sure You Want To Log Out?")
      ? userHasLoggedOut()
      : alert.info("Cancelled");
  }

  return (
    <HeaderDiv>
      {loggedOut && <Redirect to="/" />}
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
    </HeaderDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Header));
