import { StyleSheet, View } from 'react-native';

// components
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.mainView}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>

      <View style={styles.footerView}>
        <LittleLemonFooter />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerView: {
    backgroundColor: '#333333'
  }
});