export interface AthleteMetrics {
  id: string;
  name: string;
  ageDivision: 'U18' | 'U20' | 'U23';
  position: string;
  metrics: {
    speed10m: number;        // Acceleration (seconds)
    speed40m: number;        // Top-end speed (seconds)
    yoYoIR2: number;         // Aerobic capacity / endurance stage
    powerScore: number;      // Calculated power index
    yardsPerCarry: number;   // Offensive efficiency / gain per attempt
    tackleCompletion: number;// Defensive efficiency (percentage success)
    na4Tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  };
  verified: boolean;
  lastUpdated: string;
}
