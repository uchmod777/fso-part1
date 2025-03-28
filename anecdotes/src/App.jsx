import { useState } from "react";

const Button = ({ type, onClick, text }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [anecdoteVotes, setAnecdoteVotes] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const selectRandomAnecdote = () => {
    const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdoteIndex);
  };

  const voteOnAnecdote = () => {
    setAnecdoteVotes((prevVotes) => {
      const newVotes = [...prevVotes];
      newVotes[selected] += 1;
      return newVotes;
    });
  };

  const getMaxIndex = (arr) => {
    const maxValue = Math.max(...arr);
    return arr.indexOf(maxValue);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <br />
      {'"' + anecdotes[selected] + '"'} <br />
      <p>has {anecdoteVotes[selected]} votes</p>
      <Button type="button" onClick={voteOnAnecdote} text="Vote" />
      <Button
        type="button"
        onClick={selectRandomAnecdote}
        text="next anecdote"
      />
      <br />
      <h1>Anecdote with most votes</h1>
      <br />
      {'"' + anecdotes[getMaxIndex(anecdoteVotes)] + '"'}
    </div>
  );
};

export default App;
