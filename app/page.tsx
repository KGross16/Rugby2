"use client";
import Link from "next/link";
import { useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([
    { id: "1", name: "Marcus Vance", position: "Prop", age: 20, height: "6-2", weight: "245 lbs", region: "Midwest", speed10m: "1.72s", speed40m: "5.1s", vertical: "28\"", beepTest: "14.2", bench: "365 lbs", squat: "485 lbs", clean: "315 lbs", pullups: "12", dips: "25", status: "Active" },
    { id: "2", name: "Liam O'Connor", position: "Hooker", age: 19, height: "6-0", weight: "220 lbs", region: "Midwest", speed10m: "1.65s", speed40m: "4.9s", vertical: "31\"", beepTest: "15.1", bench: "335 lbs", squat: "440 lbs", clean: "295 lbs", pullups: "15", dips: "28", status: "Active" },
    { id: "3", name: "Dante Holloway", position: "Lock", age: 21, height: "6-5", weight: "235 lbs", region: "East Coast", speed10m: "1.78s", speed40m: "5.3s", vertical: "32\"", beepTest: "13.8", bench: "345 lbs", squat: "460 lbs", clean: "305 lbs", pullups: "14", dips: "22", status: "Active" },
    { id: "4", name: "Caleb Sterling", position: "Scrum-half", age: 18, height: "5-9", weight: "175 lbs", region: "West Coast", speed10m: "1.58s", speed40m: "4.7s", vertical: "34\"", beepTest: "16.2", bench: "265 lbs", squat: "350 lbs", clean: "245 lbs", pullups: "20", dips: "35", status: "Development" },
    { id: "5", name: "Jonah Reed", position: "Fly-half", age: 20, height: "5-11", weight: "190 lbs", region: "Midwest", speed10m: "1.61s", speed40m: "4.8s", vertical: "33\"", beepTest: "15.9", bench: "285 lbs", squat: "380 lbs", clean: "265 lbs", pullups: "18", dips: "30", status: "Active" },
  ]);

  const [form, setForm] = useState({ 
    name: "", position: "", age: "", height: "", weight: "", region: "Midwest",
    speed10m: "", speed40m: "", vertical: "", beepTest: "", 
    bench: "", squat: "", clean: "", pullups: "", dips: "", status: "Active" 
  });

  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.position) return;
    
    const newPlayer = {
      id: Date.now().toString(),
      name: form.name,
      position: form.position,
      age: Number(form.age) || 18,
      height: form.height || "6-0",
      weight: form.weight || "180 lbs",
      region: form.region || "Midwest",
      speed10m: form.speed10m || "1.70s",
      speed40m: form.speed40m || "5.0s",
      vertical: form.vertical || "30\"",
      beepTest: form.beepTest || "14.0",
      bench: form.bench || "275 lbs",
      squat: form.squat || "365 lbs",
      clean: form.clean || "250 lbs",
      pullups: form.pullups || "12",
      dips: form.dips || "20",
      status: form.status,
    };

    setPlayers([newPlayer, ...players]);
    setForm({ 
      name: "", position: "", age: "", height: "", weight: "", region: "Midwest",
      speed10m: "", speed40m: "", vertical: "", beepTest: "", 
      bench: "", squat: "", clean: "", pullups: "", dips: "", status: "Active" 
    });
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "28px" }}>
          <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
            &larr; Back to Dashboard
          </Link>
          <h1 style={{ margin: "8px 0 0 0", fontSize: "28px", fontWeight: "700", color: "#f8fafc" }}>Athlete Roster & Pipeline Directory</h1>
          <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#94a3b8" }}>High-Performance Pathway Database &bull; 2031 Horizon</p>
        </div>

        {/* Metrics Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "28px" }}>
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <p style={{ margin: "0", fontSize: "13px", color: "#94a3b8", fontWeight: "500" }}>Total Athletes</p>
            <p style={{ margin: "8px 0 0 0", fontSize: "24px", fontWeight: "700", color: "#f8fafc" }}>{players.length}</p>
          </div>
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <p style={{ margin: "0", fontSize: "13px", color: "#94a3b8", fontWeight: "500" }}>Active Roster</p>
            <p style={{ margin: "8px 0 0 0", fontSize: "24px", fontWeight: "700", color: "#4ade80" }}>
              {players.filter(p => p.status === "Active").length}
            </p>
          </div>
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px" }}>
            <p style={{ margin: "0", fontSize: "13px", color: "#94a3b8", fontWeight: "500" }}>Target Valuation</p>
            <p style={{ margin: "8px 0 0 0", fontSize: "24px", fontWeight: "700", color: "#38bdf8" }}>$53.6M</p>
          </div>
        </div>

        {/* Add Player Form */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: "#0f172a", padding: "24px", borderRadius: "12px", border: "1px solid #1e293b", marginBottom: "28px" }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#f8fafc", fontWeight: "600" }}>Register Athlete Profile & Metrics</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px", marginBottom: "16px" }}>
            <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} required />
            <input type="text" placeholder="Position" value={form.position} onChange={e => setForm({...form, position: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} required />
            <input type="number" placeholder="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Height" value={form.height} onChange={e => setForm({...form, height: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Weight" value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Region" value={form.region} onChange={e => setForm({...form, region: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="10m Split" value={form.speed10m} onChange={e => setForm({...form, speed10m: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="40m Sprint" value={form.speed40m} onChange={e => setForm({...form, speed40m: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Vertical" value={form.vertical} onChange={e => setForm({...form, vertical: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Yo-Yo" value={form.beepTest} onChange={e => setForm({...form, beepTest: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Bench" value={form.bench} onChange={e => setForm({...form, bench: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Squat" value={form.squat} onChange={e => setForm({...form, squat: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Clean" value={form.clean} onChange={e => setForm({...form, clean: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Pullups" value={form.pullups} onChange={e => setForm({...form, pullups: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Dips" value={form.dips} onChange={e => setForm({...form, dips: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }}>
              <option value="Active">Active</option>
              <option value="Development">Development</option>
              <option value="Injured">Injured</option>
            </select>
          </div>
          <button type="submit" style={{ backgroundColor: "#38bdf8", color: "#020617", padding: "12px 24px", borderRadius: "8px", border: "none", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}>
            Add Athlete to Directory
          </button>
        </form>

        {/* Clean Directory Table */}
        <div style={{ backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#020617", borderBottom: "1px solid #1e293b", color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <th style={{ padding: "16px" }}>Athlete Name</th>
                <th style={{ padding: "16px" }}>Position</th>
                <th style={{ padding: "16px" }}>Age</th>
                <th style={{ padding: "16px" }}>Height</th>
                <th style={{ padding: "16px" }}>Weight</th>
                <th style={{ padding: "16px" }}>Region</th>
                <th style={{ padding: "16px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "16px" }}>
                    <button 
                      onClick={() => setSelectedPlayer(player)}
                      style={{ background: "none", border: "none", color: "#38bdf8", fontWeight: "600", cursor: "pointer", padding: 0, fontSize: "14px", textAlign: "left", textDecoration: "underline" }}
                    >
                      {player.name} &rarr;
                    </button>
                  </td>
                  <td style={{ padding: "16px", color: "#f8fafc" }}>{player.position}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.age}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.height}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.weight}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.region}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ 
                      padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600",
                      backgroundColor: player.status === "Active" ? "rgba(74, 222, 128, 0.1)" : "rgba(56, 189, 248, 0.1)",
                      color: player.status === "Active" ? "#4ade80" : "#38bdf8",
                      border: `1px solid ${player.status === "Active" ? "rgba(74, 222, 128, 0.2)" : "rgba(56, 189, 248, 0.2)"}`
                    }}>
                      {player.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Individual Athlete Profile Modal */}
        {selectedPlayer && (
          <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 50, padding: "20px" }}>
            <div style={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "16px", maxWidth: "600px", width: "100%", padding: "32px", position: "relative", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.5)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#f8fafc" }}>{selectedPlayer.name}</h2>
                  <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#38bdf8", fontWeight: "600" }}>{selectedPlayer.position} &bull; {selectedPlayer.region} &bull; {selectedPlayer.status}</p>
                </div>
                <button 
                  onClick={() => setSelectedPlayer(null)}
                  style={{ background: "none", border: "none", color: "#94a3b8", fontSize: "24px", cursor: "pointer", fontWeight: "700" }}
                >
                  &times;
                </button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px", backgroundColor: "#020617", padding: "20px", borderRadius: "12px", border: "1px solid #1e293b" }}>
                <div>
                  <p style={{ margin: "0", fontSize: "12px", color: "#94a3b8" }}>Age & Size</p>
                  <p style={{ margin: "4px 0 12px 0", fontSize: "16px", fontWeight: "600" }}>{selectedPlayer.age} yrs, {selectedPlayer.height}, {selectedPlayer.weight}</p>

                  <p style={{ margin: "0", fontSize: "12px", color: "#94a3b8" }}>10m Split / 40m Sprint</p>
                  <p style={{ margin: "4px 0 0 0", fontSize: "16px", fontWeight: "600", color: "#38bdf8" }}>{selectedPlayer.speed10m} / {selectedPlayer.speed40m}</p>
                </div>
                <div>
                  <p style={{ margin: "0", fontSize: "12px", color: "#94a3b8" }}>Vertical Jump</p>
                  <p style={{ margin: "4px 0 12px 0", fontSize: "16px", fontWeight: "600", color: "#c084fc" }}>{selectedPlayer.vertical}</p>

                  <p style={{ margin: "0", fontSize: "12px", color: "#94a3b8" }}>Yo-Yo Test Score</p>
                  <p style={{ margin: "4px 0 0 0", fontSize: "16px", fontWeight: "600", color: "#4ade80" }}>{selectedPlayer.beepTest}</p>
                </div>
              </div>

              <h4 style={{ margin: "0 0 12px 0", fontSize: "15px", color: "#f8fafc" }}>Strength & Power Output Matrix</h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px", textAlign: "center", marginBottom: "24px" }}>
                <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                  <span style={{ display: "block", fontSize: "11px", color: "#94a3b8" }}>Bench</span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>{selectedPlayer.bench}</span>
                </div>
                <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                  <span style={{ display: "block", fontSize: "11px", color: "#94a3b8" }}>Squat</span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>{selectedPlayer.squat}</span>
                </div>
                <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                  <span style={{ display: "block", fontSize: "11px", color: "#94a3b8" }}>Clean</span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>{selectedPlayer.clean}</span>
                </div>
                <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                  <span style={{ display: "block", fontSize: "11px", color: "#94a3b8" }}>Pull-ups</span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>{selectedPlayer.pullups}</span>
                </div>
                <div style={{ backgroundColor: "#020617", padding: "10px", borderRadius: "8px", border: "1px solid #1e293b" }}>
                  <span style={{ display: "block", fontSize: "11px", color: "#94a3b8" }}>Dips</span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>{selectedPlayer.dips}</span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedPlayer(null)}
                style={{ width: "100%", backgroundColor: "#38bdf8", color: "#020617", padding: "12px", borderRadius: "8px", border: "none", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}
              >
                Close Profile
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
