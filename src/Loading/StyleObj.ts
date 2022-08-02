import styled, { keyframes } from 'styled-components';
import { COLOR, TRANSITION } from '../../constants';

const LoadingBase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
  justify-self: center;
  gap: 10px;
  position: relative;
  width: max-width;
  height: max-content;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 4px;
`;

const LoadingRail = styled.div`
  width: 60px;
  height: 8px;
  border-radius: 2px;
`;

const loadingAnimation = keyframes`
  0% {
      transform-origin: center left;
      transform: scaleX(0%);
    }
    49% {
      transform-origin: center left;
      transform: scaleX(100%);
    }
    50% {
      transform-origin: center right;
      transform: scaleX(100%);
    }
    100% {
      transform-origin: center right;
      transform: scaleX(0%);
    }
`;

const LoadingGauge = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${COLOR.COMPONENT_THEME.LOADING_GAUGE_THEME.gauge.background};
  animation: ${loadingAnimation} 2s ${TRANSITION.CURVE} infinite;
`;

export { LoadingBase, LoadingRail, LoadingGauge };
