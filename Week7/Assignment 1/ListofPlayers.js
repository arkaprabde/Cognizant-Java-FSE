const ListofPlayers = () => {
  const players = [
    { name: "Rohit", score: 85 },
    { name: "Virat", score: 45 },
    { name: "Gill", score: 90 },
    { name: "Rahul", score: 66 },
    { name: "Iyer", score: 77 },
    { name: "Hardik", score: 68 },
    { name: "Jadeja", score: 34 },
    { name: "Ashwin", score: 91 },
    { name: "Bumrah", score: 88 },
    { name: "Shami", score: 62 },
    { name: "Siraj", score: 53 },
  ];

  const allPlayers = players.map((p, i) => (
    <li key={i}>
      {p.name} - {p.score}
    </li>
  ));

  const below70 = players.filter((p) => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with score below 70</h2>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;   