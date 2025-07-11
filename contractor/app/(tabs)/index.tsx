import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, SafeAreaView } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import globalStyle from '../../assets/styles/globalStyle';

export default function HomeScreen() {
  return (
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
           <View>
      <Text>Contractor</Text>
       <ParallaxScrollView
      headerBackgroundColor={{ dark: '#171221' }}>
        <ThemedText type="title">Contractor</ThemedText>
      <ThemedView style={styles.titleContainer}>
        
       
      </ThemedView>
     
    </ParallaxScrollView>
    </View>
      </SafeAreaView>
   
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    color: 'red'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
