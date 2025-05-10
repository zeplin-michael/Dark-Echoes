import EpisodeDetails from "./Components/EpisodeDetails/EpisodeDetails";
import Episodes from "./Components/Episodes/Episodes";
import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes
          episodeList={episodeList}
          setSelectedEpisode={setSelectedEpisode}
        />
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
