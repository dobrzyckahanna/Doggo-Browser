import React from "react";

function Button({ breed, setChosenBreed }) {
  return <button onClick={() => setChosenBreed(breed)}>{breed}</button>;
}

export default Button;
