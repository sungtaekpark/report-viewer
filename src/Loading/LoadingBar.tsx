import React from 'react';
import { LoadingBase, LoadingGauge, LoadingRail } from './StyleObj';

export const Loading = () => {
  return (
    <LoadingBase>
      <h1>LOADING</h1>
      <LoadingRail>
        <LoadingGauge />
      </LoadingRail>
    </LoadingBase>
  );
};
