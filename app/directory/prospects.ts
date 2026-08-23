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
  fortyDash?: string;
  yardsPerCarry?: string;
  tackleCompletion?: string;
  broncoTest?: string;
  videoUrl?: string;
  recruitingStatus?: string;
  classYear?: string;
}

export const prospects: Prospect[] = [
  {
    id: "darius-king",
    name: "Darius King",
    origin: "USA",
    age: 22,
    position: "Center",
    tier: "Tier 1 Elite",
    rating: 96,
    squat: 510,
    bench: 380,
    fortyDash: "4.58",
    yardsPerCarry: "8.4",
    tackleCompletion: "94%",
    broncoTest: "4:32",
    recruitingStatus: "Active Uncommitted",
    classYear: "Class of 2027",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "marcus-bradley",
    name: "Marcus Bradley",
    origin: "USA",
    age: 21,
    position: "Flanker",
    tier: "Tier 1 Elite",
    rating: 94,
    squat: 480,
    bench: 340,
    fortyDash: "4.64",
    yardsPerCarry: "6.9",
    tackleCompletion: "97%",
    broncoTest: "4:24",
    recruitingStatus: "Active Uncommitted",
    classYear: "Class of 2027",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
