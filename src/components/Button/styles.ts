import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  background: #cb0d16;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #f4edf8;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${lighten(0.2, '#cb0d16')};
  }
`;
