"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PlayerProfile() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport : "sport";
  const id = typeof params.id === 'string' ? params.id : "";

  // Expanded multi-prospect database (5+ elite options per position grouping)
  const database: Record<string, any> = {
    // --- PROP / LOCK (Strength & Set-Piece Focus) ---
    "liam-oconnor": {
      name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'4\"", weight: "235 lbs", rating: 94,
      metrics: { scrumStability: "98%", squatMax: "540 lbs", benchPress: "410 lbs", powerOutput: "1,750 W" },
      bio: "Powerful front-row prospect out of British Columbia. Exceptional set-piece anchor with elite max-strength (Squat 540 lbs / Bench 410 lbs).",
    },
    "mateo-gimenez": {
      name: "Mateo Giménez", origin: "Argentina", age: 20, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'3\"", weight: "242 lbs", rating: 95,
      metrics: { scrumStability: "97%", squatMax: "560 lbs", benchPress: "425 lbs", powerOutput: "1,810 W" },
      bio: "High-motor loosehead prop from Buenos Aires. Dominant in close-quarter collisions with elite force generation on scrum engagement.",
    },
    "ignacio-vargas": {
      name: "Ignacio Vargas", origin: "Uruguay", age: 19, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 2", status: "Verified", height: "6'5\"", weight: "248 lbs", rating: "91",
      metrics: { lineoutWinRate: "96%", squatMax: "520 lbs", benchPress: "395 lbs", powerOutput: "1,690 W" },
      bio: "Towering second-row option from Montevideo. Exceptional lineout caller and maul defensive stopper.",
    },
    "dante-morales": {
      name: "Dante Morales", origin: "Chile", age: 18, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 2", status: "Verified", height: "6'2\"", weight: "230 lbs", rating: "89",
      metrics: { scrumStability: "94%", squatMax: "495 lbs", benchPress: "380 lbs", powerOutput: "1,620 W" },
      bio: "Mobile tighthead prop with exceptional work rate around the breakdown and high defensive tackle completion.",
    },
    "gabriel-roux": {
      name: "Gabriel Roux", origin: "Canada", age: 20, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'6\"", weight: "255 lbs", rating: "96",
      metrics: { lineoutWinRate: "98%", squatMax: "575 lbs", benchPress: "440 lbs", powerOutput: "1,900 W" },
      bio: "Elite Canadian lock prospect drawing heavy collegiate and professional interest due to unmatched physical leverage.",
    },

    // --- BACK 3 / WING / FULLBACK (Speed & Acceleration Focus) ---
    "nicolas-herrera": {
      name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback (Back 3)", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'0\"", weight: "185 lbs", rating: 92,
      metrics: { topSpeed: "35.1 km/h", maxSprintOutput: "1,420 W", aerialWinRate: "89%", fieldCoverage: "10.8 km" },
      bio: "Lightning-fast back-three counter-attacker. Clocked at an elite top speed of 35.1 km/h with exceptional aerial recovery skills.",
    },
    "lucas-silva-santos": {
      name: "Lucas Silva Santos", origin: "Argentina", age: 19, position: "Winger (Back 3)", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "5'11\"", weight: "180 lbs", rating: 97,
      metrics: { topSpeed: "36.4 km/h", maxSprintOutput: "1,510 W", defendersBeaten: "7.2/gm", acceleration: "2.7s" },
      bio: "Electrifying winger out of Rosario. Possesses world-class acceleration and top-end speed profile tailored for elite MLR and Collegiate 7s/15s.",
    },
    "joaquin-peralta": {
      name: "Joaquín Peralta", origin: "Uruguay", age: 18, position: "Winger (Back 3)", sport: "rugby",
      tier: "Tier 2", status: "Verified", height: "6'1\"", weight: "188 lbs", rating: "90",
      metrics: { topSpeed: "34.2 km/h", maxSprintOutput: "1,380 W", tryConversion: "88%", fieldCoverage: "10.2 km" },
      bio: "Clinical finisher from Punta del Este with exceptional spatial awareness and sound defensive positioning under the high ball.",
    },
    "ethan-macdonald": {
      name: "Ethan MacDonald", origin: "Canada", age: 19, position: "Fullback (Back 3)", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'2\"", weight: "192 lbs", rating: "93",
      metrics: { topSpeed: "34.8 km/h", maxSprintOutput: "1,450 W", aerialWinRate: "92%", kickingMetres: "52m avg" },
      bio: "Versatile fullback with an absolute cannon of a boot and elite transitional recovery speed across the backfield.",
    },
    "mateo-rodriguez": {
      name: "Mateo Rodriguez", origin: "Argentina", age: 19, position: "Fly-Half / Center", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'1\"", weight: "195 lbs", rating: 96,
      metrics: { sprintSpeed: "33.4 km/h", acceleration: "2.9s (10m)", passingAccuracy: "94%", gameWorkload: "11.2 km" },
      bio: "Elite playmaker from Buenos Aires with exceptional vision and tactical kicking. High acceleration metrics suited for dynamic backline systems.",
    },
    "santiago-silva": {
      name: "Santiago Silva", origin: "Uruguay", age: 20, position: "Flanker", sport: "rugby",
      tier: "Tier 2", status: "Verified", height: "6'2\"", weight: "215 lbs", rating: 88,
      metrics: { tackleEfficiency: "92%", breakdownStealRate: "4.2/gm", benchPress: "365 lbs", squatMax: "485 lbs" },
      bio: "Relentless breakdown operator from Montevideo. High defensive work-rate with exceptional lower-body power numbers.",
    }
  };

  const player = database[id] || {
    name: "Athlete Profile", origin: "Unknown", age: "N/A", position: "Athlete", sport: sport,
    tier: "Pending", status: "Unverified", height: "N/A", weight: "N/A", rating: 85,
    metrics: { performanceIndex: "Synchronizing..." },
    bio: "Profile data is currently being synchronized with regional telemetry engines."
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Navigation */}
        <div style={{ marginBottom: "30px" }}>
          <Link href={`/directory/${sport}`} style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>
            &larr; Back to {sport} Roster
          </Link>
        </div>

        {/* Header Card */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "16px", marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "#d97706", color: "#fff", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>{player.tier}</span>
              <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>Telemetry Index: {player.rating}</span>
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#f8fafc", margin: "0 0 8px 0" }}>{player.name}</h1>
            <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
              {player.position} &bull; Origin: <strong style={{ color: "#f8fafc" }}>{player.origin}</strong> &bull; Age {player.age}
            </p>
          </div>
          <div style={{ backgroundColor: "#020617", border: "1px solid #334155", padding: "16px 20px", borderRadius: "12px", display: "flex", gap: "20px" }}>
            <div>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>HEIGHT</div>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc" }}>{player.height}</div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#94a3b8" }}>WEIGHT</div>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc" }}>{player.weight}</div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "24px 30px", borderRadius: "16px", marginBottom: "30px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#f59e0b", margin: "0 0 10px 0" }}>Scouting &amp; Profile Overview</h3>
          <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>{player.bio}</p>
        </div>

        {/* Position-Specific Telemetry Metrics Grid */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", marginBottom: "15px" }}>Verified Position-Specific Telemetry</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            {Object.entries(player.metrics).map(([key, value], idx) => (
              <div key={idx} style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", marginBottom: "6px" }}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div style={{ fontSize: "22px", fontWeight: "900", color: "#38bdf8" }}>{String(value)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Match Footage / Video Section */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "16px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", marginBottom: "15px" }}>Match Footage &amp; Reeling</h3>
          <div style={{ backgroundColor: "#020617", border: "1px dashed #334155", height: "220px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "32px" }}>▶️</span>
            <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>Verified Game Tape &amp; Position-Specific Tracking Feed</span>
          </div>
        </div>

      </div>
    </main>
  );
}
