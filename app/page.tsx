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
            Global Cross-Hemispheric Talent Exchange
          </span>
          <h1 style={{ fontSize: "40px", fontWeight: "900", color: "#f8fafc", margin: "20px 0 15px 0", letterSpacing: "-0.02em" }}>
            Connecting International Pathways to US Universities &amp; the MLR
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "18px", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto 30px auto" }}>
            Unifying U18, U20, and U23 talent intelligence across North America, Canada, and South America—bridging elite prospects directly to American collegiate powerhouses and professional Major League Rugby pipelines.
          </p>
          
          {/* Action Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/directory" style={{ backgroundColor: "#d97706", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
              Explore Global Roster Directory &rarr;
            </Link>
            <Link href="/deck" style={{ backgroundColor: "#020617", color: "#f59e0b", border: "1px solid #d97706", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
              View Pitch Deck 📊
            </Link>
          </div>
        </div>

        {/* Core Value Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "12px" }}>
            <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase" }}>Pillar 01</span>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 10px 0" }}>Hemispheric Exchange</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
              Seamlessly connect South American and Canadian prospects competing in international tournaments directly with U.S. collegiate programs.
            </p>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "12px" }}>
            <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase" }}>Pillar 02</span>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 10px 0" }}>MLR Scouting Pipeline</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
              Provide Major League Rugby front offices with verified U20/U23 telemetry and standardized performance data to eliminate guesswork.
            </p>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "12px" }}>
            <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase" }}>Pillar 03</span>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 10px 0" }}>Biometric Intelligence</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
              Track physical metrics, GPS workloads, and developmental progression across borders through a unified tracking engine.
            </p>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "30px", borderRadius: "12px" }}>
            <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase" }}>Pillar 04</span>
            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 10px 0" }}>Direct Commercial Access</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
              Remove regional middlemen and administrative friction to establish transparent player asset valuation globally.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
