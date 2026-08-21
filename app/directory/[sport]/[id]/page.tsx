"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PlayerProfile() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport : "sport";
  const id = typeof params.id === 'string' ? params.id : "";

  // Comprehensive cross-sport athlete database
  const database: Record<string, any> = {
    "mateo-rodriguez": {
      name: "Mateo Rodriguez", origin: "Argentina", age: 19, position: "Fly-Half / Center", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'1\"", weight: "195 lbs",
      metrics: { sprintSpeed: "33.4 km/h", maxOutput: "1,420 W", gpsWorkload: "11.2 km/match", passingAccuracy: "94%" },
      bio: "Elite playmaker from Buenos Aires with exceptional vision and tactical kicking game. Competing in international U20 circuits, targeting US collegiate pathways and MLR academies."
    },
    "santiago-silva": {
      name: "Santiago Silva", origin: "Uruguay", age: 20, position: "Flanker", sport: "rugby",
      tier: "Tier 2", status: "Pending Telemetry", height: "6'2\"", weight: "215 lbs",
      metrics: { sprintSpeed: "31.8 km/h", maxOutput: "1,580 W", gpsWorkload: "12.6 km/match", tackleEfficiency: "92%" },
      bio: "Relentless breakdown operator and defensive anchor from Montevideo. High defensive work-rate looking for North American university exposure."
    },
    "liam-oconnor": {
      name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop / Lock", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'4\"", weight: "235 lbs",
      metrics: { sprintSpeed: "29.5 km/h", maxOutput: "1,750 W", gpsWorkload: "9.8 km/match", scrumStability: "98%" },
      bio: "Powerful front-row prospect out of British Columbia. Exceptional set-piece execution and modern multi-phase mobility."
    },
    "nicolas-herrera": {
      name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback", sport: "rugby",
      tier: "Tier 1", status: "Verified", height: "6'0\"", weight: "185 lbs",
      metrics: { sprintSpeed: "34.2 km/h", maxOutput: "1,390 W", gpsWorkload: "10.5 km/match", aerialWinRate: "89%" },
      bio: "Dynamic back-three counter-attacker with elite top-end speed. Proven try-scorer in South American regional pathways."
    },
    "jaxson-miller": {
      name: "Jaxson Miller", origin: "USA", age: 19, position: "Scrum-Half", sport: "rugby",
      tier: "Tier 2", status: "Verified", height: "5'10\"", weight: "175 lbs",
      metrics: { sprintSpeed: "32.1 km/h", maxOutput: "1,310 W", gpsWorkload: "11.9 km/match", passRelease: "0.41s" },
      bio: "Crisp service and high rugby-IQ halfback from the Midwest select-side pipeline. Looking to bridge into elite collegiate programs."
    },
    "lucas-dubois": {
      name: "Lucas Dubois", origin: "Canada", age: 18, position: "Center / Forward", sport: "hockey",
      tier: "Tier 1", status: "Verified", height: "6'0\"", weight: "185 lbs",
      metrics: { topSpeed: "24.5 mph", edgeControl: "94%", acceleration: "2.8s (0-20m)", shotVelocity: "88 mph" },
      bio: "Explosive Ontario Hockey League prospect with elite skating acceleration and high-hockey IQ playmaking ability."
    },
    "mateo-rossi": {
      name: "Mateo Rossi", origin: "Argentina", age: 19, position: "Goaltender", sport: "hockey",
      tier: "Tier 2", status: "Verified", height: "6'2\"", weight: "190 lbs",
      metrics: { savePercentage: ".924", reactionTime: "0.14s", lateralQuickness: "High", puckTracking: "95%" },
      bio: "Positional goaltender developed in international junior circuits with exceptional lateral agility and glove-hand coverage."
    },
    "thiago-santos": {
      name: "Thiago Santos", origin: "Uruguay", age: 19, position: "Central Midfielder", sport: "soccer",
      tier: "Tier 1", status: "Verified", height: "5'11\"", weight: "165 lbs",
      metrics: { totalDistance: "12.4 km", sprintDistance: "1.1 km", passCompletion: "91%", pressureSuccess: "88%" },
      bio: "Box-to-box midfielder from Montevideo with elite aerobic capacity and defensive transition management."
    }
  };

  const player = database[id] || {
    name: "Athlete Profile", origin: "Unknown", age: "N/A", position: "Athlete", sport: sport,
    tier: "Pending", status: "Unverified", height: "N/A", weight: "N/A",
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
              <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>{player.status}</span>
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
          <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#f59e0b", margin: "0 0 10px 0" }}>Scouting Overview</h3>
          <p style={{ color: "#cbd5e1", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>{player.bio}</p>
        </div>

        {/* Telemetry Metrics Grid */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", marginBottom: "15px" }}>Verified Biometric Telemetry</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            {Object.entries(player.metrics).map(([key, value], idx) => (
              <div key={idx} style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
                <div style={{ fontSize: "12px", color: "#94a3b8", textTransform: "uppercase", marginBottom: "6px" }}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div style={{ fontSize: "24px", fontWeight: "900", color: "#38bdf8" }}>{String(value)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Match Footage / Video Section */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "16px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", marginBottom: "15px" }}>Match Footage &amp; Reeling</h3>
          <div style={{ backgroundColor: "#020617", border: "1px dashed #334155", height: "250px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "32px" }}>▶️</span>
            <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>Verified Game Tape &amp; Touchline Tracking Feed</span>
          </div>
        </div>

      </div>
    </main>
  );
}
