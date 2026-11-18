import { Habit } from "../types/habit";

export const INITIAL_HABITS: Habit[] = [
  {
    id: "1",
    title: "Estudiar programación",
    description: "Practicar TypeScript, React Native y algoritmos 45 min diarios.",
    category: "Técnico",
    icon: "code-slash",
    completedDays: [1, 2, 3, 4],
    targetDays: 21,
  },
  {
    id: "2",
    title: "Leer 20 minutos",
    description: "Lectura técnica o desarrollo personal sin distracciones.",
    category: "Mente",
    icon: "book",
    completedDays: [1, 2, 4],
    targetDays: 21,
  },
  {
    id: "3",
    title: "Realizar ejercicio físico",
    description: "Entrenamiento de fuerza o cardio por al menos 30 minutos.",
    category: "Salud",
    icon: "barbell",
    completedDays: [1, 3, 4],
    targetDays: 21,
  },
  {
    id: "4",
    title: "Beber 2 litros de agua",
    description: "Mantener hidratación constante durante la jornada en la UETS.",
    category: "Bienestar",
    icon: "water",
    completedDays: [1, 2, 3, 4],
    targetDays: 21,
  },
];