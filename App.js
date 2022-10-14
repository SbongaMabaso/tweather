import { StyleSheet, View } from 'react-native';
import Tweather from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Tweather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
