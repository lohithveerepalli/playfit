// MapScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const [markerLocation, setMarkerLocation] = useState(null);

  const sportLocation = route.params?.sportLocation;

  return (
    <View style={styles.container}>
      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: sportLocation ? sportLocation.latitude : 0,
          longitude: sportLocation ? sportLocation.longitude : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {sportLocation && (
          <Marker coordinate={sportLocation} title="Sport Location" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
