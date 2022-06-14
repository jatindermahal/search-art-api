import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Search from "./Search";
import Results from "./Results";
import request from "./Request";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!(input || input.length)) {
      setResults(null);
      return;
    }
    if (input.length < 3) {
      return;
    }

    request(input)
      .then((res) => {
        if (res && res.data) setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [input]);

  return (
    <>
      <div className="App">
        <div className="p-5 m-2 art-bg">
          <h1>Search Artworks</h1>
          <Container fluid>
            <Search
              input={input}
              handleChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </Container>
        </div>
      </div>
      <Container fluid>
        <Results results={results} />
      </Container>
    </>
  );
}

export default App;
