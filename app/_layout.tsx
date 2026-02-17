import "react-native-reanimated";
import React from "react";
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { View } from "react-native";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'SOLARSPACEDEMO-Regular': require('@/assets/fonts/SOLARSPACEDEMO-Regular.otf'),
        SPACEMISSION: require('@/assets/fonts/SPACEMISSION.otf'),
        CAPITOLCITY: require('@/assets/fonts/capitolcity.ttf'),
    })

    React.useEffect(() => {
        if (fontsLoaded) {
          // opcional: micro-delay pra dar um fade agradável
          const id = setTimeout(() => SplashScreen.hideAsync(), 150);
          return () => clearTimeout(id);
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) return <View />;

    return (
        <Stack screenOptions={{ headerShown: false,
            contentStyle: {}
         }}>
            <Stack.Screen name="index" />
        </Stack>
    )
}
