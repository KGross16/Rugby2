"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SportRoster() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport : "Sport";
  
  // International player database for the directory
  const players = [
    { name: "Mateo Rodriguez", origin: "Argentina", age: 19, tier: "Tier 1", status: "Verified" },
    { name: "Santiago Silva", origin: "Uruguay", age: 20, tier: "Tier 2", status: "Pending Telemetry" },
    { name: "Liam O'Connor", origin: "Canada", age: 18, tier: "Tier 1", status: "Verified" },
    { name: "Nicolas Herrera", origin: "Chile", age: 21, tier: "Tier 1", status: "Verified" },
    { name: "Jaxson Miller", origin: "USA", age: 19, tier: "Tier 2", status: "Verified" }
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <div style={{ marginBottom: "30px" }}>
          <Link href="/directory" style={{ color: "#94a3b8", fontSize: "14px", textDecoration: "none" }}>&larr; Back to Directory</Link>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#f8fafc", textTransform: "capitalize", margin: "10px 0" }}>
            {sport} International Roster
          </h1>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {players.map((p, idx) => (
            <div key={idx} style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>{p.name}</div>
                <div style={{ color: "#94a3b8", fontSize: "14px" }}>Origin: {p.origin} &bull; Age: {p.age}</div>
              </div>
              <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", padding: "4px 10px", borderRadius: "6px", fontSize: "12px" }}>{p.status}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
