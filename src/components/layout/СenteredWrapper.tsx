import styled from 'styled-components';

export const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
`;
