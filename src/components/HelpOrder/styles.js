import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  background: blue;
  flex: 1;
  flex-direction: row;
`;

export const Left = styled.View`
  flex-direction: row;
`;

export const Status = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 14px;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: #666666;
  line-height: 26px;
  margin-top: 10px;
`;
