import { useState } from "react";
const styles = {
  container: {
    width: "250px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #333",
    borderRadius: "10px",
    textAlign: "center",
   background : "linear-gradient(to right, red, blue)"
  },
  input: {
    width: "100%",
    height: "40px",
    marginBottom: "10px",
    fontSize: "18px",
    textAlign: "right",
    border:"2px solid black"
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px"
  }
};


function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.innerText);
  };

  const clear = () => {
    setValue("");
  };

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Calculator</h2>

      <input
        type="text"
        value={value}
        readOnly
        style={styles.input}
      />

      <div style={styles.buttons}>
        <button onClick={clear}>C</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>-</button>

        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>

        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>

        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>

        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
  
}

export default Calculator;
