import React from 'react';

import { Container, Search, SearchBox, BoxIcon } from '../Styles/default.js';

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Route() {
  return (
    <Container
      colors={['rgb(68, 68, 68)', 'rgb(10, 10, 10)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SearchBox>
        <Search />
        <BoxIcon>
          <Icon name="search" size={25} color='#fff6' />
        </BoxIcon>
      </SearchBox>

    </Container>
  )
}
