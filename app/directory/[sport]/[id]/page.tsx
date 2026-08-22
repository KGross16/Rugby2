"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { prospects } from "../../prospects";

export default function PlayerProfile() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : "";
  const sport = typeof params.sport === 'string' ? params.sport : "rugby";

  // Find the specific player from your centralized prospects file
  const player: any = prospects.find((p: any) => p.id === id) || prospects[0];

  // Default fallback YouTube video ID set to a clean rugby highlight
  const videoId = player.videoId || "W7N3mQ6Wv2k";

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Back Navigation */}
        <div style={{ marginBottom: "25px" }}>
          <Link href={`/directory/${sport}`} style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>
            &larr; Back to {sport} Terminal
          </Link>
        </div>

        {/* Player Header Card */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "16px", marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <h1 style={{ fontSize: "32px", fontWeight: "900", color: "#f8fafc", margin: 0 }}>{player.name}</h1>
              <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", fontSize: "12px", fontWeight: "800", padding: "4px 10px", borderRadius: "6px" }}>
                Index: {player.rating}
              </span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0 0 15px 0" }}>
              {player.origin} &bull; Age {player.age} &bull; <strong style={{ color: "#cbd5e1" }}>{player.position}</strong>
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ backgroundColor: "rgba(217, 119, 6, 0.1)", color: "#f59e0b", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(217, 119, 6, 0.2)" }}>
                {player.tier}
              </span>
              <span style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                Verified Telemetry
              </span>
            </div>
          </div>
        </div>

        {/* Athletic Testing Metrics Grid */}
        <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc", marginBottom: "15px" }}>Verified Physical Benchmarks</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "15px", marginBottom: "30px" }}>
          
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>SQUAT MAX</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: "#f59e0b" }}>{player.squat} lbs</div>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>BENCH PRESS</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: "#38bdf8" }}>{player.bench} lbs</div>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>40-YARD DASH</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981" }}>{player["40"] || "4.72"}s</div>
          </div>

        </div>

        {/* Video Highlight Showcase (Embedded Player) */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "24px", borderRadius: "16px", marginBottom: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc", margin: 0 }}>Match & Scouting Highlights</h3>
            <span style={{ fontSize: "12px", color: "#38bdf8", backgroundColor: "rgba(56, 189, 248, 0.1)", padding: "4px 10px", borderRadius: "4px", fontWeight: "600" }}>
              Position: {player.position} Reel
            </span>
          </div>
          <div style={{ width: "100%", aspectRatio: "16/9", backgroundColor: "#020617", borderRadius: "10px", overflow: "hidden", border: "1px solid #334155" }}>
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube-nocookie.com/embed/${videoId}`} 
              title={`${player.name} Highlight Reel`}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </main>
  );
}
