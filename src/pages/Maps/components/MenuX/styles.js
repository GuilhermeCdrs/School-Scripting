import styled from 'styled-components/native';

export const ViewMenuEnd = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Container = styled.View`
  padding: 3px;
`;
export const Menu = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 0, paddingRight: 0 },
  showsHorizontalScrollIndicator: false,
})`
background: rgba(0, 0, 0, 0);
`;
export const Button = styled.TouchableOpacity`
  height: 90px;
  width: 100px;
  background: rgba(0, 0, 0, .6);
  border-radius: 9px;
  border-color: rgba(255, 41, 0, 1);
  border-width: .4px;
  margin-left: 5px;
  margin-top: 9px;
  align-items: center;
  justify-content: center;
`;
export const TextIcon = styled.Text`
  font-size: 12px;
  color: rgba(255, 41, 0, 1)
`;
