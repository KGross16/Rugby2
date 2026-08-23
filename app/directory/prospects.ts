export interface Prospect {
  id: string;
  name: string;
  origin: string;
  age: number;
  position: string;
  tier: string;
  rating: number;
  squat: number;
  bench: number;
  topSpeed: number;
  videoUrl?: string; // Added to support video embeds
}

export const prospects: Prospect[] = [
  { 
    id: "marcus-bradley", 
    name: "Marcus Bradley", 
    origin: "USA", 
    age: 19, 
    position: "Prop", 
    tier: "Tier 1", 
    rating: 95, 
    squat: 550, 
    bench: 400, 
    topSpeed: 18.5,
    videoUrl: "https://www.youtube.com/embed/OiRoKyatDmI" 
  },
  { id: "tyler-washington", name: "Tyler Washington", origin: "USA", age: 20, position: "Flanker", tier: "Tier 1", rating: 93, squat: 480, bench: 360, topSpeed: 20.1 },
  { id: "christian-reed", name: "Christian Reed", origin: "USA", age: 18, position: "Fly-Half", tier: "Tier 1", rating: 94, squat: 420, bench: 310, topSpeed: 21.2 },
  { id: "liam-oconnor", name: "Liam O'Connor", origin: "USA", age: 21, position: "Scrum-Half", tier: "Tier 2", rating: 89, squat: 400, bench: 290, topSpeed: 21.8 },
  { id: "mateo-silva", name: "Mateo Silva", origin: "USA", age: 19, position: "Fullback", tier: "Tier 1", rating: 92, squat: 440, bench: 330, topSpeed: 21.5 },
  { id: "darius-king", name: "Darius King", origin: "USA", age: 22, position: "Center", tier: "Tier 1", rating: 96, squat: 510, bench: 380, topSpeed: 20.8 },
  { id: "owen-vance", name: "Owen Vance", origin: "USA", age: 18, position: "Lock", tier: "Tier 2", rating: 88, squat: 520, bench: 390, topSpeed: 17.9 },
  { id: "caleb-thornton", name: "Caleb Thornton", origin: "USA", age: 20, position: "Hooker", tier: "Tier 2", rating: 90, squat: 490, bench: 370, topSpeed: 18.2 }
];
