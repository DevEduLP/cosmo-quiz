import React from "react";
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { View } from "react-native";
import { SettingsProvider } from "@/lib/settings";
import { initAds } from "@/lib/ads";
import { initPlayGames } from "@/lib/playGames";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        RUBIKMOONROCKS: require('@/assets/fonts/RubikMoonrocks-Regular.ttf'),
        CHAKRAPETCH_BOLD: require('@/assets/fonts/ChakraPetch-BoldItalic.ttf'),
        CHAKRAPETCH_SEMIBOLD: require('@/assets/fonts/ChakraPetch-SemiBoldItalic.ttf'),
    })

    React.useEffect(() => {
        if (fontsLoaded) {
          // opcional: micro-delay pra dar um fade agradável
          const id = setTimeout(() => SplashScreen.hideAsync(), 150);
          return () => clearTimeout(id);
        }
      }, [fontsLoaded]);

    React.useEffect(() => {
        initAds();
        initPlayGames();
    }, []);
    
      if (!fontsLoaded) return <View />;

    return (
        <SettingsProvider>
            <Stack screenOptions={{ headerShown: false,
                contentStyle: {}
             }}>
                <Stack.Screen name="index" />
            </Stack>
        </SettingsProvider>
    )
}
