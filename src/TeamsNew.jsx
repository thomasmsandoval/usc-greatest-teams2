/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
export function TeamsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .team("http://localhost:3000/teams.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="teams-new">
      <h1>New Team</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Year: <input name="year" type="integer" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <div>
          Information: <input name="information" type="text" />
        </div>
        <button type="submit">Create team</button>
      </form>
    </div>
  );
}
