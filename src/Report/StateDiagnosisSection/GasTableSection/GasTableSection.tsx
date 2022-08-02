import React from 'react';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import { GasTableSectionWrap } from './StyleObj';
import { useTranslation } from 'react-i18next';

function GasTableSection(props: any) {
  const { dga } = props;
  const { h2, c2h2, c2h4, c2h6, ch4, co, co2, o2, n2, c3h8, h2o, tdcg } = dga;
  const { t } = useTranslation();

  const newData = [
    { head: 'H2', data: h2 },
    { head: 'C2H2', data: c2h2 },
    { head: 'C2H4', data: c2h4 },
    { head: 'C2H6', data: c2h6 },
    { head: 'CH4', data: ch4 },
    { head: 'CO', data: co },
    { head: 'CO2', data: co2 },
    { head: 'TDCG', data: tdcg },
    { head: 'O2', data: o2 },
    { head: 'N2', data: n2 },
    { head: 'C3H8', data: c3h8 },
    { head: 'H2O', data: h2o },
  ];

  return (
    <GasTableSectionWrap>
      <ReportCommonLabel label={t(`table:header.gasDensity`)} />
      <table>
        <thead>
          <tr>
            {newData.map((data, index) => (
              <td key={index} className={'sub-header'}>
                {data.head}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {newData.map((data, index) => (
              <td key={index}>{data.data}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </GasTableSectionWrap>
  );
}

export default GasTableSection;
