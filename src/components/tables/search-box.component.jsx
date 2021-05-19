import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import styled from "styled-components";

import Loader from "../loader/loader.component";

import { SearchInput } from "../styles/search-input/search-input.styles";

const Text = styled.p`
  margin-top: 20px;
  margin-bottom: -5px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const SearchBox = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const [isSearching, setIsSearching] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const onChange = useAsyncDebounce((value) => {
    if (value.length === 0) {
      window.location.reload();
    } else if (value.length > 0) {
      setShowHelp(true);
    }
    setFilter(value || undefined);
    setIsSearching(false);
  }, 1000);

  return (
    <div>
      <SearchInput
        value={value || ""}
        type="search"
        onChange={(e) => {
          setIsSearching(true);
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search Items"
      />

      {showHelp && (
        <Text>
          clear the search text
          <br />
          to show the full table again.
        </Text>
      )}

      {isSearching ? (
        <div>
          <Loader />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;
