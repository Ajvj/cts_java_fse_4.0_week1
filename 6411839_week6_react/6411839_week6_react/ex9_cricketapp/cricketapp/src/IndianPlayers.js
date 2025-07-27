import React from 'react';

const IndianPlayers = () => {
  const T20 = ["Kohli", "Rohit", "Pant", "Hardik"];
  const Ranji = ["Pujara", "Iyer", "Saha", "Shaw"];

  const allPlayers = [...T20, ...Ranji];

  const [oddPlayers, evenPlayers] = [
    allPlayers.filter((_, index) => index % 2 === 0),
    allPlayers.filter((_, index) => index % 2 !== 0)
  ];

  return (
    <div>
      <h2>Merged Players</h2>
      <p>{allPlayers.join(', ')}</p>

      <h3>Odd Index Players</h3>
      <p>{oddPlayers.join(', ')}</p>

      <h3>Even Index Players</h3>
      <p>{evenPlayers.join(', ')}</p>
    </div>
  );
};

export default IndianPlayers;
