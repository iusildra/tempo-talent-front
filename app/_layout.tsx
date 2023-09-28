import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

export { ErrorBoundary } from "expo-router"; // Catch any errors thrown by the Layout component.

export const unstable_settings = { initialRouteName: "recruiter" }; // Ensure that reloading on `/modal` keeps a back button present.

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DarkTheme}>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="recruiter" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
