"use client";
import Link from "next/link";

export default function PitchDeck() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Navigation Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 28px", borderRadius: "12px", marginBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ backgroundColor: "#d97706", color: "#fff", padding: "6px 10px", borderRadius: "8px", fontWeight: "800", fontSize: "16px" }}>⚡</span>
            <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "0.05em", color: "#f8fafc" }}>EDISON SPORTS TECH &bull; DECK</span>
          </div>
          <Link href="/" style={{ backgroundColor: "#1e293b", color: "#38bdf8", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600", border: "1px solid #334155" }}>
            &larr; Back to Home
          </Link>
        </div>

        {/* Slide 1: Title */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "40px", borderRadius: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Slide 01 &bull; Overview</span>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 15px 0" }}>Edison Sports Tech</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
            Enterprise high-performance intelligence, biometric telemetry, and asset valuation infrastructure for fragmented sports markets.
          </p>
        </div>

        {/* Slide 2: The Problem */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "40px", borderRadius: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Slide 02 &bull; The Problem</span>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 15px 0" }}>Fragmented Infrastructure</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
            Underserved athletic verticals (Rugby, Hockey, Lacrosse) lack centralized talent pipelines, standardized biometric metrics, and scalable regional scouting frameworks.
          </p>
        </div>

        {/* Slide 3: Multi-Sport Solution */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "40px", borderRadius: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Slide 03 &bull; The Solution</span>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 15px 0" }}>Multi-Sport Ecosystem</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.6", margin: "0 0 20px 0" }}>
            Modular tracking and valuation software designed to bridge developmental select sides directly with professional club pathways.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["Rugby", "Baseball", "Hockey", "Lacrosse", "Combat Sports"].map(s => (
              <span key={s} style={{ backgroundColor: "#020617", border: "1px solid #334155", color: "#38bdf8", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600" }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Slide 4: 2031 Horizon */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "40px", borderRadius: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Slide 04 &bull; Strategic Horizon</span>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 15px 0" }}>The 2031 Vision</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
            Establishing the premier commercial standard for talent identification, verified telemetry databases, and athlete asset valuation globally.
          </p>
        </div>

        {/* Footer Navigation */}
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Link href="/" style={{ backgroundColor: "#d97706", color: "#fff", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "700" }}>
            Return to Main Portal &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}
