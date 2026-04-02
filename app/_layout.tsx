import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Isso remove a barra branca em cima de todas as páginas
      }}
    />
  );
}

