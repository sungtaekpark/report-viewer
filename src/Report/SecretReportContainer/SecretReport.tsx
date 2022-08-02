import React, { useState, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReportViewerCompositionSection,
  ReportViewerBody,
} from '../ReportViewerComposition/StyleObj';
import StateDiagnosisSection from '../ReportViewerComposition/StateDiagnosisSection/StateDiagnosisSection';
import StateFutureSection from '../ReportViewerComposition/StateFutureSection/StateFutureSection';
import { useRecoilValue } from 'recoil';
import { ReportDescState } from '../ReportViewerComposition/ReportViewerComposition';
import { ErrorFallback } from '../../ErrorFallback/BaseErrorFallback';
import { Loading } from '../../../components/Loading/LoadingBar';
import { ErrorBoundary } from 'react-error-boundary';

function SecretReport(props: any) {
  const { company_id, site_id, mtr_id, diagnosis_date }: any = useParams();
  const rowData = useRecoilValue(
    ReportDescState({
      siteId: site_id,
      assetType: 'mtr',
      assetId: mtr_id,
      diagnosisDate: diagnosis_date,
    })
  );

  const [reportData, setReportData] = useState(rowData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        gap: '20px',
        background: '#f3f3f3',
      }}
    >
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <ReportViewerCompositionSection id={'page1'}>
            <ReportViewerBody>
              <StateDiagnosisSection
                id={'targetItem1'}
                reportData={reportData}
              />
            </ReportViewerBody>
          </ReportViewerCompositionSection>
          <ReportViewerCompositionSection id={'page2'}>
            <ReportViewerBody>
              <StateFutureSection id={'targetItem2'} reportData={reportData} />
            </ReportViewerBody>
          </ReportViewerCompositionSection>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default SecretReport;
