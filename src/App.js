import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global-styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import ScrollToTopAuto from "./components/scroll-to-top-auto/scroll-to-top-auto.component";
import ScrollToTopButton from "./components/scroll-to-top-button/scroll-to-top-button.component";
import Loader from "./components/loader/loader.component.jsx";
import Header from "./components/header/header.component.jsx";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const TableViewPage = lazy(() =>
  import("./pages/entry-page/table-view-page/table-view-page.component")
);
const AddEntryPage = lazy(() =>
  import("./pages/entry-page/add-entry-page/add-entry-page.component")
);

const LoginPage = lazy(() => import("./pages/login-page/login-page.component"));
const HomePage = lazy(() => import("./pages/home-page/home-page.component"));

const App = ({ currentUser, checkUserSession }) => {
  const location = useLocation();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      {location.pathname !== "/" && location.pathname !== "/login" ? (
        <Header />
      ) : null}

      <ScrollToTopAuto>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/login"
              render={() =>
                currentUser ? <Redirect to="/table" /> : <LoginPage />
              }
            />
            <Route
              exact
              path="/add-entry"
              render={() => (currentUser ? <AddEntryPage /> : null)}
            />
            <Route
              exact
              path="/table"
              render={() => (currentUser ? <TableViewPage /> : null)}
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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
