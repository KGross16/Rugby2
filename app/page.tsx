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
      status: form.status as "Active" | "Injured" | "Development",
    };

    setPlayers([newPlayer, ...players]);
    setForm({ name: "", position: "", age: "", weight: "", status: "Active" });
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "system-ui, sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
            &larr; Back to Dashboard
          </Link>
          <h1 style={{ margin: "8px 0 0 0", fontSize: "26px", fontWeight: "700", color: "#0f172a" }}>Athlete Roster & Management</h1>
        </div>

        {/* Add Player Form */}
        <form onSubmit={handleSubmit} style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "24px", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)" }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#1e293b" }}>Add New Athlete</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginBottom: "12px" }}>
            <input 
              type="text" 
              placeholder="Player Name" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px" }} 
              required
            />
            <input 
              type="text" 
              placeholder="Position (e.g. Prop)" 
              value={form.position} 
              onChange={e => setForm({...form, position: e.target.value})} 
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px" }} 
              required
            />
            <input 
              type="number" 
              placeholder="Age" 
              value={form.age} 
              onChange={e => setForm({...form, age: e.target.value})} 
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px" }} 
            />
            <input 
              type="text" 
              placeholder="Weight (e.g. 210 lbs)" 
              value={form.weight} 
              onChange={e => setForm({...form, weight: e.target.value})} 
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px" }} 
            />
            <select 
              value={form.status} 
              onChange={e => setForm({...form, status: e.target.value})} 
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "14px", backgroundColor: "white" }}
            >
              <option value="Active">Active</option>
              <option value="Development">Development</option>
              <option value="Injured">Injured</option>
            </select>
          </div>
          <button type="submit" style={{ backgroundColor: "#0f172a", color: "white", padding: "10px 20px", borderRadius: "6px", border: "none", fontWeight: "600", cursor: "pointer" }}>
            Add Athlete to Roster
          </button>
        </form>

        {/* Player Table Container */}
        <div style={{ backgroundColor: "white", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f1f5f9", borderBottom: "1px solid #e2e8f0", color: "#475569", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <th style={{ padding: "16px" }}>Name</th>
                <th style={{ padding: "16px" }}>Position</th>
                <th style={{ padding: "16px" }}>Age</th>
                <th style={{ padding: "16px" }}>Weight</th>
                <th style={{ padding: "16px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "#1e293b" }}>{player.name}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{player.position}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{player.age}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{player.weight}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ 
                      padding: "4px 10px", 
                      borderRadius: "20px", 
                      fontSize: "12px", 
                      fontWeight: "600",
                      backgroundColor: player.status === "Active" ? "#dcfce7" : player.status === "Development" ? "#dbeafe" : "#fef3c7",
                      color: player.status === "Active" ? "#166534" : player.status === "Development" ? "#1e40af" : "#92400e"
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
