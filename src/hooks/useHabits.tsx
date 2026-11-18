import React, { createContext, useContext, useMemo, useState } from "react";
import { INITIAL_HABITS } from "../data/initialHabits";
import { Habit, ThemeMode } from "../types/habit";

interface HabitsContextType {
  habits: Habit[];
  currentDay: number;
  setCurrentDay: (day: number) => void;
  toggleHabitDay: (habitId: string, day?: number) => void;
  isHabitCompletedOnDay: (habitId: string, day?: number) => boolean;
  dailyProgress: number;
  completedTodayCount: number;
  totalChallengeProgress: number;
  theme: ThemeMode;
  toggleTheme: () => void;
  resetChallenge: () => void;
}

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

export const HabitsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
  const [currentDay, setCurrentDay] = useState<number>(4);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleHabitDay = (habitId: string, day: number = currentDay) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== habitId) return habit;
        const exists = habit.completedDays.includes(day);
        const updatedDays = exists
          ? habit.completedDays.filter((d) => d !== day)
          : [...habit.completedDays, day].sort((a, b) => a - b);
        return { ...habit, completedDays: updatedDays };
      })
    );
  };

  const isHabitCompletedOnDay = (habitId: string, day: number = currentDay): boolean => {
    const habit = habits.find((h) => h.id === habitId);
    return habit ? habit.completedDays.includes(day) : false;
  };

  const completedTodayCount = useMemo(
    () => habits.filter((h) => h.completedDays.includes(currentDay)).length,
    [habits, currentDay]
  );

  const dailyProgress = useMemo(() => {
    if (habits.length === 0) return 0;
    return Math.round((completedTodayCount / habits.length) * 100);
  }, [completedTodayCount, habits.length]);

  const totalChallengeProgress = useMemo(() => {
    const totalPossible = habits.length * 21;
    if (totalPossible === 0) return 0;
    const totalDone = habits.reduce((acc, h) => acc + h.completedDays.length, 0);
    return Math.round((totalDone / totalPossible) * 100);
  }, [habits]);

  const resetChallenge = () => {
    setHabits((prev) => prev.map((h) => ({ ...h, completedDays: [] })));
    setCurrentDay(1);
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        currentDay,
        setCurrentDay,
        toggleHabitDay,
        isHabitCompletedOnDay,
        dailyProgress,
        completedTodayCount,
        totalChallengeProgress,
        theme,
        toggleTheme,
        resetChallenge,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = (): HabitsContextType => {
  const context = useContext(HabitsContext);
  if (!context) {
    throw new Error("useHabits debe usarse dentro de un HabitsProvider");
  }
  return context;
};