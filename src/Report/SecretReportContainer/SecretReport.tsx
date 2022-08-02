import React, { useState, useLayoutEffect,useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReportViewerCompositionSection,
  ReportViewerBody,
} from '../StyleObj';
import StateDiagnosisSection from '../StateDiagnosisSection/StateDiagnosisSection';
import StateFutureSection from '../StateFutureSection/StateFutureSection';
import {selectorFamily, useRecoilValue} from 'recoil';
import { ErrorFallback } from '../../ErrorFallback/BaseErrorFallback';
import { Loading } from '../../Loading/LoadingBar';
import { ErrorBoundary } from 'react-error-boundary';
import axios from "axios";


const getRowData = async (
    api_type: string,
    company_id: string,
    site_id: string,
    mtr_id: string,
    diagnosis_date: string,
    token: string
) => {
    const translatedApiType = api_type === 'dev'
        ? 'https://subs-backend.guardione.dev'
        : api_type === "ai" ? 'https://subs-backend.guardione.ai'
            : api_type === "demo" ? 'https://subs-backend-gs.guardione.dev'
                : 'https://subs-backend.guardione.dev'
   return await axios.get(`${translatedApiType}/api/companies/${company_id}/sites/${site_id}/assets/mtr/${mtr_id}/report?diagnosis_date=${diagnosis_date}`, {
        headers: {Authorization: `${token ? `Bearer ${token}` : undefined}`},
    })
}

export const ReportDescState = selectorFamily({
    key: '@ReportState/description',
    get:
        (query: any) =>
            async ({ get }) => {
                const { api_type, company_id, site_id, mtr_id, diagnosis_date, token } = query;
                const {
                    data: { data: result },
                } = await getRowData(
                    api_type,
                    company_id,
                    site_id,
                    mtr_id,
                    diagnosis_date,
                    token
                );
                return result;
            },
});

function SecretReport(props: any) {
  const { api_type, company_id, site_id, mtr_id, diagnosis_date, token }: any = useParams();

    const rowData = useRecoilValue(
        ReportDescState({
            api_type,
            company_id,
            site_id,
            mtr_id,
            diagnosis_date,
            token
        })
    );
    const [reportData, setReportData] = useState(rowData);

    useLayoutEffect(() => {
        setReportData(rowData);
    }, [rowData]);


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
