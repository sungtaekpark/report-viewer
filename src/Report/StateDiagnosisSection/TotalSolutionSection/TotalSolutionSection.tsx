import React, { useLayoutEffect } from 'react';
import { TotalSolutionSectionWrap } from './StyleObj';
import ReportCommonLabel from '../../ReportCommonLabelSection/ReportCommonLabel';
import { useTranslation } from 'react-i18next';

function TotalSolutionSection(props: any) {
  const { t } = useTranslation();
  const { generalOpinion } = props;
  const {
    ruleAnalysisComment,
    ruleMaintenanceComment,
    ruleAnalysisCommentEn,
    ruleMaintenanceCommentEn,
  } = generalOpinion;
  const langType = t('common:langType');

  const transformMaintenanceComment =
    langType === 'ko'
      ? ruleMaintenanceComment?.split(/<br>/g).join('<br>')
      : ruleMaintenanceCommentEn?.split(/<br>/g).join('<br>');

  const transformAnalysisComment =
    langType === 'ko'
      ? ruleAnalysisComment?.split(/<br>/g).join('<br>')
      : ruleAnalysisCommentEn?.split(/<br>/g).join('<br>');

  const totalComment =
    transformMaintenanceComment + `<br>` + transformAnalysisComment;

  return (
    <TotalSolutionSectionWrap>
      <ReportCommonLabel label={t(`report:generalOpinion`)} />
      <div className={`text-box`}>
        <div
          className={`html-text-box`}
          dangerouslySetInnerHTML={{ __html: totalComment }}
        />
      </div>
    </TotalSolutionSectionWrap>
  );
}

export default TotalSolutionSection;
