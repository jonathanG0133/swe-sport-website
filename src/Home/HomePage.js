import { useRef } from "react";
import MatchBox from "../MatchBox";
import useFetch from "../Service/LeagueAPI.js";
import Slideshow from "../Slideshow/Slideshow";

function HomePage() {
  const leagueIds = {
    Allsvenskan: "124439",
    Superligan: "121413",
    SHL: "108487",
  };

  const [allsvenskan] = useFetch(
    leagueIds.Allsvenskan + "/",
    "events",
    "&limit=3&sort=startDate%3Adesc"
  );

  const [superligan] = useFetch(
    leagueIds.Superligan + "/",
    "events",
    "&limit=3&sort=startDate%3Adesc"
  );

  const [shl] = useFetch(
    leagueIds.SHL + "/",
    "events",
    "&limit=3&sort=startDate%3Adesc"
  );

  return (
    <>
      <div
        id="bild"
        className="row text-center d-flex align-items-center justify-content-center"
      >
        <Slideshow />
        <div className="col-6">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            varius scelerisque nisi. Nam molestie purus non pharetra ultrices.
            Maecenas sit amet molestie lacus, ac scelerisque ipsum.
          </h4>
        </div>

        <div className="event-container col-8 text-center">
          <h3 className="mt-5">Senaste matcherna:</h3>
          <div className="row">
            <h5>Allsvenskan</h5>
            {allsvenskan.map((event) => (
              <MatchBox key={event.id} event={event} />
            ))}
          </div>
          <hr className="solid"></hr>
          <div className="row">
            <h5>Superligan</h5>
            {superligan.map((event) => (
              <MatchBox key={event.id} event={event} />
            ))}
          </div>
          <hr className="solid"></hr>
          <div className="row">
            <h5>SHL</h5>
            {shl.map((event) => (
              <MatchBox key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
