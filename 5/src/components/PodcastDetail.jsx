// PodcastDetail.jsx: Displays detailed info for a single podcast, including seasons and episodes
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
  // Get the podcast ID from the URL params
  const { id } = useParams();
  // State for the podcast data
  const [show, setShow] = useState(null);
  // State for loading indicator
  const [loading, setLoading] = useState(true);
  // State for error handling
  const [error, setError] = useState(null);
  // State for which season is selected
  const [selectedSeason, setSelectedSeason] = useState(0);

  // Fetch podcast details when component mounts or id changes
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

  // Set the document title to the podcast title when data is loaded
  useEffect(() => {
    if (show && show.title) {
      document.title = show.title;
    }
  }, [show]);

  // Show loading, error, or no data states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!show) return <div>No data found.</div>;

  // Only display mapped genres, filter out 'All' and 'Featured'
  const genres = (show.genres || [])
    .filter((g) => !["All", "Featured"].includes(g) && GENRE_MAP[g])
    .map((g) => GENRE_MAP[g]);
  // Get all seasons for the podcast
  const seasons = show.seasons || [];
  // Get the currently selected season
  const currentSeason = seasons[selectedSeason] || {};
  // Get episodes for the current season
  const episodes = currentSeason.episodes || [];

  // Render the podcast detail page with header, genre, season selector, and episodes
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