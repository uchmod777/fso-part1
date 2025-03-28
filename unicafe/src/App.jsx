import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = ((good / all) * 100).toFixed(2);

  if (0 === all) {
    return (
      <div>
        <h1>Statistics</h1>
        <br />
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <br />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    );
  }
};

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

  // const incrementValue = ({ value, setter }) => {
  //   const incrementedValue = value + 1;
  //   setter(incrementedValue);
  // };

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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
