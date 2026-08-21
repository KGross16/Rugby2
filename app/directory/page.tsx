"use client";
import Link from "next/link";

export default function DirectoryHub() {
  const sports = [
    { name: "Rugby", count: "14 Active Profiles", slug: "rugby", desc: "Select side pipelines, forward/back telemetry, and U19/Senior frameworks." },
    { name: "Hockey", count: "8 Active Profiles", slug: "hockey", desc: "Skating metrics, endurance tracking, and regional scouting." },
    { name: "Lacrosse", count: "6 Active Profiles", slug: "lacrosse", desc: "Agility metrics, stick-work efficiency, and asset valuation." },
    { name: "Combat Sports", count: "5 Active Profiles", slug: "combat", desc: "Weight-class telemetry, output tracking, and conditioning analytics." }
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Navigation Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 28px", borderRadius: "12px", marginBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ backgroundColor: "#d97706", color: "#fff", padding: "6px 10px", borderRadius: "8px", fontWeight: "800", fontSize: "16px" }}>⚡</span>
            <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "0.05em", color: "#f8fafc" }}>TALENT DIRECTORY</span>
          </div>
          <Link href="/" style={{ backgroundColor: "#1e293b", color: "#38bdf8", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600", border: "1px solid #334155" }}>
            &larr; Back to Home
          </Link>
        </div>

        {/* Header Intro */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "900", color: "#f8fafc", margin: "0 0 10px 0" }}>Select a Sport</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", margin: 0 }}>
            Select an athletic vertical to view verified regional rosters, telemetry data, and developmental pathways.
          </p>
        </div>

        {/* Sports Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {sports.map((s) => (
            <Link key={s.slug} href={`/directory/${s.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "12px", transition: "border-color 0.2s" }}
                   onMouseOver={(e) => e.currentTarget.style.borderColor = "#d97706"}
                   onMouseOut={(e) => e.currentTarget.style.borderColor = "#1e293b"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#f8fafc", margin: 0 }}>{s.name}</h3>
                  <span style={{ fontSize: "12px", backgroundColor: "#020617", color: "#f59e0b", padding: "4px 10px", borderRadius: "6px", border: "1px solid #334155", fontWeight: "700" }}>{s.count}</span>
                </div>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5", margin: "0 0 20px 0" }}>{s.desc}</p>
                <span style={{ color: "#38bdf8", fontSize: "14px", fontWeight: "700" }}>View Roster &rarr;</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
