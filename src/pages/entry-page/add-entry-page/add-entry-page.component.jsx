import { useState } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { firestore } from "../../../firebase/firebase.utils";

import { selectEntries } from "../../../redux/entry/entry.selectors.js";
import { selectCurrentUser } from "../../../redux/user/user.selectors.js";
import FetchError from "../../../components/fetch-error/fetch-error.component";

import { Container } from "../../../components/styles/container/container.styles";
import {
  Div,
  AddEntryDiv,
} from "../../../components/styles/div/div.styles.jsx";
import { Heading } from "../../../components/styles/heading/heading.styles";

import { Form } from "../../../components/styles/form/form.styles";

import {
  SaveButton,
  ReturnButton,
} from "../../../components/styles/tables/table-option-buttons/table-option-button.styles";

import {
  confirmAddEntryMessage,
  entryAddedSuccessMessage,
  cancelAndReturnMessage,
  singleWordCancelMessage,
} from "../../../resuable-messages/reusable-messages.js";

const generateUniqueId = require("generate-unique-id");

const AddEntryPage = ({ history, entries, currentUser }) => {
  const randomId = generateUniqueId({
    length: 20,
    useLetters: false,
  });

  const [entry, setEntry] = useState({
    id: randomId,
    entry: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { id } = entry;
  const alert = useAlert();

  const confirmCancel = () => {
    window.confirm(cancelAndReturnMessage)
      ? cancel()
      : alert.info(singleWordCancelMessage);
  };

  function cancel() {
    alert.info(singleWordCancelMessage);
    history.push("/table");
  }

  const confirmBox = () => {
    if (entry.entry === "") {
      alert.error("Please Enter Some Text For The Entry");
      return;
    }
    window.confirm(confirmAddEntryMessage)
      ? addEntry()
      : alert.info(singleWordCancelMessage);
  };

  async function addEntry() {
    if (!currentUser) return;

    const userRef = await firestore.doc(`users/${currentUser.id}`);
    const ent = Object.assign(entry);

    try {
      await userRef.update({
        entries: [...entries, ent],
      });

      if (errorMessage === "") {
        alert.success(entryAddedSuccessMessage);
        history.push("/table");
      }
    } catch (error) {
      setErrorMessage("Error Adding Entry ", error.message);
      return;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setEntry({
        id: randomId,
        entry: "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEntry({ ...entry, [name]: value });
  };

  return (
    <Container>
      {errorMessage !== "" ? (
        <FetchError error={errorMessage} />
      ) : (
        <div>
          <SaveButton type="button" onClick={() => confirmBox()}>
            Save
          </SaveButton>

          <ReturnButton type="button" onClick={() => confirmCancel()}>
            Back
          </ReturnButton>

          <Div>
            <Heading>Add An Item</Heading>
          </Div>

          <AddEntryDiv>
            <Form onSubmit={handleSubmit}>
              <label>Item:</label>
              <textarea
                id={id}
                type="text"
                name="entry"
                onChange={handleChange}
                placeholder="Type Item Here..."
              />
            </Form>
          </AddEntryDiv>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  entries: selectEntries,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(AddEntryPage));
