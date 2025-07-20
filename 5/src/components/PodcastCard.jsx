import { formatDate } from "../utils/formatDate";
import styles from "./PodcastCard.module.css";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

// PodcastCard component displays a summary card for a podcast.
// - Shows image, title, seasons, genres, and last updated date.
// - The whole card is a clickable link to the podcast's detail page.
export default function PodcastCard({ podcast, genres }) {
  // Map genre IDs to their titles using the genres array
  const genreSpans = podcast.genres.map((id) => {
    // For each genre ID, find the matching genre object to get its title
    const match = genres.find((genre) => genre.id === id); 
    return (
      <span key={id} className={styles.tag}>
        {match ? match.title : `Unknown (${id})`}
      </span>
    );
  });

  return (
    // The Link component makes the whole card clickable and navigates to the podcast's detail page
    // The URL is /podcast/{podcast.id}/{slugified-title}
    <Link to={`/podcast/${podcast.id}/${slugify(podcast.title)}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={podcast.image} alt={podcast.title} />
        <h3>{podcast.title}</h3>
        <p className={styles.seasons}>{podcast.seasons} seasons</p>
        <div className={styles.tags}>{genreSpans}</div>
        <p className={styles.updatedText}>
          Updated {formatDate(podcast.updated)}
        </p>
      </div>
    </Link>
  );
}
