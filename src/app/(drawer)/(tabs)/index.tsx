import { useRouter } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { HabitCard } from "../../../components/HabitCard";
import { ProgressCard } from "../../../components/ProgressCard";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import { useHabits } from "../../../hooks/useHabits";

export default function TodayScreen() {
  const router = useRouter();
  const {
    habits,
    currentDay,
    setCurrentDay,
    toggleHabitDay,
    isHabitCompletedOnDay,
    dailyProgress,
    completedTodayCount,
    theme,
  } = useHabits();

  const isDark = theme === "dark";
  const days = Array.from({ length: 21 }, (_, i) => i + 1);

  return (
    <ThemedView variant="screen" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 20 }}>
          <ThemedText variant="muted" style={{ fontWeight: "700", textTransform: "uppercase", fontSize: 11, letterSpacing: 1 }}>
            3° E1 · Técnico Salesiano · UETS
          </ThemedText>
          <ThemedText variant="title" style={{ marginTop: 4 }}>
            Día {currentDay} de 21
          </ThemedText>
        </View>

        {/* Selector horizontal de los 21 días */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20, maxHeight: 54 }}>
          {days.map((day) => {
            const active = day === currentDay;
            return (
              <Pressable
                key={day}
                onPress={() => setCurrentDay(day)}
                style={{
                  width: 46,
                  height: 50,
                  borderRadius: 14,
                  marginRight: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: active ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#121216" : "#FFFFFF",
                  borderWidth: 1,
                  borderColor: active ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#27272A" : "#E4E4E7",
                }}
              >
                <ThemedText
                  style={{
                    fontSize: 13,
                    fontWeight: "800",
                    color: active ? (isDark ? "#09090B" : "#FFFFFF") : isDark ? "#A1A1AA" : "#71717A",
                  }}
                >
                  D{day}
                </ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>

        <ProgressCard
          title="Avance de hoy"
          subtitle={`${completedTodayCount} de ${habits.length} hábitos listos`}
          percentage={dailyProgress}
        />

        <ThemedText variant="subtitle" style={{ marginBottom: 12, marginTop: 4 }}>
          Hábitos diarios
        </ThemedText>

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