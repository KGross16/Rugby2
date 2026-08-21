"use client";
import Link from "next/link";
import { useState } from "react";

export default function EdisonDashboard() {
  const [selectedPosition, setSelectedPosition] = useState<string>("All");
  const [selectedAgeTier, setSelectedAgeTier] = useState<string>("All");
  const [max40Yard, setMax40Yard] = useState<number>(5.50);

  const athletes = [
    {
      id: "1",
      name: "Cole Whitaker",
      position: "Lock",
      ageTier: "U23",
      location: "Denver, CO",
      height: "6'7\"",
      weight: "258 lbs",
      vertical: "33\"",
      speed40: "5.12s",
      bronco: "4:41",
      gpsSpeed: "31.2 km/h",
      status: "Verified"
    },
    {
      id: "2",
      name: "Marcus Rivera",
      position: "Flyhalf",
      ageTier: "U20",
      location: "Austin, TX",
      height: "5'11\"",
      weight: "189 lbs",
      vertical: "36\"",
      speed40: "4.61s",
      bronco: "4:12",
      gpsSpeed: "34.8 km/h",
      status: "Verified"
    },
    {
      id: "3",
      name: "Tyrell Jackson",
      position: "Back Three",
      ageTier: "U18",
      location: "Atlanta, GA",
      height: "6'0\"",
      weight: "192 lbs",
      vertical: "39\"",
      speed40: "4.55s",
      bronco: "4:08",
      gpsSpeed: "36.1 km/h",
      status: "Verified"
    },
    {
      id: "4",
      name: "Brody Kavanagh",
      position: "Prop",
      ageTier: "U23",
      location: "Chicago, IL",
      height: "6'2\"",
      weight: "281 lbs",
      vertical: "28\"",
      speed40: "5.35s",
      bronco: "4:55",
      gpsSpeed: "29.4 km/h",
      status: "Verified"
    }
  ];

  const filteredAthletes = athletes.filter(athlete => {
    const matchesPosition = selectedPosition === "All" || athlete.position === selectedPosition;
    const matchesAge = selectedAgeTier === "All" || athlete.ageTier === selectedAgeTier;
    const matchesSpeed = parseFloat(athlete.speed40) <= max40Yard;
    return matchesPosition && matchesAge && matchesSpeed;
  });

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b0f19", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "24px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 24px", borderRadius: "12px", marginBottom: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ backgroundColor: "#d97706", color: "#fff", padding: "4px 8px", borderRadius: "6px", fontWeight: "800", fontSize: "14px" }}>⚡</span>
              <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "800", letterSpacing: "0.05em", color: "#f8fafc" }}>EDISON SPORTS TECH</h1>
            </div>
            <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "#94a3b8" }}>High-Performance Athlete Intelligence Portal</p>
          </div>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Link href="/directory" style={{ backgroundColor: "#1e293b", color: "#38bdf8", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "13px", fontWeight: "600", border: "1px solid #334155" }}>
              Roster Manager
            </Link>
            <span style={{ backgroundColor: "rgba(217, 119, 6, 0.1)", border: "1px solid rgba(217, 119, 6, 0.3)", color: "#f59e0b", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.05em" }}>
              PRO RECRUITER ACCESS
            </span>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "24px" }}>
          
          {/* Left Sidebar: Search & Filter */}
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px", height: "fit-content" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#f8fafc" }}>Search & Filter</h3>
              <button 
                onClick={() => { setSelectedPosition("All"); setSelectedAgeTier("All"); setMax40Yard(5.50); }}
                style={{ background: "none", border: "none", color: "#94a3b8", fontSize: "12px", cursor: "pointer" }}
              >
                Reset
              </button>
            </div>

            {/* Position Filter */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>Position</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["All", "Lock", "Flyhalf", "Prop", "Back Three"].map(pos => (
                  <button
                    key={pos}
                    onClick={() => setSelectedPosition(pos)}
                    style={{
                      backgroundColor: selectedPosition === pos ? "#d97706" : "#020617",
                      color: selectedPosition === pos ? "#fff" : "#94a3b8",
                      border: "1px solid #334155",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    {pos}
                  </button>
                ))}
              </div>
            </div>

            {/* Age Tier Filter */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "11px", textTransform: "uppercase", color: "#94a3b8", fontWeight: "700", marginBottom: "8px", letterSpacing: "0.05em" }}>Age Tier</label>
              <div style={{ display: "flex", gap: "6px" }}>
                {["All", "U18", "U20", "U23"].map(tier => (
                  <button
                    key={tier}
                    onClick={() => setSelectedAgeTier(tier)}
                    style={{
                      flex: 1,
                      backgroundColor: selectedAgeTier === tier ? "#d97706" : "#020617",
                      color: selectedAgeTier === tier ? "#fff" : "#94a3b8",
                      border: "1px solid #334155",
                      padding: "6px 0",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Max 40-Yard Dash Slider */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "11px", textTransform: "uppercase", color: "#94a3b8", fontWeight: "700", letterSpacing: "0.05em" }}>Max 40-Yard Dash</label>
                <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700" }}>{max40Yard.toFixed(2)}s</span>
              </div>
              <input 
                type="range" min="4.30" max="5.50" step="0.05" 
                value={max40Yard} 
                onChange={e => setMax40Yard(parseFloat(e.target.value))}
                style={{ width: "100%", accentColor: "#d97706", cursor: "pointer" }}
              />
            </div>

            <div style={{ backgroundColor: "#020617", padding: "16px", borderRadius: "8px", border: "1px solid #1e293b", textAlign: "center" }}>
              <span style={{ fontSize: "20px", fontWeight: "800", color: "#f59e0b" }}>{filteredAthletes.length}</span>
              <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#94a3b8" }}>athletes matched</p>
            </div>
          </div>

          {/* Right Content: Athlete Feed Cards */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ margin: 0, fontSize: "16px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8" }}>Athlete Feed</h2>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>Showing {filteredAthletes.length} of {athletes.length}</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px" }}>
              {filteredAthletes.map(athlete => (
                <div key={athlete.id} style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "12px", padding: "20px", position: "relative" }}>
                  
                  {/* Card Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#f8fafc" }}>{athlete.name}</h3>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "4px" }}>
                        <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: "600" }}>{athlete.position}</span>
                        <span style={{ fontSize: "11px", backgroundColor: "#1e293b", color: "#38bdf8", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>{athlete.ageTier}</span>
                        <span style={{ fontSize: "12px", color: "#64748b" }}>&bull; {athlete.location}</span>
                      </div>
                    </div>
                    <span style={{ fontSize: "10px", backgroundColor: "rgba(217, 119, 6, 0.15)", color: "#f59e0b", border: "1px solid rgba(217, 119, 6, 0.3)", padding: "3px 8px", borderRadius: "6px", fontWeight: "700" }}>
                      ✓ VERIFIED
                    </span>
                  </div>

                  {/* Metrics Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
                    <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                      <span style={{ display: "block", fontSize: "10px", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Height</span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#f8fafc" }}>{athlete.height}</span>
                    </div>
                    <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                      <span style={{ display: "block", fontSize: "10px", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Weight</span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#f8fafc" }}>{athlete.weight}</span>
                    </div>
                    <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                      <span style={{ display: "block", fontSize: "10px", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Vertical</span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#f8fafc" }}>{athlete.vertical}</span>
                    </div>
                    <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                      <span style={{ display: "block", fontSize: "10px", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>40-Yard</span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#f59e0b" }}>{athlete.speed40}</span>
                    </div>
                    <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                      <span style={{ display: "block", fontSize: "10px", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Bronco</span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#f8fafc" }}>{athlete.bronco}</span>
                    </div>
                    <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                      <span style={{ display: "block", fontSize: "10px", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>GPS Speed</span>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#4ade80" }}>{athlete.gpsSpeed}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => alert(`Opening comprehensive dossier and film reels for ${athlete.name}...`)}
                    style={{ width: "100%", backgroundColor: "#d97706", color: "#fff", padding: "12px", borderRadius: "8px", border: "none", fontWeight: "700", cursor: "pointer", fontSize: "13px", letterSpacing: "0.02em" }}
                  >
                    Watch Film & Combine Data
                  </button>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
