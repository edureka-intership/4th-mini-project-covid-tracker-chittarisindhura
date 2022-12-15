import React, { useEffect, useState, useCallback } from "react";
import ShowGrid from "./showGrid.js";
import { apiGet } from "./api/apiGet.js";
const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  const isShowsSearch = searchOption === "shows";
  useEffect(() => {
    apiGet("/shows").then((result) => {
      setResults(result);
    });
  }, []);
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results Found</div>;
    }
    if (results && results.length > 0) {
      return results[0] ? <ShowGrid data={results} /> : "Img Not Found";
    }
  };
  const searchrenderResults = () => {
    if (searchResults && searchResults.length === 0) {
      return <div>No Results Found</div>;
    }
    if (searchResults && searchResults.length > 0) {
      return searchResults[0] ? (
        <ShowGrid data={searchResults} />
      ) : (
        "Img Not Found"
      );
    }
  };
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setSearchResults(result);
    });
  };
  const onInputChange = useCallback(
    (ev) => {
      setInput(ev.target.value);
    },
    [setInput]
  );

  return (
    <div>
      <div class="screen">
        <div class="searchbar">
          <input
            class="search"
            type="search"
            value={input}
            size="100px"
            placeholder="search movie name"
            onChange={onInputChange}
          />
          <button class="searchbtn" type="button" onClick={onSearch}>
            Search
          </button>
        </div>
        <div class="data1">
          <h1>Unlimited movies, TV shows and more.</h1>
          <p class="watch">Watch anywhere. Cancel anytime.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div class="email">
            <div>
              <input
                id="emailAddress"
                type="email"
                name=""
                required=""
                size="60"
                placeholder="Email Address"
                maxLength="50"
                minlength="5"
              />
            </div>
            <div>
              <button>Get Started </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <showDetails data={searchResults} />
      </div>
      <div>
        {searchResults && searchResults.length > 0
          ? searchrenderResults()
          : renderResults()}
      </div>
    </div>
  );
};

export default Home;
