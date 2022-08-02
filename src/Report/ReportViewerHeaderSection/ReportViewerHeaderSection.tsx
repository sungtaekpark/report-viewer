import React from 'react';
import { ReportViewerHeaderSectionWrap } from './StyleObj';
import substationBi from '../../../../asset/images/substation_logo_small.svg';
import { useTranslation } from 'react-i18next';

function ReportViewerHeaderSection(props: any) {
  const { headerData } = props;
  const { assetName, analysisDate } = headerData;
  const {t} = useTranslation()

  const headerText = t(`report:reportHeader`);

  return (
    <ReportViewerHeaderSectionWrap>
      <div className={'header-text-area'}>
        <div>{headerText}</div>
        {/*<div className={'basic-info-layer'}>*/}
        {/*  <div>*/}
        {/*    {t(`common:analysisDate`)} : {analysisDate}*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    {t(`table:header.assetName`)} : {assetName}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>

      <div className={'logo-area'}>
        <img alt={`logo`} src={substationBi} />
      </div>
    </ReportViewerHeaderSectionWrap>
  );
}

export default ReportViewerHeaderSection;
