"use client";
import Link from "next/link";
import { useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([
    { id: "1", name: "Marcus Vance", position: "Prop", age: 20, weight: "245 lbs", status: "Active" },
    { id: "2", name: "Liam O'Connor", position: "Hooker", age: 19, weight: "220 lbs", status: "Active" },
    { id: "3", name: "Dante Holloway", position: "Lock", age: 21, weight: "235 lbs", status: "Active" },
    { id: "4", name: "Caleb Sterling", position: "Scrum-half", age: 18, weight: "175 lbs", status: "Development" },
    { id: "5", name: "Jonah Reed", position: "Fly-half", age: 20, weight: "190 lbs", status: "Active" },
  ]);

  const [form, setForm] = useState({ name: "", position: "", age: "", weight: "", status: "Active" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.position) return;
    
    const newPlayer = {
      id: Date.now().toString(),
      name: form.name,
      position: form.position,
      age: Number(form.age) || 18,
      weight: form.weight || "180 lbs",
      status: form.status,
    };

    setPlayers([newPlayer, ...players]);
    setForm({ name: "", position: "", age: "", weight: "", status: "Active" });
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ marginBottom: "28px" }}>
          <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
            &larr; Back to Dashboard
          </Link>
          <h1 style={{ margin: "8px 0 0 0", fontSize: "28px", fontWeight: "700", color: "#f8fafc" }}>Athlete Roster & Management</h1>
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
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#f8fafc", fontWeight: "600" }}>Register New Athlete</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px", marginBottom: "16px" }}>
            <input 
              type="text" 
              placeholder="Player Name" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} 
              required
            />
            <input 
              type="text" 
              placeholder="Position (e.g. Prop)" 
              value={form.position} 
              onChange={e => setForm({...form, position: e.target.value})} 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} 
              required
            />
            <input 
              type="number" 
              placeholder="Age" 
              value={form.age} 
              onChange={e => setForm({...form, age: e.target.value})} 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} 
            />
            <input 
              type="text" 
              placeholder="Weight (e.g. 210 lbs)" 
              value={form.weight} 
              onChange={e => setForm({...form, weight: e.target.value})} 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }} 
            />
            <select 
              value={form.status} 
              onChange={e => setForm({...form, status: e.target.value})} 
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "14px" }}
            >
              <option value="Active">Active</option>
              <option value="Development">Development</option>
              <option value="Injured">Injured</option>
            </select>
          </div>
          <button type="submit" style={{ backgroundColor: "#38bdf8", color: "#020617", padding: "12px 24px", borderRadius: "8px", border: "none", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}>
            Add Athlete to Roster
          </button>
        </form>

        {/* Player Table Container */}
        <div style={{ backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#020617", borderBottom: "1px solid #1e293b", color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <th style={{ padding: "16px" }}>Name</th>
                <th style={{ padding: "16px" }}>Position</th>
                <th style={{ padding: "16px" }}>Age</th>
                <th style={{ padding: "16px" }}>Weight</th>
                <th style={{ padding: "16px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "#f8fafc" }}>{player.name}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.position}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.age}</td>
                  <td style={{ padding: "16px", color: "#94a3b8" }}>{player.weight}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ 
                      padding: "4px 12px", 
                      borderRadius: "20px", 
                      fontSize: "12px", 
                      fontWeight: "600",
                      backgroundColor: player.status === "Active" ? "rgba(74, 222, 128, 0.1)" : player.status === "Development" ? "rgba(56, 189, 248, 0.1)" : "rgba(250, 204, 21, 0.1)",
                      color: player.status === "Active" ? "#4ade80" : player.status === "Development" ? "#38bdf8" : "#facc15",
                      border: `1px solid ${player.status === "Active" ? "rgba(74, 222, 128, 0.2)" : player.status === "Development" ? "rgba(56, 189, 248, 0.2)" : "rgba(250, 204, 21, 0.2)"}`
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
