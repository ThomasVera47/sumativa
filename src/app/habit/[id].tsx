import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { ProgressCard } from "../../components/ProgressCard";
import { ThemedText } from "../../components/ThemedText";
import { ThemedView } from "../../components/ThemedView";
import { useHabits } from "../../hooks/useHabits";

export default function HabitDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { habits, toggleHabitDay, theme } = useHabits();
  const isDark = theme === "dark";

  const habit = habits.find((h) => h.id === id);

  if (!habit) {
    return (
      <ThemedView variant="screen" style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ThemedText variant="subtitle">Hábito no encontrado</ThemedText>
      </ThemedView>
    );
  }

  const percentage = Math.round((habit.completedDays.length / 21) * 100);
  const days = Array.from({ length: 21 }, (_, i) => i + 1);

  return (
    <ThemedView variant="screen" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <ThemedView variant="card" style={{ borderRadius: 24, padding: 20, marginBottom: 20, flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              backgroundColor: isDark ? "#FFFFFF" : "#09090B",
            }}
          >
            <Ionicons name={habit.icon as any} size={26} color={isDark ? "#09090B" : "#FFFFFF"} />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText variant="title" style={{ fontSize: 20 }}>{habit.title}</ThemedText>
            <ThemedText variant="muted" style={{ marginTop: 4 }}>{habit.description}</ThemedText>
          </View>
        </ThemedView>

        <ProgressCard
          title="Constancia en el Reto"
          subtitle={`${habit.completedDays.length} de 21 días completados`}
          percentage={percentage}
        />

        <ThemedText variant="subtitle" style={{ marginBottom: 12 }}>
          Matriz de 21 Días (Toca para marcar)
        </ThemedText>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {days.map((day) => {
            const done = habit.completedDays.includes(day);
            return (
              <Pressable
                key={day}
                onPress={() => toggleHabitDay(habit.id, day)}
                style={{
                  width: "13%",
                  aspectRatio: 1,
                  borderRadius: 12,
                  marginBottom: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: done ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#121216" : "#FFFFFF",
                  borderWidth: 1,
                  borderColor: done ? (isDark ? "#FFFFFF" : "#09090B") : isDark ? "#27272A" : "#E4E4E7",
                }}
              >
                <ThemedText
                  style={{
                    fontWeight: "800",
                    fontSize: 13,
                    color: done ? (isDark ? "#09090B" : "#FFFFFF") : isDark ? "#A1A1AA" : "#71717A",
                  }}
                >
                  {day}
                </ThemedText>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </ThemedView>
  );
}