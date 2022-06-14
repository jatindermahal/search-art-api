import { SearchInput } from "evergreen-ui";

function Search({ input, handleChange }) {
  return (
    <SearchInput
      placeholder="Enter keywords"
      width="100%"
      paddingLeft="13%"
      paddingRight="13%"
      marginBottom={10}
      marginTop={5}
      value={input}
      onChange={handleChange}
      autoFocus
    />
  );
}

export default Search;
