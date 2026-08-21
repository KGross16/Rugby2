"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Navigation Bar */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 28px", borderRadius: "12px", marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ backgroundColor: "#d97706", color: "#fff", padding: "6px 10px", borderRadius: "8px", fontWeight: "800", fontSize: "16px" }}>⚡</span>
            <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "0.05em", color: "#f8fafc" }}>EDISON SPORTS TECH</span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/directory" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
              Roster Directory
            </Link>
            <Link href="/deck" style={{ backgroundColor: "#1e293b", color: "#f59e0b", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "700", border: "1px solid #334155" }}>
              View Pitch Deck 📊
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "16px", marginBottom: "40px" }}>
          <span style={{ backgroundColor: "rgba(217, 119, 6, 0.1)", color: "#f59e0b", border: "1px solid rgba(217, 119, 6, 0.3)", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Multi-Sport High-Performance Infrastructure
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "900", color: "#f8fafc", margin: "20px 0 15px 0", letterSpacing: "-0.02em" }}>
            Centralizing Athlete Intelligence &amp; Talent Pathways
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "18px", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto 30px auto" }}>
            Modular telemetry, standardized performance tracking, and direct commercial asset valuation for elite sports organizations.
          </p>
          
          {/* Action Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/directory" style={{ backgroundColor: "#d97706", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
              Explore Roster Directory &rarr;
            </Link>
            <Link href="/deck" style={{ backgroundColor: "#020617", color: "#f59e0b", border: "1px solid #d97706", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
              View Pitch Deck 📊
            </Link>
          </div>
        </div>

        {/* Sport Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {["Rugby", "Hockey", "Lacrosse", "Combat Sports"].map((sport, idx) => (
            <div key={sport} style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "12px" }}>
              <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase" }}>Pillar 0{idx + 1}</span>
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 10px 0" }}>{sport} Operations</h3>
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                Standardized tracking pathways, regional scouting structures, and verified telemetry integration.
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
