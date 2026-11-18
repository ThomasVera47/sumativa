import { ScrollView, View } from "react-native";
import { ProgressCard } from "../../../components/ProgressCard";
import { ThemedText } from "../../../components/ThemedText";
import { ThemedView } from "../../../components/ThemedView";
import { useHabits } from "../../../hooks/useHabits";

export default function ProgressScreen() {
  const { habits, dailyProgress, totalChallengeProgress, currentDay, theme } = useHabits();
  const isDark = theme === "dark";

  return (
    <ThemedView variant="screen" className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        <View className="mb-5">
          <ThemedText variant="title">Estadísticas</ThemedText>
          <ThemedText variant="muted" className="mt-1">
            Rendimiento acumulado en el Reto de 21 Días
          </ThemedText>
        </View>

        <ProgressCard
          title="Progreso Global del Reto"
          subtitle="Promedio total sobre los 21 días"
          percentage={totalChallengeProgress}
        />

        <ProgressCard
          title={`Cumplimiento Día ${currentDay}`}
          subtitle="Porcentaje de metas cerradas hoy"
          percentage={dailyProgress}
        />

        <ThemedText variant="subtitle" className="mb-3 mt-2">
          Desglose por hábito
        </ThemedText>

        {habits.map((habit) => {
          const pct = Math.round((habit.completedDays.length / 21) * 100);
          return (
            <ThemedView key={habit.id} variant="card" className="rounded-2xl p-4 mb-3">
              <View className="flex-row justify-between items-center mb-2">
                <ThemedText variant="subtitle" className="text-base">
                  {habit.title}
                </ThemedText>
                <ThemedText variant="muted" className="font-bold">
                  {habit.completedDays.length}/21 ({pct}%)
                </ThemedText>
              </View>
              <View
                className={`h-2 w-full rounded-full overflow-hidden ${
                  isDark ? "bg-zinc-800" : "bg-zinc-200"
                }`}
              >
                <View
                  style={{ width: `${pct}%` }}
                  className={`h-full rounded-full ${
                    isDark ? "bg-white" : "bg-zinc-950"
                  }`}
                />
              </View>
            </ThemedView>
          );
        })}
      </ScrollView>
    </ThemedView>
  );
}