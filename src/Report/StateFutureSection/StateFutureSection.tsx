import React from 'react';
import { StateFutureSectionWrap } from './StyleObj';
import ReportCommonTitle from '../ReportCommonTitleSection/ReportCommonTitle';
import LastFiveTimesDgaTableSection from './LastFiveTimesDgaTableSection/LastFiveTimesDgaTableSection';
import DgaTrendOpinionSection from './DgaTrendOpinionSection/DgaTrendOpinionSection';
import HealthFeatureChartSection from './HealthFeatureChartSection/HealthFeatureChartSection';
import HealthFeatureTrendChartSection from './HealthFeatureTrendChartSection/HealthFeatureTrendChartSection';
import PrognosisResultTableSection from './PrognosisResultTableSection/PrognosisResultTableSection';
import ReportViewerHeaderSection from '../ReportViewerHeaderSection/ReportViewerHeaderSection';
import { useTranslation } from 'react-i18next';

function StateFutureSection(props: any) {
  const { reportData } = props;
  const {
    lastFiveTimesDga,
    aiPrognosisResult,
    aiDgaTrendAnalysis,
    aiHealthDiagnosisPlane,
    aiHealthIndexTrend,
    aiDgaTrendAnalysisEn,
  } = reportData;
  const { t } = useTranslation();

  const prognosisTitle = `2. ${t(`report:dgaBasedPrognosis`)}`;

  const { assetName, analysisDate } = reportData;
  const headerData = {
    assetName: assetName,
    analysisDate: analysisDate,
  };

  return (
    <StateFutureSectionWrap>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <ReportViewerHeaderSection headerData={headerData} />
        <ReportCommonTitle title={prognosisTitle} />
        {/* 최근 5회 가스농도 */}
        <LastFiveTimesDgaTableSection lastFiveTimesDga={lastFiveTimesDga} />
        {/* 건전성 진단 평면 / 건전성 지수 트렌드 차트 / 예측분석결과 */}
        <div className={`chart-section`}>
          <div style={{display:"flex", flexDirection:"row", width:"100%", gap: "20px"}}>
            {/* 건전성 진단 평면*/}
            <HealthFeatureChartSection chartData={aiHealthDiagnosisPlane} />
            {/* 예측분석결과 */}
            <PrognosisResultTableSection
              aiPrognosisResult={aiPrognosisResult}
            />
          </div>
          {/* 건전성 지수 트렌드 차트 / 예측분석결과 */}
          <div className={`chart-section-left-area`}>
            {/* 건전성 지수 트렌드 차트 */}
            <HealthFeatureTrendChartSection chartData={aiHealthIndexTrend} />
          </div>
        </div>
      </div>
      {/*  DGA 트렌드 분석 textarea */}
      <DgaTrendOpinionSection
        aiDgaTrendAnalysis={aiDgaTrendAnalysis}
        aiDgaTrendAnalysisEn={aiDgaTrendAnalysisEn}
      />
      {/*<div*/}
      {/*  className={`report-footer-section`}*/}
      {/*  style={{ width: '100%', textAlign: 'center', padding: '20px' }}*/}
      {/*>*/}
      {/*  /!*- 2 -*!/*/}
      {/*</div>*/}
    </StateFutureSectionWrap>
  );
}

export default StateFutureSection;
