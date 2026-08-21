import Link from "next/link";
import { initialPlayers } from "./data";

export default function PlayersPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "system-ui, sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* Navigation & Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <Link href="/" style={{ color: "#2563eb", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
              &larr; Back to Dashboard
            </Link>
            <h1 style={{ margin: "8px 0 0 0", fontSize: "26px", fontWeight: "700", color: "#0f172a" }}>Athlete Roster</h1>
          </div>
        </div>

        {/* Player Table Container */}
        <div style={{ backgroundColor: "white", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f1f5f9", borderBottom: "1px solid #e2e8f0", color: "#475569", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <th style={{ padding: "16px" }}>Name</th>
                <th style={{ padding: "16px" }}>Position</th>
                <th style={{ padding: "16px" }}>Age</th>
                <th style={{ padding: "16px" }}>Weight</th>
                <th style={{ padding: "16px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {initialPlayers.map((player) => (
                <tr key={player.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "#1e293b" }}>{player.name}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{player.position}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{player.age}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{player.weight}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ 
                      padding: "4px 10px", 
                      borderRadius: "20px", 
                      fontSize: "12px", 
                      fontWeight: "600",
                      backgroundColor: player.status === "Active" ? "#dcfce7" : "#fef3c7",
                      color: player.status === "Active" ? "#166534" : "#92400e"
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
