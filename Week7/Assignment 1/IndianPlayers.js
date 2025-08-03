const IndianPlayers = () => {
  const oddTeam = ["Rohit", "Gill", "Iyer", "Jadeja", "Bumrah"];
  const evenTeam = ["Virat", "Rahul", "Hardik", "Ashwin", "Shami", "Siraj"];

  const [odd1, odd2, ...oddRest] = oddTeam;
  const [even1, even2, ...evenRest] = evenTeam;

  const T20players = ["Rohit", "Virat", "Surya"];
  const RanjiTrophyPlayers = ["Jaiswal", "Shaw"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {oddRest.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {evenRest.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;