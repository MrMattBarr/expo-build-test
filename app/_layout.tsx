import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { Text } from "../components/Themed";

import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { initializeFirebase } from "@/configs/firebaseConfig";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
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
  const colorScheme = useColorScheme();
  const [firebase, setFirebase] = useState<any>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const app = initializeFirebase();
    setFirebase(app);
  }, []);

  useEffect(() => {
    if (firebase) {
      const auth = getAuth();
      signInAnonymously(auth);
      onAuthStateChanged(auth, (theUser) => {
        setUser(theUser);
      });
    }
  }, [firebase]);

  if (!user) {
    return <Text>WOWIE</Text>;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
