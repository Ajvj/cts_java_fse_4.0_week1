import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 85 },
    { name: "Dhawan", score: 65 },
    { name: "Pant", score: 75 },
    { name: "Kohli", score: 55 },
    { name: "Jadeja", score: 60 },
    { name: "Ashwin", score: 70 },
    { name: "Rahul", score: 88 },
    { name: "Shami", score: 45 },
    { name: "Bumrah", score: 50 },
    { name: "Surya", score: 92 }
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

<h2>Filtered Players (score &lt; 70):</h2>

      {filteredPlayers.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
