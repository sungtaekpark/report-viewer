import React, { Suspense } from 'react';
import SecretReport from './SecretReport';
import { ErrorFallback } from '../../ErrorFallback/BaseErrorFallback';
import { Loading } from '../../../components/Loading/LoadingBar';
import { ErrorBoundary } from 'react-error-boundary';

function SecretReportContainer(props: any) {
  return (
    <div>
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <SecretReport />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default SecretReportContainer;
