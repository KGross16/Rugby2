"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SportRoster() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport : "sport";
  
  // International player database with unique IDs for profile routing
  const players = [
    { id: "mateo-rodriguez", name: "Mateo Rodriguez", origin: "Argentina", age: 19, position: "Fly-Half / Center", tier: "Tier 1", status: "Verified" },
    { id: "santiago-silva", name: "Santiago Silva", origin: "Uruguay", age: 20, position: "Flanker", tier: "Tier 2", status: "Pending Telemetry" },
    { id: "liam-oconnor", name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop / Lock", tier: "Tier 1", status: "Verified" },
    { id: "nicolas-herrera", name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback", tier: "Tier 1", status: "Verified" },
    { id: "jaxson-miller", name: "Jaxson Miller", origin: "USA", age: 19, position: "Scrum-Half", tier: "Tier 2", status: "Verified" }
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ marginBottom: "30px" }}>
          <Link href="/directory" style={{ color: "#38bdf8", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>&larr; Back to Directory</Link>
          <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#f8fafc", textTransform: "capitalize", margin: "10px 0 5px 0" }}>
            {sport} International Roster
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: 0 }}>
            Click on any athlete to view verified biometric telemetry, developmental pathways, and match footage.
          </p>
        </div>

        {/* Player List */}
        <div style={{ display: "grid", gap: "12px" }}>
          {players.map((p) => (
            <Link key={p.id} href={`/directory/${sport}/${p.id}`} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 24px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "border-color 0.2s" }}
                   onMouseOver={(e) => e.currentTarget.style.borderColor = "#d97706"}
                   onMouseOut={(e) => e.currentTarget.style.borderColor = "#1e293b"}>
                <div>
                  <div style={{ fontWeight: "800", fontSize: "18px", color: "#f8fafc", marginBottom: "4px" }}>{p.name}</div>
                  <div style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {p.origin} &bull; Age {p.age} &bull; <span style={{ color: "#cbd5e1" }}>{p.position}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ backgroundColor: "rgba(217, 119, 6, 0.1)", color: "#f59e0b", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", border: "1px solid rgba(217, 119, 6, 0.2)" }}>
                    {p.tier}
                  </span>
                  <span style={{ color: "#38bdf8", fontSize: "14px", fontWeight: "700" }}>View Profile &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

