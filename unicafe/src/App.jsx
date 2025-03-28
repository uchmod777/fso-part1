import { useState } from "react";

const Button = ({ type, onClick, text }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setValGood = () => {
    const newValGood = good + 1;
    setGood(newValGood);
  };

  const setValNeutral = () => {
    const newValNeutral = neutral + 1;
    setNeutral(newValNeutral);
  };

  const setValBad = () => {
    const newValBad = bad + 1;
    setBad(newValBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <br />
      <Button type="button" onClick={setValGood} text="good" />
      <Button type="button" onClick={setValNeutral} text="neutral" />
      <Button type="button" onClick={setValBad} text="bad" />
      <br />
      <h1>Statistics</h1>
      <br />
      <ul style={{ "list-style-type": "none" }}>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
      </ul>
    </div>
  );
};

export default App;
