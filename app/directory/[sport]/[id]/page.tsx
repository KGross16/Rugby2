"use client";

import { use } from "react";

// Full complete code for the individual player profile page component
export default function PlayerProfile({ params }: { params: Promise<{ sport: string; id: string }> }) {
  const resolvedParams = use(params);

  // Mock player data lookup or extraction based on resolvedParams.id
  const player = {
    name: "Ebenezer Adebayo",
    index: 98,
    region: "UK / USA",
    age: 22,
    position: "Wing",
    squat: "460 lbs",
    bench: "330 lbs",
    yardsPerCarry: 6.8,
    tackleCompletion: 82,
    fortyYard: "4.42 s"
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafa", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Navigation Header */}
        <div style={{ marginBottom: "24px" }}>
          <a href={`/directory/${resolvedParams.sport}`} style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
            ← Back to roster Terminal
          </a>
        </div>

        {/* Player Header Card */}
        <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "16px", padding: "30px", marginBottom: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: "800", margin: "0 0 8px 0", color: "#ffffff" }}>{player.name}</h1>
              <div style={{ fontSize: "14px", color: "#8a99ad" }}>
                {player.region} • Age {player.age} • {player.position}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ backgroundColor: "#1e3a8a", color: "#93c5fd", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "700" }}>
                Index: {player.index}
              </span>
            </div>
          </div>
        </div>

        {/* Physical Benchmarks & New Metrics Grid */}
        <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "700" }}>Verified Physical Benchmarks & Performance Metrics</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          
          <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Squat Max</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "#f59e0b" }}>{player.squat}</div>
          </div>

          <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Bench Press</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "#38bdf8" }}>{player.bench}</div>
          </div>

          <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>40-Yard Dash</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "#22c55e" }}>{player.fortyYard}</div>
          </div>

          <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Yards Per Carry</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "#4ade80" }}>{player.yardsPerCarry} yds</div>
          </div>

          <div style={{ backgroundColor: "#111c24", border: "1px solid #1f2d3d", borderRadius: "12px", padding: "20px" }}>
            <div style={{ fontSize: "12px", color: "#8a99ad", textTransform: "uppercase", fontWeight: "600", marginBottom: "8px" }}>Tackle Completion</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: "#fb7185" }}>{player.tackleCompletion}%</div>
          </div>

        </div>

      </div>
    </main>
  );
}
