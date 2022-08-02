import React from 'react';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import { useTranslation } from 'react-i18next';
import { LastFiveTimesDgaTableSectionWrap } from './StyleObj';

function LastFiveTimesDgaTableSection(props: any) {
  const { t } = useTranslation();
  const langSet: Record<string, string> = {
    normal: t('common:normal'),
    attention: t('common:attention'),
    caution: t('common:caution'),
    abnormal: t('common:abnormal'),
    critical: t('common:critical'),
  };
  const { lastFiveTimesDga } = props;

  const lastFiveTimesDgaLabel = t(`report:lastFiveTimesDgaLabel`);

  const columns = [
    [
      t(`report:date`),
      'H2',
      'C2H2',
      'C2H4',
      'C2H6',
      'CH4',
      'CO',
      t(`report:oilFiltration`),
      `IEEE\n${t(`report:diagnosisStatus`)}`,
      `AI\n${t(`report:diagnosisStatus`)}`,
    ],
  ];

  const rows = lastFiveTimesDga.map((row: any) => {
    const {
      acquisitionDate,
      h2,
      c2h2,
      c2h4,
      c2h6,
      ch4,
      co,
      filteringDate,
      ruleIeeeResult,
      aiDiagnosisResult,
    } = row;
    return [
      acquisitionDate,
      h2,
      c2h2,
      c2h4,
      c2h6,
      ch4,
      co,
      filteringDate,
      ruleIeeeResult,
      langSet[aiDiagnosisResult],
    ];
  });

  return (
    <LastFiveTimesDgaTableSectionWrap>
      <ReportCommonLabel label={lastFiveTimesDgaLabel} />
      <table>
        <thead>
          <tr>
            {columns[0].map((column, index) => (
              <td className={'sub-header'} key={index}>
                {column}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: number) => (
            <tr key={index} style={{ borderBottom: '1px solid #AAAAAA' }}>
              {row.map((data: any, index: number) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </LastFiveTimesDgaTableSectionWrap>
  );
}

export default LastFiveTimesDgaTableSection;
