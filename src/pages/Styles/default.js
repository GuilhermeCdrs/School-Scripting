import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex:1;
  align-items: center;
  border-top-color: #111;
  border-top-width: 1px;
`;
export const SearchBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 0;
  min-height: 40px;
  margin-top: 15px;
  border-radius: 100px;
  width: 85%;
  height: 7%;
  background-color: rgba(0, 0, 0, 0);
`;
export const Search = styled.TextInput.attrs({
  placeholderTextColor: '#FFE7',
  placeholder: "Search"
})`
  padding: 10px;
  padding-left: 20px;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  min-width: 140px;
  min-height: 50px;
  border-width: 1px;
  color: rgba(255, 255, 255,.9);
  border-color: rgba(0, 0, 0,1);
  background-color: rgb(29, 29, 29);
`;
export const BoxIcon = styled.View`
  z-index: 1;
  padding-right: 10px;
  margin-right: 1px;
  border-color: rgba(0, 0, 0, .9);
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
`;

/*
rgb(68, 68, 68)
rgb(254, 40, 30)
rgb(59, 59, 59)
rgb(169, 169, 169)
rgb(29, 29, 29)

*/
