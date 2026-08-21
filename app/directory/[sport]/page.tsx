"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PlayerProfile() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport : "sport";
  const id = typeof params.id === 'string' ? params.id : "";

  // Expanded database with position-specific physical metrics (Speed for Backs, Strength for Forwards)
  const database: Record<string, any> = {
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
    },
    "liam-oconnor": {
      name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'4\"", weight: "235 lbs", rating: 94,
      metrics: { scrumStability: "98%", squatMax: "540 lbs", benchPress: "410 lbs", powerOutput: "1,750 W" },
      bio: "Powerful front-row prospect out of British Columbia. Exceptional set-piece anchor with elite max-strength (Squat 540 lbs / Bench 410 lbs).",
    },
    "nicolas-herrera": {
      name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback (Back 3)", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'0\"", weight: "185 lbs", rating: 92,
      metrics: { topSpeed: "35.1 km/h", maxSprintOutput: "1,420 W", aerialWinRate: "89%", fieldCoverage: "10.8 km" },
      bio: "Lightning-fast back-three counter-attacker. Clocked at an elite top speed of 35.1 km/h with exceptional aerial recovery skills.",
    },
    "tomas-gomez": {
      name: "Tomas Gomez", origin: "Argentina", age: 18, position: "Number 8", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'3\"", weight: "225 lbs", rating: 97,
      metrics: { carryMetres: "145m avg", defendersBeaten: "6.4/gm", squatMax: "510 lbs", tackleEfficiency: "94%" },
      bio: "Generational loose forward talent from Córdoba. Combines elite ball-carrying power with explosive open-field speed.",
    },
    "lucas-dubois": {
      name: "Lucas Dubois", origin: "Canada", age: 18, position: "Center / Forward", sport: "hockey",
      tier: "Tier 1", status: "Verified", height: "6'0\"", weight: "185 lbs", rating: 95,
      metrics: { topSpeed: "24.5 mph", edgeControl: "94%", shotVelocity: "88 mph", acceleration: "2.8s" },
      bio: "Explosive OHL prospect with elite skating acceleration and high-velocity wrist shot.",
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
