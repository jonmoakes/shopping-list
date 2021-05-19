import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global-styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import ScrollToTopAuto from "./components/scroll-to-top-auto/scroll-to-top-auto.component";
import ScrollToTopButton from "./components/scroll-to-top-button/scroll-to-top-button.component";
import Loader from "./components/loader/loader.component.jsx";
import Header from "./components/header/header.component.jsx";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

const TableViewPage = lazy(() =>
  import("./pages/entry-page/table-view-page/table-view-page.component")
);
const AddEntryPage = lazy(() =>
  import("./pages/entry-page/add-entry-page/add-entry-page.component")
);

const LoginPage = lazy(() => import("./pages/login-page/login-page.component"));

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />

      <ScrollToTopAuto>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route path="/" component={LoginPage} />

            <Route
              path="/add-entry"
              render={() => (this.props.currentUser ? <AddEntryPage /> : null)}
            />

            <Route
              path="/table"
              render={() => (this.props.currentUser ? <TableViewPage /> : null)}
            />
          </Suspense>
        </ErrorBoundary>
      </ScrollToTopAuto>
      <ScrollToTopButton />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
