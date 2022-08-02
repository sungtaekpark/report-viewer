import React from 'react';
import CommonInfoTable from './CommonInfoTableSection/CommonInfoTable';
import { StateDiagnosisSectionWrap } from './StyleObj';
import ReportCommonTitle from '../ReportCommonTitleSection/ReportCommonTitle';
import GasTableSection from './GasTableSection/GasTableSection';
import DiagnosisResultTableSection from './DiagnosisResultTableSection/DiagnosisResultTableSection';
import TotalSolutionSection from './TotalSolutionSection/TotalSolutionSection';
import ReportViewerHeaderSection from '../ReportViewerHeaderSection/ReportViewerHeaderSection';
import { useTranslation } from 'react-i18next';

function StateDiagnosisSection(props: any) {
  const { reportData } = props;
  const { basicInfo, generalDiagnosisResult, generalOpinion, dga } = reportData;
  const { t } = useTranslation();

  const diagnosisTitle = `1. ${t(`report:dgaBasedDiagnosis`)}`;

  const { assetName, analysisDate } = reportData;
  const headerData = {
    assetName: assetName,
    analysisDate: analysisDate,
  };

  return (
    <StateDiagnosisSectionWrap>
        <ReportViewerHeaderSection headerData={headerData} />
        <CommonInfoTable basicInfo={basicInfo} headerData={headerData} />
        <ReportCommonTitle title={diagnosisTitle} />
        {/* 가스 농도 테이블 */}
        <GasTableSection dga={dga} />
        {/*  종합 진단 결과 테이블 */}
        <DiagnosisResultTableSection
          generalDiagnosisResult={generalDiagnosisResult}
        />
        {/*  종합 의견 textArea */}
        <TotalSolutionSection generalOpinion={generalOpinion} />
    </StateDiagnosisSectionWrap>
  );
}

export default StateDiagnosisSection;
