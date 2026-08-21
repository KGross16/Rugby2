export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "system-ui, sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ backgroundColor: "#0f172a", color: "white", padding: "32px", borderRadius: "12px", marginBottom: "24px", boxShadow: "0 4px 6px -1px rgb(0 0_0 / 0.1)" }}>
          <h1 style={{ margin: "0 0 8px 0", fontSize: "28px", fontWeight: "700" }}>Rugby Development Portal</h1>
          <p style={{ margin: "0", color: "#94a3b8", fontSize: "16px" }}>High-performance player tracking, roster management, and strategic operations.</p>
        </div>

        {/* Quick Actions Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          
          <a href="/players" style={{ textDecoration: "none" }}>
            <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", transition: "all 0.2s", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)" }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#1e293b", fontSize: "18px" }}>Player Roster &rarr;</h3>
              <p style={{ margin: "0", color: "#64748b", fontSize: "14px" }}>View athlete profiles, positions, and performance metrics.</p>
            </div>
          </a>

          <div style={{ backgroundColor: "white", padding: "24px", borderRadius: "12px", border: "1px solid #e2e8f0", opacity: "0.7" }}>
            <h3 style={{ margin: "0 0 8px 0", color: "#1e293b", fontSize: "18px" }}>Pathways & Strategy</h3>
            <p style={{ margin: "0", color: "#64748b", fontSize: "14px" }}>Operational structures and development pipelines (Coming Soon).</p>
          </div>

        </div>

      </div>
    </main>
  );
}
