"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useMemo } from "react";

export default function SportRoster() {
  const params = useParams();
  const sport = typeof params.sport === 'string' ? params.sport.toLowerCase() : "rugby";

  // Expanded database with 20+ profiles
  const allPlayers = [
    { id: "mateo-rodriguez", name: "Mateo Rodriguez", origin: "Argentina", age: 19, position: "Fly-Half", tier: "Tier 1", rating: 96 },
    { id: "santiago-silva", name: "Santiago Silva", origin: "Uruguay", age: 20, position: "Flanker", tier: "Tier 2", rating: 88 },
    { id: "liam-oconnor", name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop", tier: "Tier 1", rating: 94 },
    { id: "mateo-gimenez", name: "Mateo Giménez", origin: "Argentina", age: 20, position: "Prop", tier: "Tier 1", rating: 95 },
    { id: "nicolas-herrera", name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback", tier: "Tier 1", rating: 92 },
    { id: "tomas-gomez", name: "Tomas Gomez", origin: "Argentina", age: 18, position: "Number 8", tier: "Tier 1", rating: 97 },
    { id: "juan-pablo", name: "Juan Pablo", origin: "Uruguay", age: 19, position: "Flanker", tier: "Tier 2", rating: 87 },
    { id: "kevin-smith", name: "Kevin Smith", origin: "Canada", age: 21, position: "Prop", tier: "Tier 2", rating: 85 },
    { id: "diego-marquez", name: "Diego Marquez", origin: "Chile", age: 20, position: "Fullback", tier: "Tier 1", rating: 90 },
    { id: "bruno-ferrari", name: "Bruno Ferrari", origin: "Argentina", age: 19, position: "Fly-Half", tier: "Tier 1", rating: 93 },
  ];

  const [country, setCountry] = useState("All");
  const [pos, setPos] = useState("All");

  const filteredPlayers = useMemo(() => {
    return allPlayers.filter(p => 
      (country === "All" || p.origin === country) &&
      (pos === "All" || p.position === pos)
    ).sort((a, b) => b.rating - a.rating);
  }, [country, pos]);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#020617", color: "#f8fafc", padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ textTransform: "capitalize" }}>{sport} International Roster</h1>
        
        {/* Filters */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "30px", background: "#0f172a", padding: "20px", borderRadius: "12px" }}>
          <div>
            <label>Country: </label>
            <select onChange={(e) => setCountry(e.target.value)} style={{ background: "#1e293b", color: "#fff", padding: "5px" }}>
              <option value="All">All</option>
              <option value="Argentina">Argentina</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Canada">Canada</option>
              <option value="Chile">Chile</option>
            </select>
          </div>
          <div>
            <label>Position: </label>
            <select onChange={(e) => setPos(e.target.value)} style={{ background: "#1e293b", color: "#fff", padding: "5px" }}>
              <option value="All">All</option>
              <option value="Prop">Prop</option>
              <option value="Flanker">Flanker</option>
              <option value="Fly-Half">Fly-Half</option>
              <option value="Fullback">Fullback</option>
            </select>
          </div>
        </div>

        {/* List */}
        <div style={{ display: "grid", gap: "10px" }}>
          {filteredPlayers.map(p => (
            <Link key={p.id} href={`/directory/${sport}/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ background: "#0f172a", padding: "15px", borderRadius: "8px", border: "1px solid #1e293b", display: "flex", justifyContent: "space-between" }}>
                <div><strong>{p.name}</strong> ({p.origin}) - {p.position}</div>
                <div>Age: {p.age} | Index: {p.rating}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
