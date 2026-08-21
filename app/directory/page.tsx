"use client";
import Link from "next/link";

export default function Directory() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", fontFamily: "system-ui, sans-serif", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* Navigation Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "20px 28px", borderRadius: "12px", marginBottom: "30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ backgroundColor: "#d97706", color: "#fff", padding: "6px 10px", borderRadius: "8px", fontWeight: "800", fontSize: "16px" }}>⚡</span>
            <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "0.05em", color: "#f8fafc" }}>EDISON SPORTS TECH &bull; DIRECTORY</span>
          </div>
          <Link href="/" style={{ backgroundColor: "#1e293b", color: "#38bdf8", padding: "8px 16px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "600", border: "1px solid #334155" }}>
            &larr; Back to Home
          </Link>
        </div>

        {/* Directory Content */}
        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", padding: "40px", borderRadius: "12px", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", color: "#f59e0b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Talent Pipeline</span>
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#f8fafc", margin: "10px 0 15px 0" }}>Active Roster Directory</h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.6", margin: "0 0 30px 0" }}>
            Verified athlete metrics, developmental select side tracking, and performance analytics pipeline.
          </p>

          <div style={{ display: "grid", gap: "12px" }}>
            {[
              { name: "Select Side Prospect Alpha", sport: "Rugby", status: "Verified", tier: "Tier 1" },
              { name: "Select Side Prospect Beta", sport: "Rugby", status: "Pending Telemetry", tier: "Tier 2" },
              { name: "Regional Prospect Gamma", sport: "Hockey", status: "Verified", tier: "Tier 1" }
            ].map((p, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#020617", border: "1px solid #334155", padding: "16px 20px", borderRadius: "8px" }}>
                <div>
                  <div style={{ fontWeight: "700", color: "#f8fafc", fontSize: "15px" }}>{p.name}</div>
                  <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>Sport: {p.sport} &bull; Tier: {p.tier}</div>
                </div>
                <span style={{ backgroundColor: "rgba(56, 189, 248, 0.1)", color: "#38bdf8", border: "1px solid rgba(56, 189, 248, 0.3)", padding: "4px 10px", borderRadius: "6px", fontSize: "12px", fontWeight: "600" }}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
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
