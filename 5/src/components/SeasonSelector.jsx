// SeasonSelector component allows the user to pick a podcast season from a dropdown.
// Props:
// - seasons: array of season objects
// - selectedSeason: index of the currently selected season
// - setSelectedSeason: function to update the selected season
export default function SeasonSelector({ seasons, selectedSeason, setSelectedSeason }) {
  return (
    <div className="podcast-detail-season-selector-row">
      <h2>Current Season</h2>
      {/* Dropdown for selecting a season */}
      <select
        value={selectedSeason}
        onChange={e => setSelectedSeason(Number(e.target.value))}
        className="podcast-detail-season-selector"
      >
        {/* Render an option for each season, showing season number and episode count */}
        {seasons.map((s, idx) => (
          <option key={s.title || idx} value={idx}>
            Season {s.season} ({s.episodes?.length || 0} episodes)
          </option>
        ))}
      </select>
    </div>
  );
} 