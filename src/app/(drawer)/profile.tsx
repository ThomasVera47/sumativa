import { useRouter } from "expo-router";
import { Alert, ScrollView, Switch, View } from "react-native";
import { MenuItem } from "../../components/MenuItem";
import { ThemedText } from "../../components/ThemedText";
import { ThemedView } from "../../components/ThemedView";
import { useHabits } from "../../hooks/useHabits";

export default function ProfileScreen() {
  const router = useRouter();
  const { theme, toggleTheme, resetChallenge, totalChallengeProgress } = useHabits();
  const isDark = theme === "dark";

  const handleReset = () => {
    Alert.alert(
      "Reiniciar Reto",
      "¿Deseas limpiar todos los días marcados y volver al Día 1?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Reiniciar", style: "destructive", onPress: resetChallenge },
      ]
    );
  };

  return (
    <ThemedView variant="screen" className="flex-1">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Tarjeta de perfil */}
        <ThemedView variant="card" className="rounded-3xl p-5 mb-6 items-center">
          <View
            className={`w-16 h-16 rounded-full items-center justify-center mb-3 ${
              isDark ? "bg-white" : "bg-zinc-950"
            }`}
          >
            <ThemedText
              className={`text-xl font-black ${
                isDark ? "text-zinc-950" : "text-white"
              }`}
            >
              TV
            </ThemedText>
          </View>
          <ThemedText variant="title">Thomas Vera</ThemedText>
          <ThemedText variant="muted" className="mt-1">
            3° Bachillerato Técnico · Paralelo E1 · UETS
          </ThemedText>
          <View
            className={`mt-3 px-4 py-1.5 rounded-full ${
              isDark ? "bg-zinc-800" : "bg-zinc-100"
            }`}
          >
            <ThemedText variant="muted" className="font-bold">
              Progreso General: {totalChallengeProgress}%
            </ThemedText>
          </View>
        </ThemedView>

        <ThemedText variant="subtitle" className="mb-3">
          Apariencia y Navegación
        </ThemedText>

        <MenuItem
          icon={isDark ? "moon" : "sunny"}
          title="Modo Oscuro / Blanco"
          subtitle={isDark ? "Tema oscuro activo" : "Tema blanco activo"}
          onPress={toggleTheme}
          rightElement={
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: "#D4D4D8", true: "#FFFFFF" }}
              thumbColor={isDark ? "#09090B" : "#FFFFFF"}
            />
          }
        />

        <MenuItem
          icon="today"
          title="Ir a Hábitos de Hoy"
          subtitle="Volver a las pestañas principales"
          onPress={() => router.push("/(drawer)/(tabs)")}
        />

        <MenuItem
          icon="refresh"
          title="Reiniciar Reto de 21 Días"
          subtitle="Poner todos los contadores en cero"
          onPress={handleReset}
        />
      </ScrollView>
    </ThemedView>
  );
}