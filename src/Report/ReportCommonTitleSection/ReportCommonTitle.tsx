import React from 'react';
import { ReportCommonTitleWrap } from './StyleObj';

function ReportCommonTitle(props: any) {
  const { title } = props;
  return <ReportCommonTitleWrap>{title}</ReportCommonTitleWrap>;
}

export default ReportCommonTitle;
