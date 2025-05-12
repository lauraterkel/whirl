import { Feather } from '@expo/vector-icons';
import { Stack, router } from "expo-router";
import { Pressable } from 'react-native';

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index"
    options={{
      headerShown: false,
    }} />
    <Stack.Screen name="profile"
    options={{
      headerTitle: "Profil",
      headerLeft: () => (
        <Pressable 
          style={{ 
            marginLeft: 0,
            marginTop: 8,
            marginBottom: 8,
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => router.back()}
        >
          <Feather name="chevron-left" size={24} color="#051B2F" />
        </Pressable>
      ),
    }}
     />
  </Stack>);
}
