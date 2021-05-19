import AddIconWhite from "../../assets/add-icon-white.png";

import { AddButton, Icon } from "./floating-add-button.styles";

const FloatingAddButton = () => {
  return (
    <div>
      <AddButton>
        <Icon src={AddIconWhite} />
      </AddButton>
    </div>
  );
};

export default FloatingAddButton;
