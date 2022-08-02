import React from 'react';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import { PrognosisResultTableSectionWrap } from './StyleObj';
import { useTranslation } from 'react-i18next';

function PrognosisResultTableSection(props: any) {
  const { aiPrognosisResult } = props;
  const { criticalRange, faultRange } = aiPrognosisResult;
  const { t } = useTranslation();

  const resultTableLabel = t(`report:predictiveAnalysisResults`);
  return (
    <PrognosisResultTableSectionWrap>
      <ReportCommonLabel label={resultTableLabel} />
      <table>
        <tbody>
          <tr
            style={{
              height: '20px',
              border: '0.5px solid #aaaaaa',
              borderLeft: 'none',
              borderRight: 'none',
            }}
          >
            <td className={'sub-header'}>{t(`report:resultLevel`)}</td>
            <td className={'sub-header'}>{t(`table:header:stateReached`)}</td>
          </tr>

          <tr style={{ verticalAlign: 'middle', border: 'none' }}>
            <td
              style={{ backgroundColor: '#ea893126', verticalAlign: 'middle' }}
            >
              {t(`common:abnormal`)}
            </td>
            <td>{criticalRange}</td>
          </tr>

          <tr>
            <td
              style={{ backgroundColor: '#d2211626', verticalAlign: 'middle' }}
            >
              {t(`common:critical`)}
            </td>
            <td>{faultRange}</td>
          </tr>
        </tbody>
      </table>
    </PrognosisResultTableSectionWrap>
  );
}

export default PrognosisResultTableSection;
