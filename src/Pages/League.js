import React, { useState, useEffect } from "react";
import "../Service/LeagueAPI.js";
import "./League.css";
import MatchBox from "../MatchBox.js";
import useFetch from "../Service/LeagueAPI.js";

function League({ leagueName }) {
  const leagueIds = {
    Allsvenskan: "124439",
    Superettan: "119513",
    Damallsvenskan: "123935",
    Superligan: "121413",
    SHL: "125472",
    SDHL: "125554",
  };

  const leagueId = leagueIds[leagueName];
  console.log(leagueId);

  const [logos] = useFetch(leagueId + "/", "teams", "");
  const [events] = useFetch(
    leagueId + "/",
    "events",
    "&limit=100&sort=startDate%3Adesc"
  );
  const [selectedTeamId, setSelectedTeamId] = useState(null); // State to store selected team ID
  const [selectedTeamName, setSelectedTeamName] = useState(null);
  // Function to handle the image click and update the selected team
  const handleImageClick = (teamId) => {
    // If the selected team is the same as the one clicked, reset it
    if (selectedTeamId === teamId) {
      setSelectedTeamId(null);
      setSelectedTeamName(null); // Reset the selected team name
    } else {
      // Otherwise, select the clicked team
      setSelectedTeamId(teamId);

      // Get and set the selected team's name
      const selectedTeam = logos.find((team) => team.id === teamId);
      if (selectedTeam) {
        setSelectedTeamName(selectedTeam.name + "'s");
      }
    }
  };

  // Filter events based on the selected team ID
  const filteredEvents = selectedTeamId
    ? events.filter(
        (event) =>
          event.homeTeam.id === selectedTeamId ||
          event.visitingTeam.id === selectedTeamId
      )
    : events;

  // Use useEffect to reset selectedTeamId when leagueId changes
  useEffect(() => {
    setSelectedTeamId(null);
    setSelectedTeamName(null);
  }, [leagueId]);

  return (
    <div className="box">
      <div className="row tot">
        <div className="col-2 ">
          <div className="image-container d-flex flex-column align-items-center">
            <p className="rubrik">{leagueName}</p>
            {logos.map((team, index) => (
              <div key={team.id} className="logo-list text-center">
                <img
                  id="logga"
                  src={team.logo}
                  alt={team.name}
                  onClick={() => handleImageClick(team.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="event-container col-8 text-center">
          <p className="lagMatcher">{selectedTeamName} Matcher:</p>
          <div className="row">
            {filteredEvents.map((event) => (
              <MatchBox key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default League;
