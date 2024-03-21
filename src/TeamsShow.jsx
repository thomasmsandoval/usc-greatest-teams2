/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function TeamsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateTeam(props.team.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyTeam(props.team.id);
  };

  return (
    <div id="teams-show">
      <h1>{props.team.year}</h1>
      <p>image: {props.team.image}</p>
      <p>Information: {props.team.information}</p>
      <h2>Edit team!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Year: <input defaultValue={props.team.year} name="year" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.team.url} name="image" type="text" />
        </div>
        <div>
          Information: <input defaultValue={props.team.information} name="information" type="text" />
        </div>
        <button type="submit">Update team</button>
      </form>
      <button onClick={handleClick}>Destroy team</button>
    </div>
  );
}
