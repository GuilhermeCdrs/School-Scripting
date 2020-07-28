import React from 'react';

import { Container } from './styles';

import MapView from 'react-native-maps';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


export default function Map() {
  return (
    <Container>
      {
        true ? <MapView
          style={{ flex: 1 }}
        /> : <></>
      }
      <QRCodeScanner
        onRead={() => { }}
      //flashMode={RNCamera.Constants.FlashMode.torch}
      />

    </Container>
  )
}
