// EpisodeCard component displays information for a single podcast episode.
// Props:
// - ep: the episode object (title, description, duration, date, etc.)
// - idx: the index of the episode in the season (used for numbering)
// - currentSeason: the current season object (for image and season number)
import { truncate } from "../utils/truncate";
import { formatDate } from "../utils/formatDate";

export default function EpisodeCard({ ep, idx, currentSeason }) {
  return (
    <div className="podcast-detail-episode-card">
      {/* Badge with season image or season number if no image */}
      <div className="podcast-detail-episode-badge">
        {currentSeason.image ? (
          <img
            src={currentSeason.image}
            alt={`Season ${currentSeason.season} Cover`}
            style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8 }}
          />
        ) : (
          `S${currentSeason.season}`
        )}
      </div>
      <div className="podcast-detail-episode-info">
        {/* Episode title with episode number */}
        <div className="podcast-detail-episode-title">
          <span className="podcast-detail-episode-number">Episode {idx + 1}:</span> {ep.title}
        </div>
        {/* Truncated episode description for preview */}
        <div className="podcast-detail-episode-description">{truncate(ep.description, 120)}</div>
        {/* Meta info: duration and formatted date, separated by a dot if both exist */}
        <div className="podcast-detail-episode-meta">
          {ep.duration ? `${ep.duration} min` : ""}
          {ep.duration && ep.date ? " • " : ""}
          {ep.date ? formatDate(ep.date) : ""}
        </div>
      </div>
    </div>
  );
} 