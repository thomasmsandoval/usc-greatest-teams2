/* eslint-disable react/prop-types */
export function TeamsIndex(props) {
  console.log(props);
  return (
    <div id="teams-index">
      <h1>Top 10 Greatest Teams</h1>
      <div className="cards">
        {props.teams.map((team) => (
          <div key={team.id} className="teams card">
            <h2>{team.year}</h2>
            <img src={team.image} alt="" />
            <p>Information: {team.information}</p>
            <button onClick={() => props.onShowTeam(team)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
