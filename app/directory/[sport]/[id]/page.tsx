"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import { prospects } from "../prospects";

export default function SportRoster() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport.toLowerCase() : "rugby";

  // Filter states
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedPosition, setSelectedPosition] = useState("All");
  const [selectedTier, setSelectedTier] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  // Extract unique positions for dynamic filter pills
  const availablePositions = useMemo(() => {
    const positions = prospects.map((p: any) => p.position);
    return ["All", ...Array.from(new Set(positions))];
  }, []);

  // Advanced filtering and sorting logic
  const filteredPlayers = useMemo(() => {
    return prospects.filter((player: any) => {
      const matchesCountry = selectedCountry === "All" || player.origin === selectedCountry;
      const matchesPosition = selectedPosition === "All" || player.position === selectedPosition;
      const matchesTier = selectedTier === "All" || player.tier === selectedTier;
      return matchesCountry && matchesPosition && matchesTier;
    }).sort((a: any, b: any) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "squat") return b.squat - a.squat;
      if (sortBy === "bench") return b.bench - a.bench;
      return 0;
    });
  }, [selectedCountry, selectedPosition, selectedTier, sortBy]);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Terminal Header */}
        <div style={{ marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "15px" }}>
          <div>
            <Link href="/" style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>
              &larr; Exit Terminal
            </Link>
            <h1 style={{ fontSize: "32px", fontWeight: "900", color: "#f8fafc", margin: "8px 0 0 0", textTransform: "capitalize" }}>
              {sport} Prospect Directory
            </h1>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "600" }}>
            Active Database: <strong style={{ color: "#38bdf8" }}>{filteredPlayers.length} Prospects</strong>
          </div>
        </div>

        {/* INTERACTIVE POSITION FILTER BAR */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "8px" }}>FILTER BY POSITION</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {availablePositions.map((pos) => {
              const isActive = selectedPosition === pos;
              return (
                <button
                  key={pos}
                  onClick={() => setSelectedPosition(pos)}
                  style={{
                    backgroundColor: isActive ? "#38bdf8" : "#0f172a",
                    color: isActive ? "#020617" : "#94a3b8",
                    border: `1px solid ${isActive ? "#38bdf8" : "#1e293b"}`,
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "800",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {pos}
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter & Sort Controls */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "16px", marginBottom: "30px", display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}>
          
          <div>
            <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>TIER</label>
            <select 
              value={selectedTier} 
              onChange={(e) => setSelectedTier(e.target.value)}
              style={{ backgroundColor: "#020617", color: "#f8fafc", border: "1px solid #334155", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}
            >
              <option value="All">All Tiers</option>
              <option value="Tier 1">Tier 1 Elite</option>
              <option value="Tier 2">Tier 2</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>SORT BY</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              style={{ backgroundColor: "#020617", color: "#f8fafc", border: "1px solid #334155", padding: "8px 12px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}
            >
              <option value="rating">Index Rating (High to Low)</option>
              <option value="squat">Squat Max (High to Low)</option>
              <option value="bench">Bench Press (High to Low)</option>
            </select>
          </div>

        </div>

        {/* Prospect Roster Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {filteredPlayers.map((player: any) => (
            <Link 
              key={player.id}
              href={`/directory/${sport}/${player.id}`}
              style={{ textDecoration: "none" }}
            >
              <div 
                style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "16px", transition: "all 0.2s", height: "100%", boxSizing: "border-box" }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "#38bdf8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#f8fafc", margin: 0 }}>{player.name}</h3>
                  <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", fontSize: "11px", fontWeight: "800", padding: "3px 8px", borderRadius: "6px" }}>
                    {player.rating}
                  </span>
                </div>

                <p style={{ color: "#94a3b8", fontSize: "13px", margin: "0 0 15px 0" }}>
                  {player.origin} &bull; Age {player.age} &bull; <strong style={{ color: "#cbd5e1" }}>{player.position}</strong>
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#cbd5e1", borderTop: "1px solid #1e293b", paddingTop: "12px" }}>
                  <span>Squat: <strong style={{ color: "#f59e0b" }}>{player.squat} lbs</strong></span>
                  <span>Bench: <strong style={{ color: "#38bdf8" }}>{player.bench} lbs</strong></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
