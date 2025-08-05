import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>
        Little Lemon
      </Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#EE9972'
  },
  title: {
    padding: 50,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
});