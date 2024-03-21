/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from "axios";
import { useState, useEffect } from "react";
import { TeamsIndex } from "./TeamsIndex";
import { TeamsNew } from "./TeamsNew";
import { Modal } from "./Modal";
import { TeamsShow } from "./TeamsShow";

/* eslint-disable react/no-unescaped-entities */
export function Content() {
  const [teams, setTeams] = useState([]);
  const [isTeamsShowVisible, setIsTeamsShowVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState({});

  const handleIndexTeams = () => {
    axios.get("http://localhost:3000/teams.json").then((response) => {
      setTeams(response.data);
      console.log(teams);
    });
  };

  const handleCreateTeam = (params, successCallback) => {
    console.log("handleCreateTeam", params);
    axios.post("http://localhost:3000/teams.json", params).then((response) => {
      setTeams([...teams, response.data]);
      successCallback();
    });
  };

  const handleShowTeam = (team) => {
    console.log("handleShowTeam", team);
    setIsTeamsShowVisible(true);
    setCurrentTeam(team);
  };

  const handleUpdateTeam = (id, params) => {
    console.log("handleUpdateTeam", params);
    axios.patch(`http://localhost:3000/teams` + id + `.json`, params).then((response) => {
      setTeams(
        teams.map((team) => {
          if (team.id === response.data.id) {
            return response.data;
          } else {
            return team;
          }
        })
      );
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsTeamsShowVisible(false);
  };

  const handleDestroyTeam = (id) => {
    console.log("handleDestroyTeam", id);
    axios.delete(`http://localhost:3000/teams` + id`.json`).then((response) => {
      setTeams(teams.filter((team) => team.id !== id));
      handleClose();
    });
  };

  useEffect(handleIndexTeams, []);

  return (
    <main>
      <div className="container">
        <h1>USC Football's Greatest Teams</h1>
        <TeamsNew onCreateTeam={handleCreateTeam} />
        <TeamsIndex teams={teams} onShowTeam={handleShowTeam} />
        <Modal show={isTeamsShowVisible} onClose={handleClose}>
          <TeamsShow team={currentTeam} onUpdateTeam={handleUpdateTeam} onDestroyTeam={handleDestroyTeam} />
        </Modal>
      </div>
    </main>
  );
}
