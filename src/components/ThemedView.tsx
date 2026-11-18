import React from "react";
import { View, ViewProps } from "react-native";
import { useHabits } from "../hooks/useHabits";

interface ThemedViewProps extends ViewProps {
  variant?: "screen" | "card" | "elevated";
  className?: string;
}

export const ThemedView: React.FC<ThemedViewProps> = ({
  variant = "screen",
  style,
  children,
  ...props
}) => {
  const { theme } = useHabits();
  const isDark = theme === "dark";

  const getBackgroundColor = () => {
    if (variant === "screen") return isDark ? "#09090B" : "#F4F4F5";
    return isDark ? "#121216" : "#FFFFFF";
  };

  const getBorderColor = () => {
    if (variant === "screen") return "transparent";
    return isDark ? "#27272A" : "#E4E4E7";
  };

  return (
    <View
      style={[
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          borderWidth: variant !== "screen" ? 1 : 0,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};