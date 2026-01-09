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
    <div>About</div>
  )
}

export default About