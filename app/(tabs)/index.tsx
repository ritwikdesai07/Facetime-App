import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#f3f3f3ff', justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={{ width: '100%', alignItems: 'center', marginTop: 60, marginBottom: 30 }}>
        <Text style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: '#222',
          fontFamily: 'SpaceMono',
          textAlign: 'center',
          letterSpacing: 2,
          textShadowColor: 'rgba(0,0,0,0.12)',
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 4,
        }}>
           playBox
        </Text>
      </View>
      <View style={{
        flex: 1,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        padding: 24,
      }}>
        {/* Add your content here */}
      </View>
    </View>
  );
}
