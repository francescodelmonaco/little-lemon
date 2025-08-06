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
    backgroundColor: '#EE9972'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
});