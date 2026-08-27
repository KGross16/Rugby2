export default function PlayersPage() {
  const players = [
    { id: "1", name: "Ebenezer Adebayo", index: 98, region: "UK / USA", age: 22, position: "Wing", squat: "460 lbs", bench: "330 lbs", yardsPerCarry: 6.8, tackleCompletion: 82 },
    { id: "2", name: "Darius King", index: 97, region: "USA", age: 22, position: "Center", squat: "510 lbs", bench: "380 lbs", yardsPerCarry: 6.2, tackleCompletion: 86 },
    { id: "3", name: "Liam O'Connor", index: 96, region: "Ireland / USA", age: 20, position: "Fly-Half", squat: "400 lbs", bench: "290 lbs", yardsPerCarry: 5.5, tackleCompletion: 78 },
    { id: "4", name: "Marcus Bradley", index: 95, region: "USA", age: 21, position: "Flanker", squat: "480 lbs", bench: "340 lbs", yardsPerCarry: 4.5, tackleCompletion: 91 },
    { id: "5", name: "Mason Cole", index: 95, region: "USA", age: 21, position: "Fullback", squat: "440 lbs", bench: "315 lbs", yardsPerCarry: 7.1, tackleCompletion: 76 },
    { id: "6", name: "Kofi Mensah", index: 95, region: "Ghana / USA", age: 21, position: "Wing", squat: "450 lbs", bench: "320 lbs", yardsPerCarry: 6.5, tackleCompletion: 80 },
    { id: "7", name: "Jaxson Reed", index: 94, region: "USA", age: 20, position: "Lock", squat: "540 lbs", bench: "395 lbs", yardsPerCarry: 3.2, tackleCompletion: 89 },
    { id: "8", name: "Mateo Silva", index: 94, region: "Argentina / USA", age: 21, position: "Scrum-Half", squat: "420 lbs", bench: "300 lbs", yardsPerCarry: 5.8, tackleCompletion: 83 },
    { id: "9", name: "Julian Vargas", index: 94, region: "Argentina", age: 21, position: "Fly-Half", squat: "390 lbs", bench: "280 lbs", yardsPerCarry: 5.2, tackleCompletion: 77 },
    { id: "10", name: "Malik Johnson", index: 94, region: "USA", age: 21, position: "Center", squat: "495 lbs", bench: "365 lbs", yardsPerCarry: 6.0, tackleCompletion: 85 },
    { id: "11", name: "Carlton Banks", index: 93, region: "USA", age: 22, position: "Prop", squat: "580 lbs", bench: "430 lbs", yardsPerCarry: 2.1, tackleCompletion: 93 },
    { id: "12", name: "Lucas Moreau", index: 93, region: "France / USA", age: 22, position: "Flanker", squat: "470 lbs", bench: "330 lbs", yardsPerCarry: 4.7, tackleCompletion: 90 },
    { id: "13", name: "Declan Smith", index: 93, region: "New Zealand", age: 22, position: "Fullback", squat: "430 lbs", bench: "305 lbs", yardsPerCarry: 6.9, tackleCompletion: 75 },
    { id: "14", name: "Soren Jensen", index: 92, region: "New Zealand / USA", age: 22, position: "Lock", squat: "530 lbs", bench: "385 lbs", yardsPerCarry: 3.4, tackleCompletion: 88 },
    { id: "15", name: "Toby Lawrence", index: 92, region: "Australia / USA", age: 22, position: "Scrum-Half", squat: "410 lbs", bench: "290 lbs", yardsPerCarry: 5.6, tackleCompletion: 81 },
    { id: "16", name: "Henry Vance", index: 91, region: "USA", age: 21, position: "Prop", squat: "565 lbs", bench: "415 lbs", yardsPerCarry: 2.3, tackleCompletion: 92 },
    { id: "17", name: "Hunter Brooks", index: 91, region: "USA", age: 20, position: "Wing", squat: "435 lbs", bench: "310 lbs", yardsPerCarry: 6.3, tackleCompletion: 79 },
    { id: "18", name: "Gavin Stewart", index: 90, region: "South Africa / USA", age: 20, position: "Flanker", squat: "450 lbs", bench: "320 lbs", yardsPerCarry: 4.6, tackleCompletion: 89 },
    { id: "19", name: "Charlie Daniels", index: 90, region: "USA", age: 22, position: "Fly-Half", squat: "380 lbs", bench: "270 lbs", yardsPerCarry: 5.0, tackleCompletion: 76 },
    { id: "20", name: "Brendan Foster", index: 90, region: "New Zealand / USA", age: 20, position: "Center", squat: "480 lbs", bench: "350 lbs", yardsPerCarry: 5.9, tackleCompletion: 84 },
    { id: "21", name: "Cole Harrison", index: 89, region: "USA", age: 21, position: "Lock", squat: "510 lbs", bench: "370 lbs", yardsPerCarry: 3.1, tackleCompletion: 87 },
    { id: "22", name: "Ethan Bridge", index: 89, region: "USA", age: 20, position: "Scrum-Half", squat: "395 lbs", bench: "280 lbs", yardsPerCarry: 5.4, tackleCompletion: 80 },
    { id: "23", name: "Logan Pearce", index: 89, region: "USA", age: 20, position: "Fullback", squat: "415 lbs", bench: "295 lbs", yardsPerCarry: 6.7, tackleCompletion: 74 },
    { id: "24", name: "Cameron Scott", index: 89, region: "USA", age: 21, position: "Wing", squat: "420 lbs", bench: "300 lbs", yardsPerCarry: 6.1, tackleCompletion: 78 },
    { id: "25", name: "Viktor Petrov", index: 88, region: "Canada", age: 22, position: "Prop", squat: "550 lbs", bench: "400 lbs", yardsPerCarry: 2.0, tackleCompletion: 91 },
    { id: "26", name: "Owen Mercer", index: 88, region: "USA", age: 21, position: "Flanker", squat: "440 lbs", bench: "310 lbs", yardsPerCarry: 4.4, tackleCompletion: 88 },
    { id: "27", name: "Finn Callahan", index: 88, region: "USA", age: 20, position: "Fly-Half", squat: "370 lbs", bench: "260 lbs", yardsPerCarry: 4.9, tackleCompletion: 75 },
    { id: "28", name: "Tyler Davis", index: 88, region: "USA", age: 21, position: "Center", squat: "465 lbs", bench: "340 lbs", yardsPerCarry: 5.7, tackleCompletion: 83 },
    { id: "29", name: "Declan Walsh", index: 87, region: "USA", age: 20, position: "Lock", squat: "500 lbs", bench: "360 lbs", yardsPerCarry: 3.0, tackleCompletion: 86 },
    { id: "30", name: "Zach Miller", index: 87, region: "USA", age: 21, position: "Scrum-Half", squat: "385 lbs", bench: "270 lbs", yardsPerCarry: 5.3, tackleCompletion: 79 },
    { id: "31", name: "Spencer Wyatt", index: 87, region: "USA", age: 21, position: "Fullback", squat: "405 lbs", bench: "285 lbs", yardsPerCarry: 6.5, tackleCompletion: 73 },
    { id: "32", name: "Braden O'Shea", index: 86, region: "Ireland / USA", age: 20, position: "Prop", squat: "540 lbs", bench: "390 lbs", yardsPerCarry: 2.2, tackleCompletion: 90 }
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafa", fontFamily: "system-ui, sans-serif", padding: "40px 20px" }}>
      {/* Component content mapping players */}
    </main>
  );
}
