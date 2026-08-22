"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import { prospects } from "../prospects";

export default function SportRoster() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport.toLowerCase() : "rugby";

  // Filter & Sort states
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedPosition, setSelectedPosition] = useState("All");
  const [minSquat, setMinSquat] = useState(0);
  const [sortBy, setSortBy] = useState("rating"); // Default sort by Index/Rating

  // Advanced filtering and sorting logic
  const filteredPlayers = useMemo(() => {
    return prospects.filter(p => 
      (selectedCountry === "All" || p.origin === selectedCountry) &&
      (selectedPosition === "All" || p.position === selectedPosition) &&
      (p.squat >= minSquat)
    ).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "speed") return b.topSpeed - a.topSpeed;
      if (sortBy === "squat") return b.squat - a.squat;
      if (sortBy === "bench") return b.bench - a.bench;
      return 0;
    });
  }, [selectedCountry, selectedPosition, minSquat, sortBy]);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ marginBottom: "30px" }}>
          <Link href="/directory" style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>&larr; Back to Directory</Link>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#f8fafc", textTransform: "capitalize", margin: "10px 0 5px 0" }}>
            {sport} Enterprise Scouting Terminal
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: 0 }}>
            Active cross-border talent pipeline. Filter by country, position, and physical benchmarks.
          </p>
        </div>

        {/* Investor & Coach Filter Dashboard */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "16px", marginBottom: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          
          {/* Country Filter */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "8px" }}>ORIGIN COUNTRY</label>
            <select 
              value={selectedCountry} 
              onChange={(e) => setSelectedCountry(e.target.value)}
              style={{ width: "100%", backgroundColor: "#020617", color: "#fff", border: "1px solid #334155", padding: "10px", borderRadius: "8px", fontSize: "14px" }}
            >
              <option value="All">All Countries</option>
              <option value="USA">USA</option>
              <option value="Argentina">Argentina</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Canada">Canada</option>
              <option value="Chile">Chile</option>
            </select>
          </div>

          {/* Position Filter */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "8px" }}>POSITION GROUP</label>
            <select 
              value={selectedPosition} 
              onChange={(e) => setSelectedPosition(e.target.value)}
              style={{ width: "100%", backgroundColor: "#020617", color: "#fff", border: "1px solid #334155", padding: "10px", borderRadius: "8px", fontSize: "14px" }}
            >
              <option value="All">All Positions</option>
              <option value="Prop">Prop</option>
              <option value="Flanker">Flanker</option>
              <option value="Fly-Half">Fly-Half</option>
              <option value="Fullback">Fullback</option>
              <option value="Number 8">Number 8</option>
            </select>
          </div>

          {/* Sort By Performance Metric */}
          <div>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "8px" }}>SORT BY METRIC</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              style={{ width: "100%", backgroundColor: "#020617", color: "#fff", border: "1px solid #334155", padding: "10px", borderRadius: "8px", fontSize: "14px" }}
            >
              <option value="rating">Top Rated Index</option>
              <option value="speed">Fastest (Top Speed)</option>
              <option value="squat">Strongest (Squat)</option>
              <option value="bench">Upper Body (Bench)</option>
            </select>
          </div>

          {/* Squat Benchmark Filter */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8" }}>MIN SQUAT</label>
              <span style={{ fontSize: "12px", fontWeight: "800", color: "#f59e0b", backgroundColor: "rgba(245, 158, 11, 0.1)", padding: "2px 6px", borderRadius: "4px" }}>
                {minSquat} lbs
              </span>
            </div>
            <input 
              type="range" min="0" max="550" step="10" value={minSquat}
              onChange={(e) => setMinSquat(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#f59e0b", marginTop: "6px", cursor: "pointer" }}
            />
          </div>

        </div>

        {/* Results Counter */}
        <div style={{ marginBottom: "15px", color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>
          Showing <span style={{ color: "#38bdf8" }}>{filteredPlayers.length}</span> verified prospects matching criteria
        </div>

        {/* Player Grid List */}
        <div style={{ display: "grid", gap: "12px" }}>
          {filteredPlayers.map((p: any) => (
            <Link key={p.id} href={`/directory/${sport}/${p.id}`} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 24px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.2s" }}
                   onMouseOver={(e) => e.currentTarget.style.borderColor = "#f59e0b"}
                   onMouseOut={(e) => e.currentTarget.style.borderColor = "#1e293b"}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontWeight: "800", fontSize: "18px", color: "#f8fafc" }}>{p.name}</span>
                    <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", fontSize: "11px", fontWeight: "800", padding: "2px 8px", borderRadius: "4px" }}>
                      Index: {p.rating}
                    </span>
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {p.origin} &bull; Age {p.age} &bull; <span style={{ color: "#cbd5e1" }}>{p.position}</span> &bull; Squat: <strong style={{ color: "#f59e0b" }}>{p.squat} lbs</strong> &bull; Speed: <strong style={{ color: "#38bdf8" }}>{p.topSpeed} km/h</strong>
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
