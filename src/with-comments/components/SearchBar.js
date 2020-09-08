import React, { useState } from "react";

// app'ten onFormSubmitCbProp prop'unu aktarıyoruz
const SearchBar = ({ onFormSubmitCbProp }) => {
  // state will be a search term
  const [termState, setTermState] = useState("");

  // searchbar'a sorgu girilince state'i update ediyoruz
  // update the state as user is typing in the search input
  const onInputChangeCb = (e) => {
    setTermState(e.target.value);
  };

  const onFormSubmitCb = (e) => {
    e.preventDefault();

    // Call the provided callback prop anytime
    // a user submits the search form
    onFormSubmitCbProp(termState);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmitCb} className="ui form">
        <div className="field">
          <label>Video Search </label>
          <input type="text" value={termState} onChange={onInputChangeCb} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
