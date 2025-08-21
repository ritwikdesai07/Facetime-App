import { useFonts } from "expo-font";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'SpaceMono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#f3f3f3ff', justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={{ width: '100%', alignItems: 'center', marginTop: 100, marginBottom: 30 }}>
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
        marginBottom: 30,
      }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{
            width: '100%',
            height: 260,
            backgroundColor: '#fff',
            borderRadius: 18,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.18,
            shadowRadius: 12,
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: 32,
            paddingTop: 32,
            paddingBottom: 16,
            marginBottom: 20,
          }}>
            {/* Box 1 content */}
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 8, marginTop: -17 }}>
              <Image
                source={require('../../assets/images/cards.png')}
                style={{
                  width: 300,
                  height: 180,
                  borderRadius: 18,
                  resizeMode: 'cover',
                  marginBottom: 12,
                  borderWidth: 3,
                  borderColor: '#e0e0e0',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.15,
                  shadowRadius: 1,
                  backgroundColor: '#fff',
                }}
              />
            </View>
            <TouchableOpacity
              style={{
              backgroundColor: '#175904ff',
              paddingVertical: 10,
              paddingHorizontal: 24,
              borderRadius: 12,
              alignSelf: 'center',
              marginTop: -13,
              }}
              activeOpacity={0.8}
            >
                <Text style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'APL386',
                letterSpacing: 1,
                }}>
                Play with sharePlay
                </Text>
            </TouchableOpacity>
            </View>
            <View style={{
            width: '100%',
            height: 260,
            backgroundColor: '#fff',
            borderRadius: 18,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.18,
            shadowRadius: 12,
            elevation: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            marginBottom: 20,
            }}>
            <View style={{ width: '100%', alignItems: 'center', marginBottom: 16 }}>
              <Image
              source={require('../../assets/images/tabletennis.png')}
              style={{
                width: 300,
                height: 180,
                borderRadius: 18,
                resizeMode: 'cover',
                marginBottom: 12,
                borderWidth: 3,
                borderColor: '#e0e0e0',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 1,
                backgroundColor: '#fff',
              }}
              />
            </View>
            <TouchableOpacity
              style={{
              backgroundColor: '#6ba3f1ff',
              paddingVertical: 10,
              paddingHorizontal: 24,
              borderRadius: 12,
              alignSelf: 'center',
              marginTop: -20,
              }}
              activeOpacity={0.8}
            >
              <Text style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
              fontFamily: 'APL386',
              letterSpacing: 1,
              }}>
              Play with sharePlay
              </Text>
            </TouchableOpacity>
            {/* Box 2 content */}
            </View>
            <View style={{
            width: '100%',
            height: 260,
            backgroundColor: '#f8f8f8',
            borderRadius: 18,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.12,
            shadowRadius: 10,
            elevation: 8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            marginBottom: 20,
            borderStyle: 'dashed',
            borderWidth: 2,
            borderColor: '#d1d5db',
            }}>
            <Text style={{
              fontSize: 22,
              fontWeight: '600',
              color: '#222',
              fontFamily: 'SpaceMono',
              textAlign: 'center',
              letterSpacing: 1,
              marginBottom: 8,
            }}>
              More games coming soon
            </Text>
            <Text style={{
              fontSize: 16,
              color: '#6b7280',
              fontFamily: 'SpaceMono',
              textAlign: 'center',
              letterSpacing: 0.5,
            }}>
              Stay tuned for new experiences!
            </Text>
            </View>
        </ScrollView>
      </View>
    </View>
  );
}
