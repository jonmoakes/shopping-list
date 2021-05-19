import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useAlert } from "react-alert";
import firebase from "firebase/app";

import { firestore } from "../../../../firebase/firebase.utils.js";

import { selectCurrentUser } from "../../../../redux/user/user.selectors.js";

import FetchError from "../../../fetch-error/fetch-error.component";

import {
  confirmRemoveEntryMessage,
  singleWordCancelMessage,
  entryRemovedSuccessMessage,
} from "../../../../resuable-messages/reusable-messages.js";

import { RemoveEntryButton } from "../../../styles/tables/table-option-buttons/table-option-button.styles";

const DeleteEntry = ({ entryToDelete, currentUser }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const alert = useAlert();

  const confirmRemoveEntry = () => {
    window.confirm(confirmRemoveEntryMessage)
      ? deleteEntry()
      : alert.info(singleWordCancelMessage);
  };

  async function deleteEntry() {
    if (!currentUser) return;

    let unsubscribeFromSnapshot = null;
    const userRef = await firestore.doc(`users/${currentUser.id}`);

    try {
      unsubscribeFromSnapshot = await userRef.onSnapshot((snapshot) => {
        if (snapshot.exists) {
          const { entries } = snapshot.data();

          const entryToRemove = entries.find(
            (el) => el.id === entryToDelete.id
          );

          if (entryToRemove !== undefined) {
            userRef
              .update({
                entries:
                  firebase.firestore.FieldValue.arrayRemove(entryToRemove),
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          }
          if (errorMessage === "") {
            alert.success(entryRemovedSuccessMessage);
          }
        } else {
          setErrorMessage("Error");
        }
        unsubscribeFromSnapshot();
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div>
      {errorMessage !== "" ? (
        <FetchError />
      ) : (
        <RemoveEntryButton onClick={() => confirmRemoveEntry()}>
          Delete Item
        </RemoveEntryButton>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(DeleteEntry);
