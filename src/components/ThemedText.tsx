import React from "react";
import { Text, TextProps } from "react-native";
import { useHabits } from "../hooks/useHabits";

interface ThemedTextProps extends TextProps {
  variant?: "title" | "subtitle" | "body" | "muted" | "badge";
  className?: string;
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "body",
  style,
  children,
  ...props
}) => {
  const { theme } = useHabits();
  const isDark = theme === "dark";

  const getStyles = () => {
    switch (variant) {
      case "title":
        return {
          color: isDark ? "#FFFFFF" : "#09090B",
          fontSize: 24,
          fontWeight: "800" as const,
          letterSpacing: -0.5,
        };
      case "subtitle":
        return {
          color: isDark ? "#F4F4F5" : "#18181B",
          fontSize: 17,
          fontWeight: "700" as const,
        };
      case "body":
        return {
          color: isDark ? "#D4D4D8" : "#27272A",
          fontSize: 15,
        };
      case "muted":
        return {
          color: isDark ? "#A1A1AA" : "#71717A",
          fontSize: 13,
        };
      case "badge":
        return {
          color: isDark ? "#09090B" : "#FFFFFF",
          fontSize: 12,
          fontWeight: "700" as const,
          textTransform: "uppercase" as const,
        };
    }
  };

  return (
    <Text style={[getStyles(), style]} {...props}>
      {children}
    </Text>
  );
};