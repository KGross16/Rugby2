export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Rugby App Dashboard</h1>
      <p>Welcome! Head over to the players section to view the roster.</p>
      <a href="/players" style={{ color: "blue", textDecoration: "underline" }}>View Players</a>
    </main>
  );
}
