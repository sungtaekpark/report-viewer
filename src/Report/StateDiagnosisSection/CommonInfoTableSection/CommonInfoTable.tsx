import React from 'react';
import { CommonInfoTableWrap } from './StylObj';
import { useTranslation } from 'react-i18next';

function CommonInfoTable(props: any) {
  const { t } = useTranslation();
  const { basicInfo, headerData } = props;
  const { assetName, analysisDate } = headerData;

  const {
    companyName,
    siteName,
    resourceId,
    assetType,
    usage,
    voltage,
    capacity,
    manufacturer,
    manufacturingDate,
    operatingDate,
  } = basicInfo;

  const columns = [
    [
      t(`page:registration.company`),
      t(`table:header.department`),
      t(`table:header.assetNumber`),
      t(`table:header.assetType`),
      t(`table:header.usage`),
    ],
    [
      t(`table:header.voltage`),
      t(`table:header.capacity`),
      t(`table:header.manufacturer`),
      t(`table:header.yearMonth`),
      t(`table:header.pressurizationDate`),
    ],
  ];

  const rows = [
    [companyName, siteName, resourceId, assetType, usage],
    [voltage, capacity, manufacturer, manufacturingDate, operatingDate],
  ];

  const filteredData = columns[0].map((data, index) => ({
    header: data,
    value: rows[0][index],
  }));

  const filteredData2 = columns[1].map((data, index) => ({
    header: data,
    value: rows[1][index],
  }));

  return (
    <CommonInfoTableWrap>
      <div className={'basic-info-layer'}>
        <div>
          {t(`common:analysisDate`)} : {analysisDate}
        </div>
        <div>
          {t(`table:header.assetName`)} : {assetName}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <table>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td className={'sub-header'}>{data.header}</td>
                <td>{data.value}</td>
                <td className={'sub-header'}>{filteredData2[index].header}</td>
                <td>{filteredData2[index].value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CommonInfoTableWrap>
  );
}

export default CommonInfoTable;
