import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${props => props.flex};
`;

const SplitScreen = ({ children }) => {
  const [left, right] = children;

  return (
    <Container>
      <Panel flex={3}>
        {left}
      </Panel>
      <Panel flex={2}>
        {right}
      </Panel>
    </Container>
  );
}

export default SplitScreen;