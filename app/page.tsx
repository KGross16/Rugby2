"use client";
import Link from "next/link";
import { useState } from "react";

export default function PlayersPage() {
  const [players, setPlayers] = useState([
    { id: "1", name: "Marcus Vance", position: "Prop", age: 20, height: "6'2\"", weight: "245 lbs", speed10m: "1.72s", speed40m: "5.1s", vertical: "28\"", beepTest: "14.2", bench: "365 lbs", squat: "485 lbs", clean: "315 lbs", pullups: "12", dips: "25", status: "Active" },
    { id: "2", name: "Liam O'Connor", position: "Hooker", age: 19, height: "6'0\"", weight: "220 lbs", speed10m: "1.65s", speed40m: "4.9s", vertical: "31\"", beepTest: "15.1", bench: "335 lbs", squat: "440 lbs", clean: "295 lbs", pullups: "15", dips: "28", status: "Active" },
    { id: "3", name: "Dante Holloway", position: "Lock", age: 21, height: "6'5\"", weight: "235 lbs", speed10m: "1.78s", speed40m: "5.3s", vertical: "32\"", beepTest: "13.8", bench: "345 lbs", squat: "460 lbs", clean: "305 lbs", pullups: "14", dips: "22", status: "Active" },
    { id: "4", name: "Caleb Sterling", position: "Scrum-half", age: 18, height: "5'9\"", weight: "175 lbs", speed10m: "1.58s", speed40m: "4.7s", vertical: "34\"", beepTest: "16.2", bench: "265 lbs", squat: "350 lbs", clean: "245 lbs", pullups: "20", dips: "35", status: "Development" },
    { id: "5", name: "Jonah Reed", position: "Fly-half", age: 20, height: "5'11\"", weight: "190 lbs", speed10m: "1.61s", speed40m: "4.8s", vertical: "33\"", beepTest: "15.9", bench: "285 lbs", squat: "380 lbs", clean: "265 lbs", pullups: "18", dips: "30", status: "Active" },
  ]);

  const [form, setForm] = useState({ 
    name: "", position: "", age: "", height: "", weight: "", 
    speed10m: "", speed40m: "", vertical: "", beepTest: "", 
    bench: "", squat: "", clean: "", pullups: "", dips: "", status: "Active" 
  });

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
      name: "", position: "", age: "", height: "", weight: "", 
      speed10m: "", speed40m: "", vertical: "", beepTest: "", 
      bench: "", squat: "", clean: "", pullups: "", dips: "", status: "Active" 
    });
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ marginBottom: "28px" }}>
          <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
            &larr; Back to Dashboard
          </Link>
          <h1 style={{ margin: "8px 0 0 0", fontSize: "28px", fontWeight: "700", color: "#f8fafc" }}>Athlete Roster & Elite Combine Performance Matrix</h1>
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
          <h3 style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#f8fafc", fontWeight: "600" }}>Register Athlete & Strength/Speed Profile</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "10px", marginBottom: "16px" }}>
            <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} required />
            <input type="text" placeholder="Position" value={form.position} onChange={e => setForm({...form, position: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} required />
            <input type="number" placeholder="Age" value={form.age} onChange={e => setForm({...form, age: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Height" value={form.height} onChange={e => setForm({...form, height: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Weight" value={form.weight} onChange={e => setForm({...form, weight: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="10m Split" value={form.speed10m} onChange={e => setForm({...form, speed10m: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="40m Sprint" value={form.speed40m} onChange={e => setForm({...form, speed40m: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Vertical" value={form.vertical} onChange={e => setForm({...form, vertical: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Yo-Yo" value={form.beepTest} onChange={e => setForm({...form, beepTest: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Bench" value={form.bench} onChange={e => setForm({...form, bench: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Squat" value={form.squat} onChange={e => setForm({...form, squat: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Hang Clean" value={form.clean} onChange={e => setForm({...form, clean: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Pull-ups" value={form.pullups} onChange={e => setForm({...form, pullups: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <input type="text" placeholder="Dips" value={form.dips} onChange={e => setForm({...form, dips: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }} />
            <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} style={{ padding: "10px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#020617", color: "#f8fafc", fontSize: "13px" }}>
              <option value="Active">Active</option>
              <option value="Development">Development</option>
              <option value="Injured">Injured</option>
            </select>
          </div>
          <button type="submit" style={{ backgroundColor: "#38bdf8", color: "#020617", padding: "12px 24px", borderRadius: "8px", border: "none", fontWeight: "700", cursor: "pointer", fontSize: "14px" }}>
            Add Athlete to Database
          </button>
        </form>

        {/* Player Table Container */}
        <div style={{ backgroundColor: "#0f172a", borderRadius: "12px", border: "1px solid #1e293b", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", whiteSpace: "nowrap" }}>
            <thead>
              <tr style={{ backgroundColor: "#020617", borderBottom: "1px solid #1e293b", color: "#94a3b8", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <th style={{ padding: "14px" }}>Name</th>
                <th style={{ padding: "14px" }}>Position</th>
                <th style={{ padding: "14px" }}>Age</th>
                <th style={{ padding: "14px" }}>Height</th>
                <th style={{ padding: "14px" }}>Weight</th>
                <th style={{ padding: "14px" }}>10m</th>
                <th style={{ padding: "14px" }}>40m</th>
                <th style={{ padding: "14px" }}>Vert</th>
                <th style={{ padding: "14px" }}>Yo-Yo</th>
                <th style={{ padding: "14px" }}>Bench</th>
                <th style={{ padding: "14px" }}>Squat</th>
                <th style={{ padding: "14px" }}>Clean</th>
                <th style={{ padding: "14px" }}>Pull-ups</th>
                <th style={{ padding: "14px" }}>Dips</th>
                <th style={{ padding: "14px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} style={{ borderBottom: "1px solid #1e293b" }}>
                  <td style={{ padding: "14px", fontWeight: "600", color: "#f8fafc" }}>{player.name}</td>
                  <td style={{ padding: "14px", color: "#94a3b8" }}>{player.position}</td>
                  <td style={{ padding: "14px", color: "#94a3b8" }}>{player.age}</td>
                  <td style={{ padding: "14px", color: "#94a3b8" }}>{player.height}</td>
                  <td style={{ padding: "14px", color: "#94a3b8" }}>{player.weight}</td>
                  <td style={{ padding: "14px", color: "#38bdf8", fontWeight: "500" }}>{player.speed10m}</td>
                  <td style={{ padding: "14px", color: "#38bdf8", fontWeight: "500" }}>{player.speed40m}</td>
                  <td style={{ padding: "14px", color: "#c084fc", fontWeight: "500" }}>{player.vertical}</td>
                  <td style={{ padding: "14px", color: "#4ade80", fontWeight: "500" }}>{player.beepTest}</td>
                  <td style={{ padding: "14px", color: "#f8fafc", fontWeight: "500" }}>{player.bench}</td>
                  <td style={{ padding: "14px", color: "#f8fafc", fontWeight: "500" }}>{player.squat}</td>
                  <td style={{ padding: "14px", color: "#f8fafc", fontWeight: "500" }}>{player.clean}</td>
                  <td style={{ padding: "14px", color: "#f8fafc", fontWeight: "500" }}>{player.pullups}</td>
                  <td style={{ padding: "14px", color: "#f8fafc", fontWeight: "500" }}>{player.dips}</td>
                  <td style={{ padding: "14px" }}>
                    <span style={{ 
                      padding: "4px 10px", 
                      borderRadius: "20px", 
                      fontSize: "11px", 
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
