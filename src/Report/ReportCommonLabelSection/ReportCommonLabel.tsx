import React from 'react';
import { ReportCommonLabelWrap } from './StyleObj';
function ReportCommonLabel(props: any) {
  const { label } = props;
  return <ReportCommonLabelWrap>{label}</ReportCommonLabelWrap>;
}

export default ReportCommonLabel;
