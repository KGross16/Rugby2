"use client";
import Link from "next/link";
import { useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([
    { id: "1", name: "Marcus Vance", position: "Prop", age: 20, height: "6'2\"", weight: "245 lbs", region: "Midwest", status: "Active" },
    { id: "2", name: "Liam O'Connor", position: "Hooker", age: 19, height: "6'0\"", weight: "220 lbs", region: "Midwest", status: "Active" },
    { id: "3", name: "Dante Holloway", position: "Lock", age: 21, height: "6'5\"", weight: "235 lbs", region: "East Coast", status: "Active" },
    { id: "4", name: "Caleb Sterling", position: "Scrum-half", age: 18, height: "5'9\"", weight: "175 lbs", region: "West Coast", status: "Development" },
    { id: "5", name: "Jonah Reed", position: "Fly-half", age: 20, height: "5'11\"", weight: "190 lbs", region: "Midwest", status: "Active" },
  ]);

  const [form, setForm] = useState({ name: "", position: "", age: "", height: "", weight: "", region: "Midwest", status: "Active" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.position) return;
    
    const newPlayer = {
      id: Date.now().toString(),
      name: form.name,
      position: form.position,
      age: Number(form.age) || 18,
      height: form.height || "6'0\"",
      weight: form.weight || "180 lbs",
      region: form.region || "Midwest",
      status: form.status,
    };

    setPlayers([newPlayer, ...players]);
    setForm({ name: "", position: "", age: "", height: "", weight: "", region: "Midwest", status: "Active" });
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
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#f8fafc", fontWeight: "600" }}>Register Athlete Profile</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginBottom: "16px" }}>
            <input type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} required />
            <input type="text" placeholder="Position" value={form.position} onChange={e => setForm({...form, position: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} required />
            <input type="number" placeholder="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} />
            <input type="text" placeholder="Height (e.g. 6-1)" value={form.height} onChange={e => setForm({...form, height: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} />
            <input type="text" placeholder="Weight (lbs)" value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} />
            <input type="text" placeholder="Region" value={form.region} onChange={e => setForm({...form, region: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} />
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }}>
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
                    <span style={{ color: "#38bdf8", fontWeight: "600" }}>
                      {player.name}
                    </span>
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

      </div>
    </main>
  );
}

