import { truncate } from "../utils/truncate";
import { formatDate } from "../utils/formatDate";

export default function EpisodeCard({ ep, idx, currentSeason }) {
  return (
    <div className="podcast-detail-episode-card">
      <div className="podcast-detail-episode-badge">
        {currentSeason.image ? (
          <img src={currentSeason.image} alt={`Season ${currentSeason.season} Cover`} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8 }} />
        ) : (
          `S${currentSeason.season}`
        )}
      </div>
      <div className="podcast-detail-episode-info">
        <div className="podcast-detail-episode-title">
          <span className="podcast-detail-episode-number">Episode {idx + 1}:</span> {ep.title}
        </div>
        <div className="podcast-detail-episode-description">{truncate(ep.description, 120)}</div>
        <div className="podcast-detail-episode-meta">
          {ep.duration ? `${ep.duration} min` : ""}
          {ep.duration && ep.date ? " • " : ""}
          {ep.date ? formatDate(ep.date) : ""}
        </div>
      </div>
    </div>
  );
} 