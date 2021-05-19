import { ClearEntriesButton } from "../styles/tables/table-option-buttons/table-option-button.styles";
import { Div } from "../styles/div/div.styles";

const ClearSelected = () => {
  return (
    <Div>
      <p style={{ fontSize: "16px" }}>
        {" "}
        to show the delete button, make sure only one item is ticked.
      </p>
      <p style={{ fontSize: "16px" }}>
        if you need to untick all your selected entries at once, tap the button
        below
      </p>
      <ClearEntriesButton onClick={() => window.location.reload()}>
        Untick Selected Entries
      </ClearEntriesButton>
    </Div>
  );
};

export default ClearSelected;
