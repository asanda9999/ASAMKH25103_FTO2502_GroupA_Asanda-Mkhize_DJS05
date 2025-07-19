export default function SeasonSelector({ seasons, selectedSeason, setSelectedSeason }) {
  return (
    <div className="podcast-detail-season-selector-row">
      <h2>Current Season</h2>
      <select
        value={selectedSeason}
        onChange={e => setSelectedSeason(Number(e.target.value))}
        className="podcast-detail-season-selector"
      >
        {seasons.map((s, idx) => (
          <option key={s.title || idx} value={idx}>
            Season {s.season} ({s.episodes?.length || 0} episodes)
          </option>
        ))}
      </select>
    </div>
  );
} 