export interface Habit {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  completedDays: number[]; // Días completados del 1 al 21
  targetDays: number;
}

export type ThemeMode = "light" | "dark";