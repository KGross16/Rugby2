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
            <Link href="/app/directory" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
              Roster Directory
            </Link>
            <Link href="/dashboard" style={{ backgroundColor: "#d97706", color: "#fff", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "700" }}>
              Launch Portal &rarr;
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div style={{ textAlign: "center", padding: "60px 20px", backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "16px", marginBottom: "40px" }}>
          <span style={{ backgroundColor: "rgba(217, 119, 6, 0.15)", color: "#f59e0b", border: "1px solid rgba(217, 119, 6, 0.3)", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Enterprise High-Performance Intelligence &bull; 2031 Horizon
          </span>
          <h1 style={{ margin: "24px 0 16px 0", fontSize: "42px", fontWeight: "800", color: "#f8fafc", lineHeight: "1.2" }}>
            The Next Generation of Rugby <br />
            <span style={{ color: "#d97706" }}>Talent Identification & Analytics</span>
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto 32px auto", fontSize: "16px", color: "#94a3b8", lineHeight: "1.6" }}>
            Unifying biometric performance metrics, regional pathway structures, and direct asset valuation into a single, high-performance scouting ecosystem.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/dashboard" style={{ backgroundColor: "#d97706", color: "#fff", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", fontWeight: "700", boxShadow: "0 4px 12px rgba(217, 119, 6, 0.3)" }}>
              Access Intelligence Portal
            </Link>
            <Link href="/app/directory" style={{ backgroundColor: "#020617", color: "#38bdf8", border: "1px solid #334155", padding: "14px 28px", borderRadius: "8px", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>
              View Roster Pipeline
            </Link>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "28px", borderRadius: "12px" }}>
            <div style={{ fontSize: "24px", marginBottom: "16px" }}>📊</div>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "700", color: "#f8fafc" }}>Biometric & GPS Tracking</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: "1.5" }}>
              Real-time evaluation of athlete max velocity, Bronco test thresholds, vertical power output, and 40-yard dash telemetry.
            </p>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "28px", borderRadius: "12px" }}>
            <div style={{ fontSize: "24px", marginBottom: "16px" }}>🏆</div>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "700", color: "#f8fafc" }}>Pathway Governance</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: "1.5" }}>
              Streamlined management frameworks for regional select sides, development tiers, and age-grade elite player pools.
            </p>
          </div>

          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "28px", borderRadius: "12px" }}>
            <div style={{ fontSize: "24px", marginBottom: "16px" }}>💼</div>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "700", color: "#f8fafc" }}>Asset Valuation & Supply</h3>
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8", lineHeight: "1.5" }}>
              Enterprise-grade database structuring designed to maximize recruitment efficiency and long-term player commercialization.
            </p>
          </div>

        </div>

        {/* Footer Status */}
        <div style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #1e293b", color: "#64748b", fontSize: "13px" }}>
          Edison Sports Tech &bull; Secure High-Performance Environment &bull; All Systems Operational ⚡
        </div>

      </div>
    </main>
  );
}
