import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>こんにちは</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Button Pressed"
        onPress={() => Alert.alert('Button pressed')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
