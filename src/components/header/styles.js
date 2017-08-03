import styled, {keyframes} from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: white;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const Animation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = styled.img`
  animation: ${Animation} infinite 20s linear;
  height: 80px;
`;


