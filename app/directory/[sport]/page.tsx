"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SportRoster() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport.toLowerCase() : "rugby";
  const [filterTier, setFilterTier] = useState("All");

  // Expanded international databases across Argentina, Uruguay, Canada, and Chile
  const rosters: Record<string, any[]> = {
    rugby: [
      { id: "mateo-rodriguez", name: "Mateo Rodriguez", origin: "Argentina", age: 19, position: "Fly-Half / Center", tier: "Tier 1", rating: 96, status: "Verified" },
      { id: "santiago-silva", name: "Santiago Silva", origin: "Uruguay", age: 20, position: "Flanker", tier: "Tier 2", rating: 88, status: "Pending Telemetry" },
      { id: "liam-oconnor", name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop / Lock", tier: "Tier 1", rating: 94, status: "Verified" },
      { id: "nicolas-herrera", name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback", tier: "Tier 1", rating: 92, status: "Verified" },
      { id: "jaxson-miller", name: "Jaxson Miller", origin: "USA", age: 19, position: "Scrum-Half", tier: "Tier 2", rating: 89, status: "Verified" },
      { id: "tomas-gomez", name: "Tomas Gomez", origin: "Argentina", age: 18, position: "Number 8", tier: "Tier 1", rating: 97, status: "Verified" }
    ],
    hockey: [
      { id: "lucas-dubois", name: "Lucas Dubois", origin: "Canada", age: 18, position: "Center / Forward", tier: "Tier 1", rating: 95, status: "Verified" },
      { id: "mateo-rossi", name: "Mateo Rossi", origin: "Argentina", age: 19, position: "Goaltender", tier: "Tier 2", rating: 89, status: "Verified" },
      { id: "jonah-larson", name: "Jonah Larson", origin: "Canada", age: 18, position: "Defenseman", tier: "Tier 1", rating: 93, status: "Verified" }
    ],
    soccer: [
      { id: "thiago-santos", name: "Thiago Santos", origin: "Uruguay", age: 19, position: "Central Midfielder", tier: "Tier 1", rating: 96, status: "Verified" },
      { id: "matias-rojas", name: "Matias Rojas", origin: "Chile", age: 20, position: "Winger", tier: "Tier 1", rating: 94, status: "Verified" },
      { id: "ethan-cole", name: "Ethan Cole", origin: "Canada", age: 18, position: "Center Back", tier: "Tier 2", rating: 88, status: "Verified" },
      { id: "joaquin-valenzuela", name: "Joaquin Valenzuela", origin: "Argentina", age: 19, position: "Striker", tier: "Tier 1", rating: 98, status: "Verified" }
    ],
    lacrosse: [
      { id: "caden-white", name: "Caden White", origin: "Canada", age: 19, position: "Attack", tier: "Tier 1", rating: 95, status: "Verified" },
      { id: "brodie-smith", name: "Brodie Smith", origin: "Canada", age: 18, position: "Midfielder", tier: "Tier 1", rating: 91, status: "Verified" }
    ],
    combat: [
      { id: "ignacio-gomez", name: "Ignacio Gomez", origin: "Argentina", age: 20, position: "Welterweight", tier: "Tier 1", rating: 94, status: "Verified" },
      { id: "dante-reyes", name: "Dante Reyes", origin: "Chile", age: 21, position: "Lightweight", tier: "Tier 1", rating: 92, status: "Verified" }
    ],
    baseball: [
      { id: "mateo-valdez", name: "Mateo Valdez", origin: "Argentina", age: 19, position: "Shortstop", tier: "Tier 1", rating: 95, status: "Verified" },
      { id: "carlos-mendoza", name: "Carlos Mendoza", origin: "Chile", age: 20, position: "Pitcher", tier: "Tier 1", rating: 93, status: "Verified" }
    ]
  };

  const rawPlayers = rosters[sport] || rosters["rugby"];
  
  // Filter and sort players by rating descending
  const players = rawPlayers
    .filter((p) => filterTier === "All" || p.tier === filterTier)
    .sort((a, b) => b.rating - a.rating);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ marginBottom: "25px" }}>
          <Link href="/directory" style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>&larr; Back to Directory</Link>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#f8fafc", textTransform: "capitalize", margin: "10px 0 5px 0" }}>
            {sport} International Roster
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: 0 }}>
            Filtered cross-border talent pipeline across Argentina, Uruguay, Chile, and Canada. Sorted by verified telemetry index.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "25px", alignItems: "center" }}>
          <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: "700" }}>FILTER TIER:</span>
          {["All", "Tier 1", "Tier 2"].map((tier) => (
            <button
              key={tier}
              onClick={() => setFilterTier(tier)}
              style={{
                backgroundColor: filterTier === tier ? "#d97706" : "#0f172a",
                color: filterTier === tier ? "#fff" : "#94a3b8",
                border: "1px solid",
                borderColor: filterTier === tier ? "#d97706" : "#1e293b",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer"
              }}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Player List */}
        <div style={{ display: "grid", gap: "12px" }}>
          {players.map((p: any) => (
            <Link key={p.id} href={`/directory/${sport}/${p.id}`} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 24px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.2s" }}
                   onMouseOver={(e) => e.currentTarget.style.borderColor = "#d97706"}
                   onMouseOut={(e) => e.currentTarget.style.borderColor = "#1e293b"}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontWeight: "800", fontSize: "18px", color: "#f8fafc" }}>{p.name}</span>
                    <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", fontSize: "11px", fontWeight: "800", padding: "2px 8px", borderRadius: "4px" }}>
                      Index: {p.rating}
                    </span>
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {p.origin} &bull; Age {p.age} &bull; <span style={{ color: "#cbd5e1" }}>{p.position}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ backgroundColor: "rgba(217, 119, 6, 0.1)", color: "#f59e0b", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(217, 119, 6, 0.2)" }}>
                    {p.tier}
                  </span>
                  <span style={{ color: "#38bdf8", fontSize: "14px", fontWeight: "700" }}>View Profile &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
