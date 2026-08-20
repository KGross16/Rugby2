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
  const [players, setPlayers] = useState([])
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
    const matchesSearch = `${player.first_name} ${player.last_name} ${player.primary_position} ${player.current_club}`
      .toLowerCase()
      .includes(search.toLowerCase())
    
    const matchesStage = selectedStage === 'All' || player.stage === selectedStage
    return matchesSearch && matchesStage
  })

  return (
    
      
        Rugby Enterprise Pathway
      
      
        High-Performance Athlete Evaluation & Pathway Tracking
      

      {/* Controls */}
      
         setSearch(e.target.value)}
          style={{
            flex: '1',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px'
          }}
        />
         setSelectedStage(e.target.value)}
          style={{
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            backgroundColor: '#fff'
          }}
        >
          All Stages
          Local Club / HS
          State Select (Tornadoes)
          Regional ITT (Midwest)
          National Junior Eagles
        
      

      {/* Player List */}
      {loading ? (
        Loading database...
      ) : filteredPlayers.length === 0 ? (
        No players found matching criteria.
      ) : (
        
          {filteredPlayers.map((player) => (
            
              
                
                  {player.first_name} {player.last_name}
                
                
                  {player.primary_position} {player.secondary_position ? `/ ${player.secondary_position}` : ''}
                
              

              
                Club: {player.current_club || 'Unassigned'}
                Pathway Stage: {player.stage || 'General Pool'}
                {player.bronco_test_seconds && (
                  
                    Bronco Score: {Math.floor(player.bronco_test_seconds / 60)}m {player.bronco_test_seconds % 60}s
                  
                )}
                {player.notes && (
                  
                    "{player.notes}"
                  
                )}
              
            
          ))}
        
      )}
    
  )
}
