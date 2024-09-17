import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
