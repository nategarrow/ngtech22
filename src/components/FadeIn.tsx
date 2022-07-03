import React, { PropsWithChildren, ReactPropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

type FadeProps = {
  duration: number
  delay: number
  children: JSX.Element
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FadeIn = ({
  duration = 300,
  delay = 0,
  children,
  ...delegated
}: FadeProps) => {
  return (
    <Wrapper
      style={{
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
export default FadeIn