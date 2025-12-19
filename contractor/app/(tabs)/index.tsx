import { Image } from 'expo-image';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { scaleFontSize } from '../../utils/scaling';
import globalStyle from '../../assets/styles/globalStyle';

export default function HomeScreen() {
  return (
    <SafeAreaView style={[globalStyle.darkBackground, globalStyle.flex]}>
      <View style={styles.titleContainer}>
        <Image source={require('@/assets/images/12334235.png')} style={{ alignSelf: 'center', width: '100%', height: 300}} />
        <Text style={styles.textContainer}>Contactor</Text>
        <View style={styles.buttonContainer}>
          <Pressable  
            style={styles.primaryButton} 
          >
            <Text style={styles.text}>New Game</Text>
          </Pressable>
          <Pressable  
            style={styles.secondaryButton} 
          >
            <Text style={styles.text}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  textContainer: {
    fontSize: scaleFontSize(32),
    fontFamily: 'SpaceGrotesk_700Bold',
    color: '#fff'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 10
  },
  primaryButton: {
    backgroundColor: '#7847EB',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12
  },
  secondaryButton: {
    backgroundColor: '#2E2447',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12
  },
  text: {
    color: '#000',
    fontSize: scaleFontSize(14),
    fontFamily: 'SpaceGrotesk_700Bold',
  }
})