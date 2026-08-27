// Add these cards right into your JSX layout grid alongside your squat and bench metric boxes:

<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
  {/* Existing Squat Card */}
  <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
    <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Squat Max</div>
    <div style={{ fontSize: "28px", fontWeight: "700", color: "#f59e0b" }}>{player.squat}</div>
  </div>

  {/* Existing Bench Card */}
  <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
    <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Bench Press</div>
    <div style={{ fontSize: "28px", fontWeight: "700", color: "#38bdf8" }}>{player.bench}</div>
  </div>

  {/* New Yards Per Carry Card */}
  <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
    <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Yards Per Carry</div>
    <div style={{ fontSize: "28px", fontWeight: "700", color: "#4ade80" }}>{player.yardsPerCarry} yds</div>
  </div>

  {/* New Tackle Completion Card */}
  <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
    <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Tackle Completion</div>
    <div style={{ fontSize: "28px", fontWeight: "700", color: "#fb7185" }}>{player.tackleCompletion}%</div>
  </div>
</div>
