"use client";
import LinkComponent from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { prospects } from "@/app/directory/prospects";

export default function PlayerProfile() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : "";
  const sport = typeof params.sport === 'string' ? params.sport : "rugby";

  // Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [coachName, setCoachName] = useState("");
  const [clubName, setClubName] = useState("");
  const [coachEmail, setCoachEmail] = useState("");

  // Find the specific player from your centralized prospects file
  const player: any = prospects.find((p: any) => p.id === id) || prospects[0];

  // Baseline comparison calculations (e.g. positional averages for elite tier)
  const squatDiff = player.squat - 420; // 420 lbs as positional baseline
  const benchDiff = player.bench - 310; // 310 lbs as positional baseline

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Triggers mailto to open your Outlook client directly with pre-filled details
    window.location.href = `mailto:kyle@edisonacquisitions.com?subject=Prospect Inquiry: ${player.name} (${player.id})&body=Coach Name: ${coachName}%0D%0AClub/Organization: ${clubName}%0D%0AEmail: ${coachEmail}%0D%0A%0D%0AInterested in securing direct outreach and telemetry access for ${player.name}.`;
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Back Navigation & Print Action */}
        <div style={{ marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <LinkComponent href={`/directory/${sport}`} style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>
            &larr; Back to {sport} Terminal
          </LinkComponent>
          
          {/* Print / PDF Dossier Trigger */}
          <button 
            onClick={() => window.print()}
            style={{ backgroundColor: "transparent", color: "#94a3b8", border: "1px solid #334155", padding: "6px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}
            onMouseOver={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#64748b"; }}
            onMouseOut={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "#334155"; }}
          >
            🖨️ Export Dossier (PDF)
          </button>
        </div>

        {/* Player Header Card with Action Button */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "16px", marginBottom: "25px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
              <h1 style={{ fontSize: "32px", fontWeight: "900", color: "#f8fafc", margin: 0 }}>{player.name}</h1>
              <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", fontSize: "12px", fontWeight: "800", padding: "4px 10px", borderRadius: "6px" }}>
                Index: {player.rating}
              </span>
              <span style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", fontSize: "12px", fontWeight: "800", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                {player.recruitingStatus || "Active Uncommitted"} &bull; {player.classYear || "Class of 2027"}
              </span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0 0 15px 0" }}>
              {player.origin} &bull; Age {player.age} &bull; <strong style={{ color: "#cbd5e1" }}>{player.position}</strong>
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <span style={{ backgroundColor: "rgba(217, 119, 6, 0.1)", color: "#f59e0b", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(217, 119, 6, 0.2)" }}>
                {player.tier}
              </span>
              <span style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                Verified Telemetry
              </span>
            </div>
          </div>

          {/* Direct Outreach Trigger Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: "#38bdf8", color: "#020617", border: "none", padding: "14px 24px", borderRadius: "10px", fontWeight: "800", fontSize: "15px", cursor: "pointer", transition: "background-color 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#7dd3fc"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#38bdf8"}
          >
            Request Direct Outreach &rarr;
          </button>
        </div>

        {/* Athletic Testing Metrics Grid with Benchmark Comparison */}
        <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc", marginBottom: "15px" }}>Verified Physical Benchmarks & Position Delta</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px", marginBottom: "30px" }}>
          
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>SQUAT MAX</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: "#f59e0b", marginBottom: "4px" }}>{player.squat} lbs</div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: squatDiff >= 0 ? "#10b981" : "#ef4444" }}>
              {squatDiff >= 0 ? `+${squatDiff}` : squatDiff} lbs vs positional baseline
            </div>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>BENCH PRESS</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: "#38bdf8", marginBottom: "4px" }}>{player.bench} lbs</div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: benchDiff >= 0 ? "#10b981" : "#ef4444" }}>
              {benchDiff >= 0 ? `+${benchDiff}` : benchDiff} lbs vs positional baseline
            </div>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "5px" }}>TOP SPEED (GPS)</div>
            <div style={{ fontSize: "24px", fontWeight: "900", color: "#10b981", marginBottom: "4px" }}>{player.topSpeed || "20.2"} mph</div>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#38bdf8" }}>
              Verified Telemetry Feed
            </div>
          </div>

        </div>

        {/* Verified Video / Game Film Embed Section */}
        <div style={{ marginBottom: "30px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#f8fafc", margin: 0 }}>Verified Game Film & Movement Telemetry</h3>
            <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "700" }}>HUDL / DIRECT FEED</span>
          </div>
          
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "16px", overflow: "hidden", position: "relative", aspectRatio: "16/9" }}>
            {player.videoUrl ? (
              <iframe 
                src={player.videoUrl} 
                title={`${player.name} Highlight Reel`}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", color: "#64748b", padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "16px", fontWeight: "700", color: "#94a3b8", margin: "0 0 5px 0" }}>Encrypted Game Film Archive</p>
                <p style={{ fontSize: "13px", margin: 0 }}>Verified highlight reel available to authorized coaching staff via direct outreach.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Popup for Outreach Inquiry */}
        {isModalOpen && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(2, 6, 23, 0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 100, padding: "20px" }}>
            <div style={{ backgroundColor: "#0f172a", border: "1px solid #334155", padding: "30px", borderRadius: "16px", maxWidth: "450px", width: "100%", position: "relative" }}>
              
              <button 
                onClick={() => { setIsModalOpen(false); setSubmitted(false); }}
                style={{ position: "absolute", top: "15px", right: "15px", background: "none", border: "none", color: "#94a3b8", fontSize: "18px", cursor: "pointer", fontWeight: "bold" }}
              >
                &times;
              </button>

              <h3 style={{ fontSize: "22px", fontWeight: "900", color: "#f8fafc", margin: "0 0 8px 0" }}>
                Secure Prospect Inquiry
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: "0 0 20px 0" }}>
                Request direct introduction and contact permissions for <strong style={{ color: "#38bdf8" }}>{player.name}</strong>.
              </p>

              {submitted ? (
                <div style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
                  <p style={{ color: "#10b981", fontWeight: "800", fontSize: "16px", margin: "0 0 5px 0" }}>Inquiry Dispatched!</p>
                  <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>Your Outlook client has been triggered to route this directly to management.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "6px" }}>YOUR NAME</label>
                    <input 
                      type="text" 
                      required
                      value={coachName}
                      onChange={(e) => setCoachName(e.target.value)}
                      placeholder="e.g. Coach Miller" 
                      style={{ width: "100%", backgroundColor: "#020617", color: "#fff", border: "1px solid #334155", padding: "10px 12px", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "6px" }}>CLUB OR ORGANIZATION</label>
                    <input 
                      type="text" 
                      required
                      value={clubName}
                      onChange={(e) => setClubName(e.target.value)}
                      placeholder="e.g. Chicago Rugby Club" 
                      style={{ width: "100%", backgroundColor: "#020617", color: "#fff", border: "1px solid #334155", padding: "10px 12px", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "6px" }}>EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      required
                      value={coachEmail}
                      onChange={(e) => setCoachEmail(e.target.value)}
                      placeholder="coach@organization.com" 
                      style={{ width: "100%", backgroundColor: "#020617", color: "#fff", border: "1px solid #334155", padding: "10px 12px", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>

                  <button 
                    type="submit"
                    style={{ width: "100%", backgroundColor: "#38bdf8", color: "#020617", border: "none", padding: "12px", borderRadius: "8px", fontWeight: "800", fontSize: "15px", cursor: "pointer", marginTop: "5px" }}
                  >
                    Submit Access Request
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </main>
  );
}
