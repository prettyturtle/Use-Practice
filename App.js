import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Divider from './Divider';
import UseEffect from './UseEffect/UseEffect';
import UseRef from './UseRef';
import UseState from './UseState';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <UseState />
          <Divider />
          <UseEffect />
          <Divider />
          <UseRef />
        </View>
      </ScrollView>
    </SafeAreaView>
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
