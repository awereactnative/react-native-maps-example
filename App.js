/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Text>This is maps with React Native Maps</Text>
      <Text>If following doesn't work, please replace the API key in </Text>
      <Text>Android Manifest.xml</Text>
      <Pressable
        onPress={() => {
          Linking.openURL('https://awereactnative.com/react-native-maps/');
        }}>
        <Text>Follow https://awereactnative.com/react-native-maps/</Text>
      </Pressable>
      <MapView
        style={styles.map}
        initialRegion={tokyoRegion} //your region data goes here.
      >
        {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
        <Marker coordinate={tokyoRegion} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    width: 200,
    height: 200,
  },
});

export default App;
