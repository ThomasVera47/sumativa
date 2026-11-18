import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { HabitCard } from "../../../components/HabitCard";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import { useHabits } from "../../../hooks/useHabits";

export default function HabitsScreen() {
  const router = useRouter();
  const { habits, currentDay, toggleHabitDay, isHabitCompletedOnDay } = useHabits();

  return (
    <ThemedView variant="screen" className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <View className="mb-5">
          <ThemedText variant="title">Mis Hábitos</ThemedText>
          <ThemedText variant="muted" className="mt-1">
            Toca un hábito para ver su matriz de 21 días o márcalo para el Día {currentDay}.
          </ThemedText>
        </View>

        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            completed={isHabitCompletedOnDay(habit.id, currentDay)}
            onToggle={() => toggleHabitDay(habit.id, currentDay)}
            onPressDetail={() => router.push(`/habit/${habit.id}`)}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}