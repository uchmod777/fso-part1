import { useState } from "react";

const StatisticLine = ({ text, statistic, percentSign }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>
          {statistic} {percentSign ? "%" : ""}
        </td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = ((good / all) * 100).toFixed(2);

  if (0 === all) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" statistic={good} percentSign={false} />

            <StatisticLine
              text="neutral"
              statistic={neutral}
              percentSign={false}
            />

            <StatisticLine text="bad" statistic={bad} percentSign={false} />

            <StatisticLine text="all" statistic={all} percentSign={false} />

            <StatisticLine
              text="average"
              statistic={average}
              percentSign={false}
            />

            <StatisticLine
              text="positive"
              statistic={positive}
              percentSign={true}
            />
          </tbody>
        </table>
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
      <Button type="button" onClick={setValGood} text="good" />
      <Button type="button" onClick={setValNeutral} text="neutral" />
      <Button type="button" onClick={setValBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
