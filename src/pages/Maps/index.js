import React, { useState } from 'react';

import { Container } from './styles';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

/*- - - - - - Maps Config - - - - - -*/
import KeyGoogleMaps from '../../config/KeyGoogleMaps'
import MapStyle from '../../config/StyledGoogleMaps'

/*- - - - - - Components - - - - - -*/
import MenuX from './components/MenuX'


export default function Maps({ navigation }) {
  const [regionDefault, setRegionDefault] = useState([
    { latitude: -10.16432789342407, longitude: -48.876907825469964 },
    { latitude: -10.194792030075929, longitude: -48.90126261860132 }
  ])
  const [region, setRegion] = useState({
    x: {
      latitude: -10.179647270554196,
      longitude: -48.896548606824875,
      latitudeDelta: 0.0378,
      longitudeDelta: 0.0379
    }
  })
  const [marker, setMarker] = useState({
    latitude: -10.179647270554196,
    longitude: -48.896548606824875,
  })
  return (
    <Container>

      <MapView
        showsUserLocation={true}
        userLocationUpdateInterval={2000}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={region.x}
      >
        <Marker
          draggable
          title={'Marker'}
          coordinate={marker}
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate)
          }}
        />
      </MapView>

      <MenuX
        navigation={navigation}
      />
    </Container>
  )
}
