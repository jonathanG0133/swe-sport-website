import React from "react";
import "./matchBox.css";

function MatchBox({ event }) {
  // Convert the "startDate" to a JavaScript Date object
  const startDate = new Date(event.startDate);
  const formattedDate =
    startDate.toLocaleDateString() + " " + startDate.toLocaleTimeString();

  let arenaName = "Arena saknas";
  if (event.facts != null) {
    arenaName = event.facts.arena.name;
  }
  return (
    <div
      className="container border border-black mb-3 col-6"
      id="main-container"
    >
      <div className="row row-team-logo">
        <div className="date col-12">{formattedDate}</div>
      </div>
      <div className="row">
        <div className="team-logo col-6">
          <img
            className="logo-img"
            src={event.homeTeam.logo}
            alt={event.homeTeam.name}
          />
        </div>
        <div className="team-logo col-6">
          <img
            className="logo-img"
            src={event.visitingTeam.logo}
            alt={event.visitingTeam.name}
          />
        </div>
      </div>
      <div className="row">
        <div className="score col-12">
          <p>Resultat:</p>
          <h1>
            {event.homeTeamScore} - {event.visitingTeamScore}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="arena col-12">{arenaName}</div>
      </div>
    </div>
  );
}

export default MatchBox;
