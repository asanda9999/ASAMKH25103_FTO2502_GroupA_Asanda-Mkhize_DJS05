import EpisodeCard from "./EpisodeCard";

export default function SeasonDetails({ currentSeason, episodes }) {
  return (
    <div className="podcast-detail-season-details">
      <div className="podcast-detail-season-header">
        <div className="podcast-detail-season-cover">
          {currentSeason.image ? <img src={currentSeason.image} alt="Season Cover" /> : `Season ${currentSeason.season} Cover`}
        </div>
        <div>
          <h3>{currentSeason.title}</h3>
          <div className="podcast-detail-season-description">{currentSeason.description}</div>
          <div className="podcast-detail-season-meta">
            {episodes.length} Episodes &bull; Released {currentSeason.year || "-"}
          </div>
        </div>
      </div>
      {/* Episode List */}
      <div>
        {episodes.map((ep, idx) => (
          <EpisodeCard key={ep.id || idx} ep={ep} idx={idx} currentSeason={currentSeason} />
        ))}
        {episodes.length === 0 && <div className="podcast-detail-no-episodes">No episodes found for this season.</div>}
      </div>
    </div>
  );
} 