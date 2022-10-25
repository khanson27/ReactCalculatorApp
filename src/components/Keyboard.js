import React, { useCallback, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/system";

export const Keyboard = ({
  setInputOneNum,
  setOperator,
  setInputTwoNum,
  inputOneNum,
  inputTwoNum,
  operator,
}) => {
  const handleInputs = useCallback(
    (num) => {
      if (operator === null || operator === "") {
        setInputOneNum(inputOneNum + num);
      } else {
        setInputTwoNum(inputTwoNum + num);
      }
    },
    [setInputOneNum, setInputTwoNum, inputOneNum, inputTwoNum, operator]
  );

  const clear = useCallback(() => {
    setInputOneNum("");
    setInputTwoNum("");
    setOperator("");
  }, [setInputOneNum, setInputTwoNum, setOperator]);

  const handleCalculate = useCallback(() => {
    switch (operator) {
      case "+":
        setInputOneNum(Number(inputOneNum) + Number(inputTwoNum));
        break;
      case "-":
        setInputOneNum(Number(inputOneNum) - Number(inputTwoNum));
        break;
      case "÷":
      case "/":
        setInputOneNum(Number(inputOneNum) / Number(inputTwoNum));
        break;
      case "×":
      case "*":
        setInputOneNum(Number(inputOneNum) * Number(inputTwoNum));
        break;
      default:
        break;
    }
    setInputTwoNum("");
    setOperator("");
  }, [
    setInputOneNum,
    setInputTwoNum,
    operator,
    inputOneNum,
    inputTwoNum,
    setOperator,
  ]);

  const handleOperator = useCallback(
    (op) => {
      if (op === null || op === "") {
        setOperator(op);
      } else {
        handleCalculate();
        setOperator(op);
      }
    },
    [setOperator, handleCalculate]
  );

  const handleKeyPress = useCallback(
    (event) => {
      const { key } = event;
      switch (key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
          handleInputs(key);
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          handleOperator(key);
          break;
        case "Enter":
          handleCalculate();
          break;
        case "Delete":
        case "Backspace":
          clear();
          break;
        default:
          break;
      }
    },
    [handleInputs, handleOperator, handleCalculate, clear]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Box
      style={{
        border: "2px solid black",
        height: "fit-content",
        width: "fit-content",
        borderRadius: "10px",
      }}
    >
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("7");
          }}
        >
          7
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("8");
          }}
        >
          8
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("9");
          }}
        >
          9
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            clear();
          }}
        >
          AC
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("4");
          }}
        >
          4
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("5");
          }}
        >
          5
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("6");
          }}
        >
          6
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleOperator("-");
          }}
        >
          -
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleOperator("+");
          }}
        >
          +
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("1");
          }}
        >
          1
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("2");
          }}
        >
          2
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleInputs("3");
          }}
        >
          3
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            handleOperator("×");
          }}
        >
          ×
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            handleOperator("÷");
          }}
        >
          ÷
        </Button>
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleInputs(".");
          }}
        >
          .
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            handleInputs("0");
          }}
        >
          0
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleCalculate();
          }}
        >
          =
        </Button>
        <Button disabled></Button>
        <Button disabled></Button>
      </ButtonGroup>
      <br />
    </Box>
  );
};
