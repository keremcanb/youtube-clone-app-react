import React, { useState } from "react";

const SearchBar = ({ onFormSubmitCbProp }) => {
  const [termState, setTermState] = useState("");

  const onInputChangeCb = (e) => {
    setTermState(e.target.value);
  };

  const onFormSubmitCb = (e) => {
    e.preventDefault();

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
