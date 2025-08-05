import { View } from 'react-native';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: '#495E57'
        }}>
        <LittleLemonHeader />
        <LittleLemonFooter />
      </View>
    </>
  );
}