export interface Player {
  id: string;
  name: string;
  position: string;
  age: number;
  weight: string;
  status: "Active" | "Injured" | "Development";
}

export const initialPlayers: Player[] = [
  { id: "1", name: "Marcus Vance", position: "Prop", age: 20, weight: "245 lbs", status: "Active" },
  { id: "2", name: "Liam O'Connor", position: "Hooker", age: 19, weight: "220 lbs", status: "Active" },
  { id: "3", name: "Dante Holloway", position: "Lock", age: 21, weight: "235 lbs", status: "Active" },
  { id: "4", name: "Caleb Sterling", position: "Scrum-half", age: 18, weight: "175 lbs", status: "Development" },
  { id: "5", name: "Jonah Reed", position: "Fly-half", age: 20, weight: "190 lbs", status: "Active" },
];
