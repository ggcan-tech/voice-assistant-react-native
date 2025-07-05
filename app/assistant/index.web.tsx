import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  Pressable,
} from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Mic, MicOff, X } from 'lucide-react-native';

export default function AssistantScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebAssistantView />
    </SafeAreaView>
  );
}

const WebAssistantView = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <MicOff size={64} color={colorScheme === 'light' ? '#666' : '#999'} />
        </View>
        
        <Text style={[styles.title, themeTextStyle]}>
          Voice Assistant
        </Text>
        
        <Text style={[styles.subtitle, themeTextStyle]}>
          Voice assistant features are not available on the web platform.
        </Text>
        
        <Text style={[styles.description, themeTextStyle]}>
          To use the voice assistant, please access this app on a mobile device (iOS or Android).
        </Text>
        
        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Mic size={20} color={colorScheme === 'light' ? '#666' : '#999'} />
            <Text style={[styles.featureText, themeTextStyle]}>
              Real-time voice interaction
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={[styles.featureText, themeTextStyle]}>
              🎵 Audio visualization
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={[styles.featureText, themeTextStyle]}>
              📝 Live transcription
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FF0000',
            },
            styles.button,
          ]}
          onPress={() => {
            router.back();
          }}
        >
          <X size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  lightContainer: {
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#1a1a1a',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    marginBottom: 24,
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  featureList: {
    alignItems: 'flex-start',
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 16,
  },
  controlsContainer: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  lightThemeText: {
    color: '#000000',
  },
  darkThemeText: {
    color: '#FFFFFF',
  },
});