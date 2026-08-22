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
}

export const prospects: Prospect[] = [
  // --- USA PROSPECTS ---
  { id: "marcus-bradley", name: "Marcus Bradley", origin: "USA", age: 19, position: "Prop", tier: "Tier 1", rating: 95, squat: 550, bench: 420, topSpeed: 28.4 },
  { id: "tyler-washington", name: "Tyler Washington", origin: "USA", age: 20, position: "Flanker", tier: "Tier 1", rating: 93, squat: 510, bench: 390, topSpeed: 32.2 },
  { id: "christian-reed", name: "Christian Reed", origin: "USA", age: 18, position: "Fly-Half", tier: "Tier 1", rating: 94, squat: 385, bench: 285, topSpeed: 33.6 },
  { id: "jordan-ellis", name: "Jordan Ellis", origin: "USA", age: 21, position: "Fullback", tier: "Tier 1", rating: 96, squat: 425, bench: 325, topSpeed: 36.0 },
  { id: "devon-brooks", name: "Devon Brooks", origin: "USA", age: 19, position: "Number 8", tier: "Tier 1", rating: 95, squat: 515, bench: 395, topSpeed: 32.5 },
  { id: "austin-cole", name: "Austin Cole", origin: "USA", age: 20, position: "Prop", tier: "Tier 2", rating: 89, squat: 500, bench: 380, topSpeed: 28.0 },
  { id: "cody-jenkins", name: "Cody Jenkins", origin: "USA", age: 18, position: "Flanker", tier: "Tier 2", rating: 87, squat: 465, bench: 350, topSpeed: 31.1 },

  // --- PROPS ---
  { id: "liam-oconnor", name: "Liam O'Connor", origin: "Canada", age: 18, position: "Prop", tier: "Tier 1", rating: 94, squat: 540, bench: 410, topSpeed: 28.1 },
  { id: "mateo-gimenez", name: "Mateo Giménez", origin: "Argentina", age: 20, position: "Prop", tier: "Tier 1", rating: 95, squat: 560, bench: 425, topSpeed: 28.5 },
  { id: "ignacio-vargas", name: "Ignacio Vargas", origin: "Uruguay", age: 19, position: "Prop", tier: "Tier 2", rating: 91, squat: 520, bench: 395, topSpeed: 27.9 },
  { id: "dante-morales", name: "Dante Morales", origin: "Chile", age: 18, position: "Prop", tier: "Tier 2", rating: 89, squat: 495, bench: 380, topSpeed: 28.0 },
  { id: "gabriel-roux", name: "Gabriel Roux", origin: "Canada", age: 20, position: "Prop", tier: "Tier 1", rating: 96, squat: 575, bench: 440, topSpeed: 28.8 },
  { id: "kevin-smith", name: "Kevin Smith", origin: "Canada", age: 21, position: "Prop", tier: "Tier 2", rating: 85, squat: 480, bench: 370, topSpeed: 27.5 },
  { id: "javier-vega", name: "Javier Vega", origin: "Chile", age: 22, position: "Prop", tier: "Tier 2", rating: 86, squat: 505, bench: 390, topSpeed: 27.8 },
  { id: "carlos-mendoza", name: "Carlos Mendoza", origin: "Argentina", age: 19, position: "Prop", tier: "Tier 1", rating: 93, squat: 530, bench: 405, topSpeed: 28.3 },
  { id: "thomas-baker", name: "Thomas Baker", origin: "Canada", age: 19, position: "Prop", tier: "Tier 2", rating: 88, squat: 510, bench: 385, topSpeed: 28.2 },
  { id: "lucas-ferreira", name: "Lucas Ferreira", origin: "Uruguay", age: 20, position: "Prop", tier: "Tier 1", rating: 92, squat: 535, bench: 415, topSpeed: 28.4 },

  // --- FLANKERS ---
  { id: "santiago-silva", name: "Santiago Silva", origin: "Uruguay", age: 20, position: "Flanker", tier: "Tier 2", rating: 88, squat: 485, bench: 365, topSpeed: 31.2 },
  { id: "juan-pablo", name: "Juan Pablo", origin: "Uruguay", age: 19, position: "Flanker", tier: "Tier 2", rating: 87, squat: 475, bench: 355, topSpeed: 31.0 },
  { id: "luca-bianchi", name: "Luca Bianchi", origin: "Argentina", age: 18, position: "Flanker", tier: "Tier 1", rating: 91, squat: 500, bench: 380, topSpeed: 32.1 },
  { id: "nicolas-rio", name: "Nicolas Rio", origin: "Argentina", age: 21, position: "Flanker", tier: "Tier 1", rating: 94, squat: 515, bench: 395, topSpeed: 32.5 },
  { id: "cole-harrison", name: "Cole Harrison", origin: "Canada", age: 19, position: "Flanker", tier: "Tier 2", rating: 86, squat: 460, bench: 345, topSpeed: 30.8 },
  { id: "mateo-alvarez", name: "Mateo Alvarez", origin: "Chile", age: 20, position: "Flanker", tier: "Tier 1", rating: 90, squat: 490, bench: 370, topSpeed: 31.8 },
  { id: "diego-ruiz", name: "Diego Ruiz", origin: "Chile", age: 18, position: "Flanker", tier: "Tier 2", rating: 85, squat: 450, bench: 340, topSpeed: 30.5 },
  { id: "brett-johnson", name: "Brett Johnson", origin: "Canada", age: 21, position: "Flanker", tier: "Tier 1", rating: 92, squat: 505, bench: 385, topSpeed: 32.0 },
  { id: "gonzalo-perez", name: "Gonzalo Perez", origin: "Uruguay", age: 19, position: "Flanker", tier: "Tier 2", rating: 89, squat: 480, bench: 360, topSpeed: 31.4 },
  { id: "franco-soler", name: "Franco Soler", origin: "Argentina", age: 20, position: "Flanker", tier: "Tier 1", rating: 95, squat: 525, bench: 400, topSpeed: 32.8 },

  // --- FLY-HALFS ---
  { id: "mateo-rodriguez", name: "Mateo Rodriguez", origin: "Argentina", age: 19, position: "Fly-Half", tier: "Tier 1", rating: 96, squat: 380, bench: 280, topSpeed: 33.4 },
  { id: "bruno-ferrari", name: "Bruno Ferrari", origin: "Argentina", age: 19, position: "Fly-Half", tier: "Tier 1", rating: 93, squat: 370, bench: 275, topSpeed: 33.0 },
  { id: "enzo-silva", name: "Enzo Silva", origin: "Uruguay", age: 18, position: "Fly-Half", tier: "Tier 2", rating: 89, squat: 350, bench: 260, topSpeed: 32.2 },
  { id: "liam-macdonald", name: "Liam MacDonald", origin: "Canada", age: 20, position: "Fly-Half", tier: "Tier 1", rating: 91, squat: 390, bench: 290, topSpeed: 32.6 },
  { id: "ignacio-castro", name: "Ignacio Castro", origin: "Chile", age: 19, position: "Fly-Half", tier: "Tier 2", rating: 87, squat: 340, bench: 250, topSpeed: 31.9 },
  { id: "tomas-acosta", name: "Tomas Acosta", origin: "Argentina", age: 21, position: "Fly-Half", tier: "Tier 1", rating: 95, squat: 400, bench: 300, topSpeed: 33.5 },
  { id: "ethan-walker", name: "Ethan Walker", origin: "Canada", age: 18, position: "Fly-Half", tier: "Tier 2", rating: 88, squat: 360, bench: 270, topSpeed: 32.4 },
  { id: "joaquin-soto", name: "Joaquin Soto", origin: "Uruguay", age: 20, position: "Fly-Half", tier: "Tier 1", rating: 90, squat: 375, bench: 280, topSpeed: 32.7 },
  { id: "matias-paredes", name: "Matias Paredes", origin: "Chile", age: 21, position: "Fly-Half", tier: "Tier 2", rating: 86, squat: 345, bench: 255, topSpeed: 31.8 },
  { id: "lucas-navarro", name: "Lucas Navarro", origin: "Argentina", age: 18, position: "Fly-Half", tier: "Tier 1", rating: 94, squat: 385, bench: 285, topSpeed: 33.2 },

  // --- FULLBACKS ---
  { id: "nicolas-herrera", name: "Nicolas Herrera", origin: "Chile", age: 21, position: "Fullback", tier: "Tier 1", rating: 92, squat: 410, bench: 310, topSpeed: 35.1 },
  { id: "diego-marquez", name: "Diego Marquez", origin: "Chile", age: 20, position: "Fullback", tier: "Tier 1", rating: 90, squat: 395, bench: 295, topSpeed: 34.5 },
  { id: "facundo-sosa", name: "Facundo Sosa", origin: "Argentina", age: 21, position: "Fullback", tier: "Tier 1", rating: 94, squat: 420, bench: 320, topSpeed: 35.6 },
  { id: "ethan-macdonald", name: "Ethan MacDonald", origin: "Canada", age: 19, position: "Fullback", tier: "Tier 1", rating: 93, squat: 415, bench: 315, topSpeed: 34.8 },
  { id: "joaquin-peralta", name: "Joaquín Peralta", origin: "Uruguay", age: 18, position: "Fullback", tier: "Tier 2", rating: 90, squat: 390, bench: 290, topSpeed: 34.2 },
  { id: "lucas-silva", name: "Lucas Silva", origin: "Argentina", age: 19, position: "Fullback", tier: "Tier 1", rating: 97, squat: 430, bench: 330, topSpeed: 36.4 },
  { id: "caleb-white", name: "Caleb White", origin: "Canada", age: 20, position: "Fullback", tier: "Tier 2", rating: 88, squat: 380, bench: 285, topSpeed: 33.9 },
  { id: "bautisa-gomez", name: "Bautista Gomez", origin: "Argentina", age: 18, position: "Fullback", tier: "Tier 1", rating: 95, squat: 425, bench: 325, topSpeed: 35.9 },
  { id: "agustin-vidal", name: "Agustin Vidal", origin: "Uruguay", age: 21, position: "Fullback", tier: "Tier 2", rating: 89, squat: 400, bench: 300, topSpeed: 34.1 },
  { id: "nicolas-bravo", name: "Nicolas Bravo", origin: "Chile", age: 19, position: "Fullback", tier: "Tier 2", rating: 87, squat: 385, bench: 280, topSpeed: 33.8 },

  // --- NUMBER 8s ---
  { id: "tomas-gomez", name: "Tomas Gomez", origin: "Argentina", age: 18, position: "Number 8", tier: "Tier 1", rating: 97, squat: 510, bench: 390, topSpeed: 32.4 },
  { id: "sean-mccarthy", name: "Sean McCarthy", origin: "Canada", age: 20, position: "Number 8", tier: "Tier 1", rating: 92, squat: 495, bench: 375, topSpeed: 31.9 },
  { id: "ignacio-gomez", name: "Ignacio Gomez", origin: "Argentina", age: 20, position: "Number 8", tier: "Tier 1", rating: 94, squat: 505, bench: 385, topSpeed: 32.2 },
  { id: "mateo-valdez", name: "Mateo Valdez", origin: "Uruguay", age: 19, position: "Number 8", tier: "Tier 2", rating: 88, squat: 470, bench: 350, topSpeed: 31.1 },
  { id: "dante-reyes", name: "Dante Reyes", origin: "Chile", age: 21, position: "Number 8", tier: "Tier 2", rating: 87, squat: 465, bench: 345, topSpeed: 30.9 },
  { id: "liam-smith", name: "Liam Smith", origin: "Canada", age: 18, position: "Number 8", tier: "Tier 1", rating: 93, squat: 500, bench: 380, topSpeed: 32.0 },
  { id: "franco-martinez", name: "Franco Martinez", origin: "Argentina", age: 21, position: "Number 8", tier: "Tier 1", rating: 96, squat: 520, bench: 400, topSpeed: 32.6 },
  { id: "joaquin-roas", name: "Joaquin Rojas", origin: "Uruguay", age: 20, position: "Number 8", tier: "Tier 2", rating: 89, squat: 480, bench: 360, topSpeed: 31.5 },
  { id: "carlos-espinoza", name: "Carlos Espinoza", origin: "Chile", age: 19, position: "Number 8", tier: "Tier 2", rating: 86, squat: 460, bench: 340, topSpeed: 30.7 },
  { id: "bruno-rossi", name: "Bruno Rossi", origin: "Argentina", age: 19, position: "Number 8", tier: "Tier 1", rating: 95, squat: 515, bench: 395, topSpeed: 32.3 }
];
