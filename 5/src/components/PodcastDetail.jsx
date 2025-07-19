import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./PodDetail.css";
import PodcastDetailHeader from "./PodcastDetailHeader";
import SeasonSelector from "./SeasonSelector";
import SeasonDetails from "./SeasonDetails";

// Genre string to title mapping (updated)
const GENRE_MAP = {
  "Personal Growth": "Personal Growth",
  "Investigative Journalism": "Investigative Journalism",
  "History": "History",
  "Comedy": "Comedy",
  "Entertainment": "Entertainment",
  "Business": "Business",
  "Fiction": "Fiction",
  "News": "News",
  "Kids and Family": "Kids and Family",
};

export default function PodcastDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch podcast details.");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (show && show.title) {
      document.title = show.title;
    }
  }, [show]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!show) return <div>No data found.</div>;

  // Only display mapped genres, filter out 'All' and 'Featured'
  const genres = (show.genres || [])
    .filter((g) => !["All", "Featured"].includes(g) && GENRE_MAP[g])
    .map((g) => GENRE_MAP[g]);
  const seasons = show.seasons || [];
  const currentSeason = seasons[selectedSeason] || {};
  const episodes = currentSeason.episodes || [];

  return (
    <>
      <Header />
      <div className="podcast-detail-container">
        <PodcastDetailHeader show={show} genres={genres} seasons={seasons} />
        <SeasonSelector
          seasons={seasons}
          selectedSeason={selectedSeason}
          setSelectedSeason={setSelectedSeason}
        />
        <SeasonDetails currentSeason={currentSeason} episodes={episodes} />
      </div>
    </>
  );
} 