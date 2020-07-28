import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container, ViewMenuEnd, Menu, Button, TextIcon
} from './styles';


export default function MenuEnd({ navigation }) {
  /* - - - - -  Navigation Pages - - - - - */
  function login() {
    navigation.navigate('Login')
  }
  function students() {
    navigation.navigate('Students')
  }
  function bus() {
    navigation.navigate('Bus')
  }
  function route() {
    navigation.navigate('Route')
  }
  return (
    <ViewMenuEnd>
      <Container>
        <Menu>
          <Button onPress={() => students()}>
            <Icon name="person" size={50} color='rgba(255, 41, 0, 1)' />
            <TextIcon>Student</TextIcon>
          </Button>
          <Button onPress={() => bus()}>
            <Icon name="directions-bus" size={50} color="rgba(255, 41, 0, 1)" />
            <TextIcon>Bus</TextIcon>
          </Button>
          <Button onPress={() => route()}>
            <Icon name="directions" size={50} color="rgba(255, 41, 0, 1)" />
            <TextIcon>Route</TextIcon>
          </Button>
          <Button>
            <Icon name="reorder" size={50} color="rgba(255, 41, 0, 1)" />
            <TextIcon>Data</TextIcon>
          </Button>
          <Button onPress={() => { }}>
            <Icon name="settings" size={50} color="rgba(255, 41, 0, 1)" />
            <TextIcon>Settings</TextIcon>
          </Button>
          <Button onPress={() => login()} >
            <Icon name="clear" size={50} color="rgba(255, 41, 0, 1)" />
            <TextIcon>Out</TextIcon>
          </Button>
        </Menu>
      </Container>
    </ViewMenuEnd>
  )
}
