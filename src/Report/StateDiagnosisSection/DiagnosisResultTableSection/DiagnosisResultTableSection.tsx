import React from 'react';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import { DiagnosisResultTableSectionWrap } from './StyleObj';
import { useTranslation } from 'react-i18next';

function DiagnosisResultTableSection(props: any) {
  const { generalDiagnosisResult } = props;

  const { t } = useTranslation();
  const langSet: Record<string, string> = {
    normal: t('common:normal'),
    attention: t('common:attention'),
    caution: t('common:caution'),
    abnormal: t('common:abnormal'),
    critical: t('common:critical'),
  };

  const langType = t(`common:langType`);

  const {
    aiDiagnosisResult,
    ruleIeeeResult,
    ruleIecResult,
    ruleJapanResult,
    ruleDuvalTriangle,
    ruleDoernenburgRatios,
    ruleRogersRatios,
    ruleBasicGasRatios,
    ruleFaultType,
    ruleFaultLocation,
    ruleFaultTypeEn,
    ruleFaultLocationEn,
  } = generalDiagnosisResult;

  const aiResultColTitle = t(`report:aiDiagnosisResult`);
  const aiResultColList = ['Guardione Substation'];

  const ruleResultColTitle = t(`report:ruleDiagnosisResult`);
  const ruleResultStandardList = ['IEEE Std', 'IEC', 'JAPAN ETRA'];

  const ruleResultColList = [
    'Duval Triangle 1',
    'Doernenburg Ratios',
    'Rogers Ratios',
    'Basic Gas Ratios',
  ];

  const faultResultColList = [
    t(`report:faultType`),
    t(`report:faultOccurrence`),
  ];
  const faultResultRowList = [
    ruleFaultType,
    ruleFaultLocation,
    ruleFaultTypeEn,
    ruleFaultLocationEn,
  ].map((str) => str?.split(/<br>/g).join('<br>'));

  return (
    <DiagnosisResultTableSectionWrap>
      <ReportCommonLabel label={t(`report:comprehensiveDiagnosisResult`)} />
      <table>
        <colgroup>
          <col span={1} style={{ width: '15%' }} />
          <col span={1} style={{ width: '35%' }} />
          <col span={1} style={{ width: '15%' }} />
          <col span={1} style={{ width: '35%' }} />
        </colgroup>
        {/* AI 진단 결과 */}
        <tbody>
          <tr>
            <td className={'sub-header'}>{aiResultColTitle}</td>
            <td className={'data-header'}>{aiResultColList}</td>
            <td colSpan={2}> {t(`common:${aiDiagnosisResult}`)}</td>
          </tr>

          {/* Rule 진단 결과*/}
          <tr>
            <td
              className={'sub-header'}
              style={{ verticalAlign: 'middle' }}
              dangerouslySetInnerHTML={{ __html: ruleResultColTitle }}
              rowSpan={7}
            ></td>
            <td className={'data-header'}>IEEE</td>
            <td colSpan={2}>{ruleIeeeResult}</td>
          </tr>
          <tr>
            <td className={'data-header'}>IEC</td>
            <td colSpan={2}> {ruleIecResult}</td>
          </tr>
          <tr>
            <td className={'data-header'}>JAPAN ETRA</td>
            <td colSpan={2}>{ruleJapanResult}</td>
          </tr>
          <tr>
            <td className={'data-header'}>{ruleResultColList[0]}</td>
            <td colSpan={2}>{ruleDuvalTriangle}</td>
          </tr>
          <tr>
            <td className={'data-header'}>{ruleResultColList[1]}</td>
            <td colSpan={2}>{ruleDoernenburgRatios}</td>
          </tr>
          <tr>
            <td className={'data-header'}>{ruleResultColList[2]}</td>
            <td colSpan={2}>{ruleRogersRatios}</td>
          </tr>
          <tr>
            <td className={'data-header'}>{ruleResultColList[3]}</td>
            <td colSpan={2}>{ruleBasicGasRatios}</td>
          </tr>

          {/*이상유형, 이상발생*/}
          <tr>
            <td className={'sub-header'}>{faultResultColList[0]}</td>
            <td>
              <div
                className={`description-box`}
                dangerouslySetInnerHTML={{
                  __html:
                    langType === 'ko'
                      ? faultResultRowList[0]
                      : faultResultRowList[2],
                }}
              />
            </td>
            <td className={'sub-header'}>{faultResultColList[1]}</td>
            <td>
              <div
                className={`description-box`}
                dangerouslySetInnerHTML={{
                  __html:
                    langType === 'ko'
                      ? faultResultRowList[1]
                      : faultResultRowList[3],
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </DiagnosisResultTableSectionWrap>
  );
}

export default DiagnosisResultTableSection;
