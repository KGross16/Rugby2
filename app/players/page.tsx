'use client'

import { useEffect, useState } from 'react'

interface Player {
  id: string
  first_name: string
  last_name: string
  primary_position: string
  secondary_position?: string
  current_club?: string
  stage?: string
  bronco_test_seconds?: number
  notes?: string
}

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedStage, setSelectedStage] = useState('All')

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/players')
        if (res.ok) {
          const data = await res.json()
          setPlayers(data)
        }
      } catch (err) {
        console.error('Failed to load players:', err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const filteredPlayers = players.filter(player => {
    const matchesSearch = `${player.first_name} ${player.last_name} ${player.primary_position} ${player.current_club || ''}`
      .toLowerCase()
      .includes(search.toLowerCase())
    
    const matchesStage = selectedStage === 'All' || player.stage === selectedStage
    return matchesSearch && matchesStage
  })

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111', marginBottom: '8px' }}>
          Rugby Enterprise Pathway
        </h1>
        <p style={{ fontSize: '15px', color: '#555' }}>
          High-Performance Athlete Evaluation & Pathway Tracking
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search players, positions, clubs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: '1',
            minWidth: '250px',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px'
          }}
        />
        <select
          value={selectedStage}
          onChange={(e) => setSelectedStage(e.target.value)}
          style={{
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            backgroundColor: '#fff'
          }}
        >
          <option value="All">All Stages</option>
          <option value="Local Club / HS">Local Club / HS</option>
          <option value="State Select (Tornadoes)">State Select (Tornadoes)</option>
          <option value="Regional ITT (Midwest)">Regional ITT (Midwest)</option>
          <option value="National Junior Eagles">National Junior Eagles</option>
        </select>
      </div>

      {/* Player List */}
      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading database...</div>
      ) : filteredPlayers.length === 0 ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>No players found matching criteria.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e1e4e8',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0', color: '#1a1a1a' }}>
                  {player.first_name} {player.last_name}
                </h3>
                <span style={{ fontSize: '12px', fontWeight: '600', backgroundColor: '#eef2f7', color: '#0366d6', padding: '4px 8px', borderRadius: '6px' }}>
                  {player.primary_position} {player.secondary_position ? `/ ${player.secondary_position}` : ''}
                </span>
              </div>

              <div style={{ fontSize: '14px', color: '#444', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div><strong>Club:</strong> {player.current_club || 'Unassigned'}</div>
                <div><strong>Pathway Stage:</strong> {player.stage || 'General Pool'}</div>
                {player.bronco_test_seconds && (
                  <div><strong>Bronco Score:</strong> {Math.floor(player.bronco_test_seconds / 60)}m {player.bronco_test_seconds % 60}s</div>
                )}
                {player.notes && (
                  <div style={{ marginTop: '8px', fontStyle: 'italic', color: '#666', fontSize: '13px' }}>
                    &ldquo;{player.notes}&rdquo;
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
