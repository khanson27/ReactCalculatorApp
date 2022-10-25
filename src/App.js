import "./App.css";
import { Keyboard } from "./components/Keyboard";
import { useState } from "react";
import { Display } from "./components/Display";
import { Container } from "@mui/material";

function App() {
  const [inputOneNum, setInputOneNum] = useState("");
  const [inputTwoNum, setInputTwoNum] = useState("");
  const [operator, setOperator] = useState("");
  return (
    <>
      <Container
        className="app"
        style={{
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <Display
          inputOneNum={inputOneNum}
          operator={operator}
          inputTwoNum={inputTwoNum}
        />
        <Keyboard
          setInputOneNum={setInputOneNum}
          setInputTwoNum={setInputTwoNum}
          setOperator={setOperator}
          inputOneNum={inputOneNum}
          inputTwoNum={inputTwoNum}
          operator={operator}
        />
      </Container>
    </>
  );
}

export default App;
