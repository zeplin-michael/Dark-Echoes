import React from "react";
import "./Episodes.css";

export default function Episodes({ episodeList, setSelectedEpisode }) {
  return (
    <section className="episodeList">
      <h2>Episodes</h2>
      <ul className="episodeList">
        {episodeList.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
